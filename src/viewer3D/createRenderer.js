import * as THREE from 'three';

export default (canvas, width = window.innerWidth, height = window.innerHeight) => {
  let renderer = new THREE.WebGLRenderer({antialias: true, canvas});
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;
  return renderer;
} 