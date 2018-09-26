import './style.scss';

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Text, {getTranslations} from '/ui/Text';

const SizeSelector = ({
  width,
  height,
  depth,
  thick,
  onChange
}) => 
  <div className="SizeSelector">
    <label><Text id="fields.size_selector.label"/> (mm)</label>
    <ul>
      <li>
        <label><Text id="fields.size_selector.width"/></label>
        <input type="number" value={width} onChange={onChange('width')} min={200} max={600} />
      </li>
      <li>
        <label><Text id="fields.size_selector.height"/></label>
        <input type="number" value={height} onChange={onChange('height')} min={50} max={120}/>
      </li>
      <li>
        <label><Text id="fields.size_selector.depth"/></label>
        <input type="number" value={depth} onChange={onChange('depth')} min={50} max={120} />
      </li>
      <li>
        <label><Text id="fields.size_selector.thick"/></label>
        <input type="number" value={thick} onChange={onChange('thick')} min={3} max={12} />
      </li>
    </ul>
  </div>

SizeSelector.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  depth: PropTypes.number,
  thick: PropTypes.number,
  onChange: PropTypes.func
};

export const mapStateToProps = state => state.current.box;

export const mapDispatchToProps = dispatch => ({
  onChange: prop => e => dispatch({
    type: 'CURRENT_CHANGE_SIZE', 
    payload: {[prop]: Number(e.target.value)}
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(SizeSelector);
