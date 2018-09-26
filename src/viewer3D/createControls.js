import OrbitControls from 'three-orbitcontrols';

export default (camera, canvas) => {
  let controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 25, 0);
  controls.enablePan = false;
  controls.update();
  return controls;
} 