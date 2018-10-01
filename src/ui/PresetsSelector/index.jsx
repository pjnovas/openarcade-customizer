import './style.scss';

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import intersection from 'lodash/intersection';

import Text from '/ui/Text';
import MenuItemContainer from '/ui/Menu/MenuItem';

const PresetsSelector = ({
  list,
  combinations,
  onSelect
}) => 
  <div className="PresetsSelector">
    <MenuItemContainer name="presets_selector" nonTogglable>
      <div className="presets">
        {list.map(name => 
          <a key={name} onClick={onSelect(combinations[name])}>
            <div style={{backgroundImage: `url(./presets/${name}.jpg)`}} />
          </a>
        )}
      </div>
    </MenuItemContainer>
  </div>

PresetsSelector.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
  combinations: PropTypes.object,
  onSelect: PropTypes.func
};

export const mapStateToProps = state => ({
  list: Object.keys(state.combinations),
  combinations: state.combinations
});

export const mapDispatchToProps = dispatch => ({
  onSelect: payload => e => dispatch({type: 'CURRENT_CHANGE_COMBINATION', payload})
});

export default connect(mapStateToProps, mapDispatchToProps)(PresetsSelector);
