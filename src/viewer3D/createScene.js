import * as THREE from 'three';

export default () => {
  let scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xa0a0a0 );
  scene.fog = new THREE.Fog( 0xa0a0a0, 500, 1000 );

  // Lights 

  let hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
  hemiLight.position.set( 0, 200, 0 );
  scene.add( hemiLight );

  let directionalLight = new THREE.DirectionalLight( 0xffffff );
  directionalLight.position.set( 0, 200, 100 );
  directionalLight.castShadow = true;
  directionalLight.shadow.camera.top = 180;
  directionalLight.shadow.camera.bottom = - 100;
  directionalLight.shadow.camera.left = - 120;
  directionalLight.shadow.camera.right = 120;
  scene.add( directionalLight );

  // Ground

  let ground = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2000, 2000 ), new THREE.MeshPhongMaterial( { color: 0x999999, depthWrite: false } ) );
  ground.rotation.x = - Math.PI / 2;
  ground.receiveShadow = true;
  scene.add( ground );

  let grid = new THREE.GridHelper( 2000, 20, 0x000000, 0x000000 );
  grid.material.opacity = 0.2;
  grid.material.transparent = true;
  scene.add( grid );

  return scene;
} 