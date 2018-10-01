
const initial = {
  fatal: false,
  message: ''
}

export const ERROR_SET_FATAL = 'ERROR_SET_FATAL';

export const reducer = (state = initial, action = {}) => {
  switch (action.type) {
    case ERROR_SET_FATAL: return {
      ...state, 
      fatal: true,
      message: action.payload
    };
    default: return state;
  }
};

export default reducer;
