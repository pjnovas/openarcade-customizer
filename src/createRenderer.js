import * as THREE from 'three';

export default () => {
  let renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.shadowMap.enabled = true;

  document.body.appendChild( renderer.domElement );

  return renderer;
} 