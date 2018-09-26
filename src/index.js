import './index.scss';

import renderUI from './ui/index.jsx';
import configureStore from './configureStore';

import init from './viewer3D/init.js';
import isWebglEnabled from 'detector-webgl';

// TODO: get URL query string and set as preloadedState
const store = configureStore();

renderUI(store);

if (!isWebglEnabled) {
  console.error('WEBGL disabled, bye');
  return;
}

init(store);
