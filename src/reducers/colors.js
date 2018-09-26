
const initial = {
  filament: {
    black: 0x222222,
    white: 0xe1e1e3,
    conifer: 0x1de250, // green
    blue: 0x0000ff, // blue?
    red: 0xff0000 // red?
  },
  vinyl: {
    black: 0x222222,
    white: 0xe1e1e3,
    malachite: 0x26c950, // green
    summerSky: 0x4ba7dc, // Blue
    malibu: 0x63add8, // light blue
    redOrange: 0xfe3335, // red
    pigmentGreen: 0x00aa3f // green
  },
  stick: {
    black: 0x222222, // idk
    white: 0xe1e1e3, // idk
    blue: 0x4ba7dc,
    green: 0x00c467,
    red: 0xe01a35, // idk
    pink: 0xff59dd, // idk
    yellow: 0xefe410 // idk
  },
  button: {
    black: 0x222222, // idk
    white: 0xe1e1e3, // idk
    blue: 0x588fb6,
    green: 0x00aa3f,
    red: 0xe01a35, // idk
    pink: 0xff59dd, // idk
    yellow: 0xefe410 // idk
  }
}

export const reducer = (state = initial, action = {}) => {
  return state;
};

export default reducer;