import * as THREE from 'three';

export default (width = window.innerWidth, height = window.innerHeight) => {
  let camera = new THREE.PerspectiveCamera( 45, width / height, 1, 1000 );
  camera.position.set( -300, 200, 300 );
  return camera;
} 