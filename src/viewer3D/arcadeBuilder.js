import * as THREE from 'three';

import get from 'lodash/get';
import times from 'lodash/times';
import noop from 'lodash/noop';
import flatten from 'lodash/flatten';

import getSettings from './getSettings';

const createMesh = ({geometry, material, position, rotation}) => {
  let mesh = new THREE.Mesh(geometry, material);
  if (position) mesh.position.set.apply(mesh.position, position);
  if (rotation) mesh.rotation.set.apply(mesh.rotation, rotation);
  return mesh;
}

export default ({scene, store}) => {
  let {
    combinations,
    modes,
    colors,
    models,
    current
  } = store.getState();

  let {
    box,
    combination,
    mode
  } = current;

  let settings = getSettings(box);
  let modelGeometries = modes[mode].reduce((all, model) => ({...all, [model]: models.geometries[model]}), {});

  let comb = combinations[combination];
  if (!comb) throw new Error(`Combination ${combination} NOT FOUND`);

  let materials = Object.keys(comb).reduce((result, name) => 
    Object.assign(result, {
      [name]: new THREE.MeshPhongMaterial(
        Object.assign({
          vertexColors: THREE.VertexColors,
          shininess: 0
        }, {
          color: get(colors, `${settings[name].material}[${comb[name]}]`)
        })
      )}
    )
  , {});
  
  let meshes = flatten(
    Object.keys(modelGeometries).map(model => 
      times(get(settings, `${model}.positions.length`, 1), i => createMesh({
        geometry: modelGeometries[model],
        material: materials[model] || new THREE.MeshPhongMaterial({
          vertexColors: THREE.VertexColors,
          shininess: 0
        }),
        position: get(settings, `${model}.positions[${i}]`),
        rotation: get(settings, `${model}.rotations[${i}]`)
      })
    ).map(mesh => {
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      scene.add(mesh);
      return mesh;
    }))
  );

  let sides = [
    'side_left',
    'side_right',
    'side_base',
    'side_top',
    'side_front',
    'side_back'
  ].map(name => {
    let size = get(settings, `${name}.box`, {})

    let mesh = createMesh({
      geometry: new THREE.CubeGeometry(size.width, size.height, size.depth),
      material: materials[name] || noop(),
      position: get(settings, `${name}.positions[0]`),
      rotation: get(settings, `${name}.rotations[0]`)
    });

    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);
    return mesh;
  });

  return () => {
    sides.forEach(side => scene.remove(side));
    meshes.forEach(mesh => scene.remove(mesh));
    Object.keys(materials).forEach(material => materials[material].dispose());
  };
};