
const initial = {
  box: {
    width: 200, // X
    height: 70, // Y
    depth: 160, // Z
    thick: 6,
    acrylic: 3
  },
  combination: {
    buttons: 'green',
    USB_rack: 'black',
    USB_output: 'green',
    ventilation_buttons: 'black',
    ventilation: 'black',
    cheat_buttons: 'black',
    rpi_back_w_selector: 'green',
    rpi_back: 'green',
    leg: 'green',
    side_left: 'green',
    side_right: 'green',
    side_base: 'black',
    side_back: 'black',
    side_front: 'black',
    side_top: 'black'
  },
  mode: 'retropie_full',
  layout: '26x6_EG'
}

export const CURRENT_CHANGE_MODE = 'CURRENT_CHANGE_MODE';
export const CURRENT_CHANGE_LAYOUT = 'CURRENT_CHANGE_LAYOUT';
export const CURRENT_CHANGE_SIZE = 'CURRENT_CHANGE_SIZE';
export const CURRENT_CHANGE_COMBINATION = 'CURRENT_CHANGE_COMBINATION';

export const reducer = (state = initial, action = {}) => {
  switch (action.type) {
    case CURRENT_CHANGE_MODE: return {...state, mode: action.payload};
    case CURRENT_CHANGE_LAYOUT: return {...state, layout: action.payload};
    case CURRENT_CHANGE_SIZE: return {...state, box: {...state.box, ...action.payload}};
    case CURRENT_CHANGE_COMBINATION: return {...state, combination: {...state.combination, ...action.payload}};
    default: return state;
  }
};

export default reducer;
