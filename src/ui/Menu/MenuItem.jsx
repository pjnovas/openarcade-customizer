import './menuItem.scss';

import noop from 'lodash/noop';

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Text from '/ui/Text';

export const MenuItem = ({
  name, 
  visible, 
  openMsg, 
  closedMsg, 
  onChange, 
  nonTogglable,
  children
}) => 
  <div className="MenuItem">
    <a className="MenuHeader" onClick={nonTogglable ? noop : onChange(name)}>
      <Text id={`fields.${name}.label`}/><span>{visible ? openMsg : closedMsg}</span>
    </a>
    {(nonTogglable || visible) &&
      <div className="MenuContent">
        {children}
      </div>
    }
  </div>

MenuItem.propTypes = {
  name: PropTypes.string,
  openMsg: PropTypes.string,
  closedMsg: PropTypes.string,
  collapsed: PropTypes.bool,
  nonTogglable: PropTypes.bool,
  onChange: PropTypes.func
};

MenuItem.defaultProps = {
  openMsg: '',
  closedMsg: ''
};

export const mapStateToProps = (state, ownProps) => ({
  visible: state.menu.visible_item === ownProps.name
});

export const mapDispatchToProps = dispatch => ({
  onChange: payload => e => dispatch({type: 'MENU_ITEM_CHANGE_VISIBLE', payload})
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);