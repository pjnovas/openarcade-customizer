import OrbitControls from 'three-orbitcontrols';

export default (camera, renderer) => {
  let controls = new OrbitControls( camera, renderer.domElement );
  controls.target.set( 0, 25, 0 );
  controls.update();
  return controls;
} 