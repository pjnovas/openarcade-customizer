import './index.css';

import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
var STLLoader = require('three-stl-loader')(THREE)

var isWebglEnabled = require('detector-webgl');
if (!isWebglEnabled) {
  console.error('WEBGL disabled, bye');
  return;
}

var scene, camera, renderer, exporter, mesh;

init();
animate();

function init() {

  camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
  camera.position.set( 200, 100, 200 );

  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xa0a0a0 );
  scene.fog = new THREE.Fog( 0xa0a0a0, 200, 1000 );

  var hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
  hemiLight.position.set( 0, 200, 0 );
  scene.add( hemiLight );

  var directionalLight = new THREE.DirectionalLight( 0xffffff );
  directionalLight.position.set( 0, 200, 100 );
  directionalLight.castShadow = true;
  directionalLight.shadow.camera.top = 180;
  directionalLight.shadow.camera.bottom = - 100;
  directionalLight.shadow.camera.left = - 120;
  directionalLight.shadow.camera.right = 120;
  scene.add( directionalLight );

  // ground

  var ground = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2000, 2000 ), new THREE.MeshPhongMaterial( { color: 0x999999, depthWrite: false } ) );
  ground.rotation.x = - Math.PI / 2;
  ground.receiveShadow = true;
  scene.add( ground );

  var grid = new THREE.GridHelper( 2000, 20, 0x000000, 0x000000 );
  grid.material.opacity = 0.2;
  grid.material.transparent = true;
  scene.add( grid );

  // ASCII file
  var loader = new STLLoader();
  let p = { color: 0xff5533 };
  loader.load( './models/cheat_buttons.stl', geometry => {
    // var material = new THREE.MeshPhongMaterial( { color: 0xff55ff } );
    var material = new THREE.MeshPhongMaterial( p );
    var mesh = new THREE.Mesh( geometry, material );
    // mesh.position.set( 0, - 0.25, 0.6 );
    // mesh.rotation.set( 0, - Math.PI / 2, 0 );
    // mesh.scale.set( 1, 1, 1 );
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add( mesh );
  } );

  //

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.shadowMap.enabled = true;
  document.body.appendChild( renderer.domElement );

  //

  var controls = new OrbitControls( camera, renderer.domElement );
  // controls.enableDamping = true
  // controls.dampingFactor = 0.25
  // controls.enableZoom = false

  controls.target.set( 0, 25, 0 );
  controls.update();

  //

  window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate() {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
}
