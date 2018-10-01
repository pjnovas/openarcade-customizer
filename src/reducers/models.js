
const names = [
  'USB_rack',
  'USB_output',
  'leg',
  'rpi_back_w_selector',
  'ventilation_buttons',
  'cheat_buttons',
  'rpi_back',
  'ventilation',
  'buttons_26x6_EG',
  'buttons_26x6_DG',
  'buttons_26x6_ST',
  'button_power',
  'button12'
]

// Reducer

const initial = {
  isLoaded: false,
  names,
  geometries: {}
}

export const MODELS_LOADED = 'MODELS_LOADED';

export const reducer = (state = initial, action = {}) => {
  switch (action.type) {
    case MODELS_LOADED: return {...state, 
      isLoaded: true,
      geometries: action.payload
    };
    default: return state;
  }
};

export default names;