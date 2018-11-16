import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { circleShape } from './shapes';
import {mm} from './utils';

const Hole = ({x, y, dia}) => 
  <React.Fragment>
    <pattern id="hole-pattern" patternUnits="userSpaceOnUse" width="4" height="4">
      <path d="M0,0 l4,4" style={{stroke: '#ddd', strokeWidth: 1}} />
    </pattern>
    
    <circle cx={mm(x)} cy={mm(y)} r={mm(dia/2)} fill="url(#hole-pattern)" />
    <circle cx={mm(x)} cy={mm(y)} r="2" className="point" />
  </React.Fragment> 

Hole.propTypes = circleShape;

export default Hole;
