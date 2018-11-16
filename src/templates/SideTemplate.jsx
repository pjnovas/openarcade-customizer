import './SideTemplate.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
  selectBackTemplate
} from './selectors';

const SideTemplate = ({
  name,
  pos,
  size,
  screwHoles,
  screwDiameter,
  sections
}) => (
  <g transform={`translate(${pos.x}, ${pos.y})`} className="SideTemplate">
    <rect width={mm(size.width)} height={mm(size.height)} className="bound-rect"/>

    <g className="cut-sections">
      {sections.map((section, i) => 
        <rect
          key={i}
          x={mm(section.x)}
          y={mm(section.y)}
          width={mm(section.width)}
          height={mm(section.height)}
          fill="url(#diagonalHatch)"/>
      )}
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
  sections: PropTypes.arrayOf(PropTypes.shape(rectShape)),
};

SideTemplate.defaultProps = {
  screwHoles: [],
  sections: []
};

const mapStateToProps = (state, ownProps) => {
  const base = {
    screwDiameter: state.templates.HOLE_DIAMETER
  };

  switch (ownProps.type) {
    case 'front': return Object.assign(base, selectFrontTemplate(state));
    case 'back': return Object.assign(base, selectBackTemplate(state));
    default: return {};
  }
};

export default connect(mapStateToProps)(SideTemplate);