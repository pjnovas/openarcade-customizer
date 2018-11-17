import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SideTemplate from './SideTemplate';
import { sizeShape } from './shapes';
import { mm } from './utils';

const Sheet = ({size}) => (
  <svg width={mm(size.width)} height={mm(size.height)} fill="white" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="8" height="8">
      <path d="M0,8 l8,-8" style={{stroke: '#ddd', strokeWidth: 1}} />
    </pattern>
    
    {/*
    <SideTemplate type="front" pos={{x: 150, y: 30}}/>
    <SideTemplate type="back" pos={{x: 150, y: 350}}/>
    */}

    <SideTemplate type="left" pos={{x: 150, y: 30}}/>
    <SideTemplate type="right" pos={{x: 150, y: 350}}/>
  </svg>
);

Sheet.propTypes = {
  size: PropTypes.shape(sizeShape)
};

const mapStateToProps = ({ templates }) => ({
  size: templates.sheetSize
});

export default connect(mapStateToProps)(Sheet);
