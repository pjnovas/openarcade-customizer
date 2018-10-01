import './index.scss';

import renderUI from './ui/index.jsx';
import configureStore from './configureStore';
import queryStringSync from './queryStringSync';

import init from './viewer3D/init.js';
import isWebglEnabled from 'detector-webgl';

const store = configureStore();

queryStringSync(store);

renderUI(store);

if (isWebglEnabled) {
  init(store);
}
else {
  throw new Error('WEBGL disabled, bye')
}
