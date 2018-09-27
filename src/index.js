import './index.scss';

import renderUI from './ui/index.jsx';
import configureStore from './configureStore';
import queryStringSync from './queryStringSync';

import init from './viewer3D/init.js';
import isWebglEnabled from 'detector-webgl';

const store = configureStore();

queryStringSync(store);

renderUI(store);

if (!isWebglEnabled) {
  console.error('WEBGL disabled, bye');
  return;
}

init(store);
