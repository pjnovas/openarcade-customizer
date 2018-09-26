import './style.scss';

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Text, {getTranslations} from '/ui/Text';

const ModeSelector = ({
  modes,
  mode,
  onChange
}) => 
  <div className="ModeSelector">
    <label for="mode-selector"><Text id="fields.mode_selector"/></label>
    <select id="mode-selector" selected={mode} onChange={onChange}>
      {modes.map(({value, label}) =>  
        <option key={value} value={value}>{label}</option>
      )}
    </select>
  </div>

ModeSelector.propTypes = {
  modes: PropTypes.array,
  mode: PropTypes.string,
  onChange: PropTypes.func
};

export const mapStateToProps = state => ({
  modes: Object.keys(state.modes).map(value => ({
    value,
    label: getTranslations(state.intl.current)[`modes.${value}`]
  })),
  mode: state.current.mode
});

export const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch({ type: 'CURRENT_CHANGE', payload: {mode: e.target.value} })
});

export default connect(mapStateToProps, mapDispatchToProps)(ModeSelector);
