import './style.scss';

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import get from 'lodash/get';
import values from 'lodash/values';
import memoize from 'lodash/memoize';

import Text from '/ui/Text';

// Reducer

const COLOR_PICKER_SET_EDITING = 'COLOR_PICKER_SET_EDITING';

export const reducer = (state = {part: ''}, action = {}) => {
  switch (action.type) {
    case COLOR_PICKER_SET_EDITING: {
      if(action.payload === state.part) return {part: ''};
      return {...state, part: action.payload};
    }
    default: return state;
  }
};

const getMaterialByPart = (state, part) => get(state, `materials.${part}`);
const selectAllowedHEXColorByPart = (state, part) => get(state, `colors.${getMaterialByPart(state, part)}`)

const selectCurrentHEXColorByPart = (state, part) => {
  let colorName = get(state, `current.combination.${part}`);
  return '#' + get(state, `colors.${getMaterialByPart(state, part)}.${colorName}`, 'fff');
};

const ColorPicker = ({
  editing,
  material,
  part,
  color,
  colorNames,
  colorValues,
  onChange,
  onEditClick
}) => 
  <div className="ColorPicker">
    <a className={`color-button ${editing ? 'active' : ''}`} onClick={onEditClick}>
      <i style={{backgroundColor: color}}></i>
      <label><Text id={`parts.titles.${part}`}/></label>
    </a>
    {editing &&
      <div className="picker">
        {colorValues.map(c => 
          <a key={c} className={`color-circle ${c === color ? 'active' : ''}`}
            style={{backgroundColor: c}}
            onClick={onChange(colorNames[colorValues.indexOf(c)])}></a>
        )}
        <p className="material"><Text id={`materials.titles.${material}`}/></p>
      </div>
    }
  </div>

ColorPicker.propTypes = {
  part: PropTypes.string.isRequired,
  material: PropTypes.string,
  color: PropTypes.string,
  colorNames: PropTypes.arrayOf(PropTypes.string),
  colorValues: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  editing: PropTypes.bool
};

ColorPicker.defaultProps = {
  editing: false
};

export const mapStateToProps = (state, ownProps) => ({
  material: getMaterialByPart(state, ownProps.part),
  color: selectCurrentHEXColorByPart(state, ownProps.part),
  colorValues: values(selectAllowedHEXColorByPart(state, ownProps.part)).map(v => `#${v}`),
  colorNames: Object.keys(selectAllowedHEXColorByPart(state, ownProps.part)),
  editing: get(state, 'colorPicker.part') === ownProps.part
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: colorName => e =>
    dispatch({type: 'CURRENT_CHANGE_COMBINATION', payload: {[ownProps.part]: colorName}}),
  onEditClick: () => dispatch({type: COLOR_PICKER_SET_EDITING, payload: ownProps.part})
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker);
