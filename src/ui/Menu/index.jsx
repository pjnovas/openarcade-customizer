import './style.scss';

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import SizeSelector from '/ui/SizeSelector';
import ModeSelector from '/ui/ModeSelector';
import ColorSelector from '/ui/ColorSelector';

import Text from '/ui/Text';

// Reducer

const MENU_CHANGE_VISIBLE = 'MENU_CHANGE_VISIBLE';

export const reducer = (state = {visible: ''}, action = {}) => {
  switch (action.type) {
    case MENU_CHANGE_VISIBLE: {
      if(action.payload === state.visible) return {visible: ''};
      return {...state, visible: action.payload};
    }
    default: return state;
  }
};

// Components

export const MenuItem = ({
  name, 
  collapsed, 
  openMsg, 
  closedMsg, 
  onChange, 
  children
}) => 
  <div className="MenuItem">
    <a className="MenuHeader" onClick={onChange(name)}>
      <Text id={`fields.${name}.label`}/><span>{collapsed ? closedMsg : openMsg}</span>
    </a>
    {!collapsed &&
      <div className="MenuContent">
        {!collapsed && children}
      </div>
    }
  </div>

MenuItem.propTypes = {
  name: PropTypes.string,
  openMsg: PropTypes.string,
  closedMsg: PropTypes.string,
  collapsed: PropTypes.bool,
  onChange: PropTypes.func
};

MenuItem.defaultProps = {
  openMsg: '',
  closedMsg: ''
};

export const mapStateToProps = (state, ownProps) => ({
  collapsed: state.menu.visible !== ownProps.name
});

export const mapDispatchToProps = dispatch => ({
  onChange: payload => e => dispatch({type: MENU_CHANGE_VISIBLE, payload})
});

export const MenuItemContainer = connect(mapStateToProps, mapDispatchToProps)(MenuItem);

////////////////

const Menu = () => 
  <div className="Menu">
    <ModeSelector/>
    <SizeSelector/>
    <ColorSelector/>
  </div>

export default Menu;