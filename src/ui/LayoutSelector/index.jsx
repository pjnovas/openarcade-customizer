import './style.scss';

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Text, {getTranslations} from '/ui/Text';

const LayoutSelector = ({
  layouts,
  layout,
  onChange
}) => 
  <div className="LayoutSelector">
    <label htmlFor="layout-selector"><Text id="fields.layout_selector.label"/></label>
    <select id="layout-selector" value={layout} onChange={onChange}>
      {layouts.map(({value, label}) =>  
        <option key={value} value={value}>{label}</option>
      )}
    </select>
  </div>

LayoutSelector.propTypes = {
  layouts: PropTypes.array,
  layout: PropTypes.string,
  onChange: PropTypes.func
};

export const mapStateToProps = state => ({
  layouts: state.layouts.map(value => ({
    value,
    label: getTranslations(state.intl.current)[`fields.layout_selector.layouts.${value}`]
  })),
  layout: state.current.layout
});

export const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch({ type: 'CURRENT_CHANGE_LAYOUT', payload: e.target.value })
});

export default connect(mapStateToProps, mapDispatchToProps)(LayoutSelector);
