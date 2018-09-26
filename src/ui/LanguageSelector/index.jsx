import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './style.scss';

// Reducer

const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

export const reducer = (state = {current: 'es'}, action = {}) => {
  switch (action.type) {
    case CHANGE_LANGUAGE: return {...state, current: action.payload};
    default: return state;
  }
};

// Component

const LanguageSelector = ({
  current,
  setLang
}) =>
  <div className="LanguageSelector">
    <a onClick={() => setLang(current === 'es' ? 'en' : 'es')}>
      {current === 'es' ? 'English' : 'Español'}
    </a>
  </div>

LanguageSelector.propTypes = {
  current: PropTypes.string,
  setLang: PropTypes.func
};

export const mapStateToProps = state => state.intl
export const mapDispatchToProps = dispatch => ({
  setLang: payload => dispatch({ type: CHANGE_LANGUAGE, payload })
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector);
