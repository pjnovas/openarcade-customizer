import * as THREE from 'three';

import createCamera from './createCamera.js';
import createScene from './createScene.js';
import createRenderer from './createRenderer.js';
import createControls from './createControls.js';

import modelsLoader from './modelsLoader.js';

const init = () => {
  let camera = createCamera();
  let scene = createScene();
  let renderer = createRenderer();
  
  const build = 'retropie_full';
  const combination = 'blackgreen';

  modelsLoader(scene, build, combination).then(data => {
    let controls = createControls(camera, renderer.domElement);

    // Resize Listener

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }, false );

    // Render Loop

    const clock = new THREE.Clock();

    const animate = () => {     
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    animate();
  });
}

export default init;
