
const initial = {
  filament: {
    black: '222222',
    white: 'e1e1e3',
    green: '1de250', // green
    blue: '0000ff', // blue?
    red: 'ff0000' // red?
  },
  vinyl: {
    black: '222222',
    white: 'e1e1e3',
    green: '26c950', // green
    blue: '4ba7dc', // Blue
    lightBlue: '63add8', // light blue
    red: 'fe3335', // red
  },
  stick: {
    black: '222222', // idk
    white: 'e1e1e3', // idk
    blue: '4ba7dc',
    green: '00c467',
    red: 'e01a35', // idk
    pink: 'ff59dd', // idk
    yellow: 'efe410' // idk
  },
  button: {
    black: '222222', // idk
    white: 'e1e1e3', // idk
    blue: '588fb6',
    green: '00aa3f',
    red: 'e01a35', // idk
    pink: 'ff59dd', // idk
    yellow: 'efe410' // idk
  }
}

export const reducer = (state = initial, action = {}) => {
  return state;
};

export default reducer;