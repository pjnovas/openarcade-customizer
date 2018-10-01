import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import LanguageSelector from './LanguageSelector';

import Menu from './Menu';

import SizeSelector from '/ui/SizeSelector';
import ModeSelector from '/ui/ModeSelector';
import LayoutSelector from '/ui/LayoutSelector';
import ColorSelector from '/ui/ColorSelector';
import PresetsSelector from '/ui/PresetsSelector';

import Text from '/ui/Text';

const App = ({hasFatalError, errorId}) => 
  <div>
    <LanguageSelector/>
    {hasFatalError ? 
    <div className="fata-error">
      <Text id={errorId}/>
    </div>
    :
    <Fragment>
      <Menu side="left">
        <Fragment>
          <ModeSelector/>
          <LayoutSelector/>
          <SizeSelector/>
          <ColorSelector/>
        </Fragment>
      </Menu>
      <Menu side="right">
        <PresetsSelector/>
      </Menu>
    </Fragment>
    }
  </div>

export const mapStateToProps = state => ({
  hasFatalError: state.error.fatal,
  errorId: state.error.message
});

export default connect(mapStateToProps)(App);