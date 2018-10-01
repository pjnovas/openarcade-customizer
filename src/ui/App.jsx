import React, {Fragment} from 'react';
import LanguageSelector from './LanguageSelector';
import Menu from './Menu';

import SizeSelector from '/ui/SizeSelector';
import ModeSelector from '/ui/ModeSelector';
import LayoutSelector from '/ui/LayoutSelector';
import ColorSelector from '/ui/ColorSelector';
import PresetsSelector from '/ui/PresetsSelector';

const App = () => 
  <div>
    <LanguageSelector/>
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
  </div>

export default App