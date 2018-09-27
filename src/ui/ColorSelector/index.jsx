import './style.scss';

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import intersection from 'lodash/intersection';

import ColorPicker from '/ui/ColorPicker';
import Text from '/ui/Text';

const ColorSelector = ({
  parts
}) => 
  <div className="ColorSelector">
    <label><Text id="fields.color_selector.label"/></label>
    <ul>
      {parts.map(part => 
        <li key={part}>
          <ColorPicker part={part}/>
        </li>
      )}
    </ul>
  </div>

ColorSelector.propTypes = {
  parts: PropTypes.arrayOf(PropTypes.string)
};

export const mapStateToProps = state => ({
  parts: intersection(
    Object.keys(state.current.combination),
    [
      ...state.modes[state.current.mode],
      'side_left',
      'side_right',
      'side_base',
      'side_back',
      'side_front',
      'side_top'
    ]
  )
});

export default connect(mapStateToProps)(ColorSelector);
