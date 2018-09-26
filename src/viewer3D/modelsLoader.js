import * as THREE from 'three';
const STLLoader = require('three-stl-loader')(THREE);

export default ({isLoaded, names, geometries}) => 
  isLoaded 
    ? Promise.resolve(geometries)
    : Promise.all(
        names.map(name => new Promise(resolve => {
          (new STLLoader()).load(`./models/${name}.stl`, geometry => {
            resolve({name, geometry});
          });
        }))
      ).then(all => 
        all.reduce((models, {name, geometry}) => ({...models, [name]: geometry}), {})
      );
