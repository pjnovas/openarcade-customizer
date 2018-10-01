import './index.scss';

import renderUI from './ui/index.jsx';
import configureStore from './configureStore';
import queryStringSync from './queryStringSync';

import init from './viewer3D/init.js';
import isWebglEnabled from 'detector-webgl';

// Start with both menu hidden on mobile devices
let isMobile = window.innerWidth < 500;
const store = configureStore({
  menu: {
    isMobile,
    left_hidden: isMobile,
    right_hidden: isMobile
  }
});

queryStringSync(store);

renderUI(store);

if (isWebglEnabled) {
  init(store);
}
else {
  throw new Error('WEBGL disabled, bye')
}
