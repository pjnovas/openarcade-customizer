import * as THREE from 'three';

export default () => {
  let camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
  camera.position.set( -300, 200, 300 );
  return camera;
} 