import './SideTemplate.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import isEmpty from 'lodash/isEmpty';

import Hole from './Hole';
import { mm } from './utils';

import {
  sizeShape,
  positionShape,
  circleShape,
  rectShape
} from './shapes';

import { 
  selectFrontTemplate,
  selectBackTemplate,
  selectLeftTemplate,
  selectRightTemplate
} from './selectors';

const SideTemplate = ({
  name,
  pos,
  size,
  screwHoles,
  screwDiameter,
  section
}) => (
  <g transform={`translate(${pos.x}, ${pos.y})`} className="SideTemplate">
    <rect width={mm(size.width)} height={mm(size.height)} className="bound-rect"/>

    <g className="cut-sections">
      {!isEmpty(section) && 
        <rect
          x={mm(section.x)}
          y={mm(section.y)}
          width={mm(section.width)}
          height={mm(section.height)}
          fill="url(#diagonalHatch)"/>
      }
    </g>

    <g className="screw-holes">
      {screwHoles.map((hole, i) => <Hole key={i} dia={screwDiameter} {...hole} />)}
    </g>
    
    <text x={mm(name.x)} y={mm(name.y)}>{name.label}</text>
  </g>
);

SideTemplate.propTypes = {
  type: PropTypes.oneOf(['front', 'back', 'left', 'right']),
  name: PropTypes.shape({
    ...positionShape,
    label: PropTypes.string
  }),
  pos: PropTypes.shape(positionShape),
  size: PropTypes.shape(sizeShape),
  screwHoles: PropTypes.arrayOf(PropTypes.shape(circleShape)),
  screwDiameter: PropTypes.number,
  section: PropTypes.shape(rectShape)
};

SideTemplate.defaultProps = {
  pos: {x: 0, y: 0},
  screwHoles: [],
  section: {}
};

const mapStateToProps = (state, ownProps) => {
  const base = {
    screwDiameter: state.templates.HOLE_DIAMETER
  };

  switch (ownProps.type) {
    case 'front': return Object.assign(base, selectFrontTemplate(state));
    case 'back': return Object.assign(base, selectBackTemplate(state));
    case 'left': return Object.assign(base, selectLeftTemplate(state));
    case 'right': return Object.assign(base, selectRightTemplate(state));
    default: return {};
  }
};

export default connect(mapStateToProps)(SideTemplate);