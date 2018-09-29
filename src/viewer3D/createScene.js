import * as THREE from 'three';

export default () => {
  let scene = new THREE.Scene();
  scene.background = new THREE.Color(0x999999);

  // Lights 
  let hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
  hemiLight.position.set(100, 200, 100);
  scene.add(hemiLight);
  
  let directionalLightFront = new THREE.DirectionalLight(0xdddddd);
  directionalLightFront.position.set(-200, 300, 200);
  scene.add(directionalLightFront);

  let directionalLightBack = new THREE.DirectionalLight(0xdddddd);
  directionalLightBack.position.set(200, 300, -200);
  scene.add(directionalLightBack);

  // Ground

  let ground = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(600, 600), 
    new THREE.MeshPhongMaterial({ color: 0x222222, depthWrite: false })
  );
  ground.rotation.x = - Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);
/*
  let grid = new THREE.GridHelper(2000, 100, 0x000000, 0x888888);
  grid.material.opacity = 0.15;
  grid.material.transparent = true;
  scene.add(grid);
*/
  return scene;
} 