
const initial = {
  box: {
    width: 200, // X
    height: 70, // Y
    depth: 160, // Z
    thick: 6
  },
  combination: {
    buttons: 'green',
    USB_rack: 'black',
    USB_output: 'conifer',
    ventilation_buttons: 'black',
    ventilation: 'black',
    cheat_buttons: 'black',
    rpi_back_w_selector: 'conifer',
    rpi_back: 'conifer',
    leg: 'conifer',
    side_left: 'malachite',
    side_right: 'malachite',
    side_base: 'black',
    side_back: 'black',
    side_front: 'black',
    side_top: 'black'
  },
  mode: 'retropie_full'
}

export const CURRENT_CHANGE_MODE = 'CURRENT_CHANGE_MODE';
export const CURRENT_CHANGE_SIZE = 'CURRENT_CHANGE_SIZE';
export const CURRENT_CHANGE_COMBINATION = 'CURRENT_CHANGE_COMBINATION';

export const reducer = (state = initial, action = {}) => {
  switch (action.type) {
    case CURRENT_CHANGE_MODE: return {...state, mode: action.payload};
    case CURRENT_CHANGE_SIZE: return {...state, box: {...state.box, ...action.payload}};
    case CURRENT_CHANGE_COMBINATION: return {...state, combination: {...state.combination, ...action.payload}};
    default: return state;
  }
};

export default reducer;
