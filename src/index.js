import './index.css';
import init from './init.js';
import isWebglEnabled from 'detector-webgl';

if (!isWebglEnabled) {
  console.error('WEBGL disabled, bye');
  return;
}

init();
