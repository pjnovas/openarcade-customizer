import * as THREE from 'three';

import get from 'lodash/get';
import times from 'lodash/times';
import noop from 'lodash/noop';

import getSettings, {
  combinations,
  modes,
  box,
  colors
} from './settings';

const STLLoader = require('three-stl-loader')(THREE);

export default (scene, mode, combination) => Promise.all(
  modes[mode].map(model => new Promise(resolve => {
    let loader = new STLLoader();

    loader.load(`./models/${model}.stl`, geometry => {
      resolve({model, geometry});
    });
  }))
).then(all => {
  let settings = getSettings(); // TODO: Allow for customization of size

  let comb = combinations[combination];
  if (!comb) throw new Error(`Combination ${combination} NOT FOUND`);

  let materials = Object.keys(comb).reduce((result, name) => 
    Object.assign(result, {
      [name]: new THREE.MeshPhongMaterial(
        Object.assign({
          // flatShading: true,
          vertexColors: THREE.VertexColors,
          shininess: 0
        }, {
          color: get(colors, `${settings[name].material}[${comb[name]}]`)
        })
      )}
    )
  , {});

  const createMesh = ({geometry, material, position, rotation}) => {
    let mesh = new THREE.Mesh(geometry, material);

    if (position) {
      mesh.position.set.apply(mesh.position, position);
    }

    if (rotation) {
      mesh.rotation.set.apply(mesh.rotation, rotation);
    }

    return mesh;
  }
  
  all.map(({model, geometry}) => {
    times(get(settings, `${model}.positions.length`, 1), i => createMesh({
      geometry,
      material: materials[model] || new THREE.MeshPhongMaterial({
        vertexColors: THREE.VertexColors,
        shininess: 0
      }),
      position: get(settings, `${model}.positions[${i}]`),
      rotation: get(settings, `${model}.rotations[${i}]`)
    })).map(mesh => {
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      scene.add( mesh );
    });
  });

  [
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
    scene.add( mesh );
  });
  
  /*
  setTimeout(() => {
    material.color.setHex(0xff55ff);
    material.needsUpdate = true
  }, 2000);
  */
});
