import React, {Fragment} from 'react';
import LanguageSelector from './LanguageSelector';
import Menu from './Menu';

import SizeSelector from '/ui/SizeSelector';
import ModeSelector from '/ui/ModeSelector';
import ColorSelector from '/ui/ColorSelector';
import PresetsSelector from '/ui/PresetsSelector';

const App = () => 
  <div>
    <LanguageSelector/>
    <Menu className="left">
      <Fragment>
        <ModeSelector/>
        <SizeSelector/>
        <ColorSelector/>
      </Fragment>
    </Menu>
    <Menu className="right">
      <PresetsSelector/>
    </Menu>
  </div>

export default App