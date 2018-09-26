import * as THREE from 'three';

import noop from 'lodash/noop';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';

import createCamera from './createCamera';
import createScene from './createScene';
import createRenderer from './createRenderer';
import createControls from './createControls';
import modelsLoader from './modelsLoader';
import buildArcade from './arcadeBuilder';

const getWidth = () => {
  // let ctn = document.getElementById('viewport-ctn');
  // return ctn.getBoundingClientRect().width;
  return window.innerWidth;
}

let clearArcade = noop;
const drawArcade = (scene, store) => {
  clearArcade();
  clearArcade = buildArcade({scene, store});
};

export const init = store => {
  let canvas = document.getElementById('viewport');

  let camera = createCamera(getWidth());
  let scene = createScene();
  let renderer = createRenderer(canvas, getWidth());
  
  let controls = createControls(camera, canvas);

  // Resize Listener

  window.addEventListener('resize', () => {
    let width = getWidth();
    camera.aspect = width / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(width, window.innerHeight);
  }, false );

  // Render Loop

  const clock = new THREE.Clock();

  const animate = () => {     
    const delta = clock.getDelta();
    const elapsed = clock.getElapsedTime();

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }

  modelsLoader(store.getState().models).then(models => {
    store.dispatch({type: 'MODELS_LOADED', payload: models});
    drawArcade(scene, store);

    let previousState = {}
    const unsubscribe = store.subscribe(() => {
      let currentState = store.getState().current; 
      
      if (!isEqual(previousState, currentState)) {
        previousState = currentState;
        drawArcade(scene, store);
      }
    });
  });

  animate();
}

export default init;
