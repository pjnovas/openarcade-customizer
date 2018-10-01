import './style.scss';

import noop from 'lodash/noop';
import get from 'lodash/get';

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Text from '/ui/Text';

// Reducer

const MENU_LEFT_CHANGE_HIDDEN = 'MENU_LEFT_CHANGE_HIDDEN';
const MENU_RIGHT_CHANGE_HIDDEN = 'MENU_RIGHT_CHANGE_HIDDEN';
const MENU_ITEM_CHANGE_VISIBLE = 'MENU_ITEM_CHANGE_VISIBLE';

export const reducer = (state = {
  visible_item: 'color_selector',
  isMobile: false,
  left_hidden: false,
  right_hidden: false
}, action = {}) => {
  switch (action.type) {
    case MENU_ITEM_CHANGE_VISIBLE: {
      if(action.payload === state.visible_item) return {...state, visible_item: ''};
      return {...state, visible_item: action.payload};
    }
    case MENU_LEFT_CHANGE_HIDDEN:
      return {
        ...state, 
        left_hidden: action.payload, 
        right_hidden: state.isMobile && !action.payload ? true : state.right_hidden
      };
    case MENU_RIGHT_CHANGE_HIDDEN: 
      return {
        ...state, 
        right_hidden: action.payload, 
        left_hidden: state.isMobile && !action.payload ? true : state.left_hidden
      };
    default: return state;
  }
};

// Component

const Menu = ({children, side, hidden, onChange}) => 
  <div className={`Menu ${side || ''} ${hidden ? 'hidden': ''}`}>
    {children}
    <a className="toggle-menu" onClick={onChange(side, hidden)}>
      {side === 'left' && (hidden ? <Text id={'fields.toggle_menu'}/> : '<')}
      {side === 'right' && (hidden ? <Text id={'fields.toggle_presets'}/> : '>')}
    </a>
  </div>

export const mapStateToProps = (state, ownProps) => ({
  hidden: get(state, `menu.${ownProps.side}_hidden`, false)
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (payload, hidden) => 
    e => dispatch({type: `MENU_${ownProps.side.toUpperCase()}_CHANGE_HIDDEN`, payload: !hidden})
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);