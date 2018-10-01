import get from 'lodash/get';
import ReduxQuerySync from 'redux-query-sync';

import * as modes from '/reducers/modes';
import * as layouts from '/reducers/layouts';
import * as colors from '/reducers/colors';
import * as current from '/reducers/current';

const merge = action => value => value ? action(value) : ({type: 'NOOP'});

const getSizeProp = prop => ({
  selector: state => get(state, `current.box.${prop}`),
  action: merge(value => ({type: current.CURRENT_CHANGE_SIZE, payload: {[prop]: Number(value)}})),
  stringToValue: Number
});

const getColorProp = prop => ({
  selector: state => get(state, `current.combination.${prop}`),
  action: merge(value => ({type: current.CURRENT_CHANGE_COMBINATION, payload: {[prop]: value}})),
  valueToString: colors.valueToString,
  stringToValue: colors.stringToValue
});

const getSizeParams = () => ({
  sw: getSizeProp('width'),
  sh: getSizeProp('height'),
  sd: getSizeProp('depth'),
  st: getSizeProp('thick'),
});

const getCombinatonParams = () => ({
  btns: getColorProp('buttons'),
  leg: getColorProp('leg'),
  
  // Back
  usbo: getColorProp('USB_output'),
  rpis: getColorProp('rpi_back_w_selector'),
  rpi: getColorProp('rpi_back'),

  // Left
  vbtns: getColorProp('ventilation_buttons'),
  vent: getColorProp('ventilation'),
  cbtns: getColorProp('cheat_buttons'),

  // Right
  usbr: getColorProp('USB_rack'),
  
  // Box
  bl: getColorProp('side_left'),
  br: getColorProp('side_right'),
  bb: getColorProp('side_base'),
  bk: getColorProp('side_back'),
  bf: getColorProp('side_front'),
  bt: getColorProp('side_top')
});

export default store => ReduxQuerySync({
  store,
  params: {
    m: {
      selector: state => state.current.mode,
      action: merge(value => ({type: current.CURRENT_CHANGE_MODE, payload: value})),
      valueToString: modes.valueToString,
      stringToValue: modes.stringToValue
    },
    ly: {
      selector: state => state.current.layout,
      action: merge(value => ({type: current.CURRENT_CHANGE_LAYOUT, payload: value}))
    },
    ...getSizeParams(),
    ...getCombinatonParams()
  },
  initialTruth: 'location'
});