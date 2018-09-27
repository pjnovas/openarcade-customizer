import invert from 'lodash/invert';

const initial = {
  retropie_full: [
    'leg',
    'USB_rack',
    'rpi_back_w_selector',
    'ventilation_buttons',
    'buttons',
    'button_power',
    'button12'
  ],
  retropie_cheater: [
    'leg',
    'USB_rack',
    'rpi_back',
    'ventilation_buttons',
    'buttons',
    'button_power',
    'button12'
  ],
  retropie: [
    'leg',
    'USB_rack',
    'rpi_back',
    'ventilation',
    'buttons',
    'button_power',
    'button12'
  ],
  retropie_solo: [
    'leg',
    'rpi_back',
    'ventilation',
    'buttons',
    'button_power',
    'button12'
  ],
  joystick_cheater: [
    'leg',
    'USB_output',
    'buttons',
    'cheat_buttons',
    'button12'
  ],
  joystick: [
    'leg',
    'USB_output',
    'buttons',
    'button12'
  ]
};


const ids = {
  retropie_full: 'rif',
  retropie_cheater: 'ric',
  retropie: 'ri',
  retropie_solo: 'ris',
  joystick_cheater: 'jc',
  joystick: 'j'
};

const nameOfIds = invert(ids);

export const stringToValue = id => nameOfIds[id];
export const valueToString = name => ids[name];

export const reducer = (state = initial, action = {}) => {
  return state;
};

export default reducer;