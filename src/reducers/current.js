
const initial = {
  box: {
    width: 200, // X
    height: 70, // Y
    depth: 160, // Z
    thick: 6
  },
  combination: 'blackgreen',
  mode: 'retropie_full'
}

export const CURRENT_CHANGE = 'CURRENT_CHANGE';

export const reducer = (state = initial, action = {}) => {
  switch (action.type) {
    case CURRENT_CHANGE: return {...state, ...action.payload};
    default: return state;
  }
};

export default reducer;
