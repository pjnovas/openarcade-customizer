import invert from 'lodash/invert';

const initial = {
  filament: {
    black: '222222',
    white: 'ffffff',
    green: '1de250',
    blue: '0000ff',
    red: 'ff0000'
  },
  vinyl: {
    black: '1c1c1a',      // 2011
    white: 'ffffff',      // 2010
    green: '00a947',      // 2068
    green2: '00903d',     // 2061
    blue: '0063af',       // 2052
    blue2: '0094da',      // 2087
    red: 'd10a0f',        // 2031
    red2: 'ba1b18',       // 2800
    yellow: 'ffd600',     // 2021
    yellow2: 'fab500',    // 2015
    orange: 'e77107',     // 2035
    violet: '6d4d99',     // 2095
    pink: 'd41759',       // 2037
    gray: 'cfcfcf',       // 2074
    gray2: 'a9a9a9',      // 2076
    turquoise: '5ab9a3',  // 2097
    turquoise2: '018e86', // 2090
    brown: '433127',      // 2805
    brown2: 'f3e4bb'      // 2080
  },
  stick: {
    black: '222222', // idk
    white: 'ffffff', // idk
    blue: '4ba7dc',
    green: '00c467',
    red: 'e01a35', // idk
    pink: 'ff59dd', // idk
    yellow: 'efe410' // idk
  },
  button: {
    black: '222222', // idk
    white: 'ffffff', // idk
    blue: '588fb6',
    green: '00aa3f',
    red: 'e01a35', // idk
    pink: 'ff59dd', // idk
    yellow: 'efe410' // idk
  }
}

const ids = {
  black: 'bla',
  white: 'whi',
  green: 'gre',
  green2: 'gre2',
  blue: 'blu',
  blue2: 'blu2',
  red: 'red',
  red2: 'red2',
  yellow: 'yel',
  yellow2: 'yel2',
  orange: 'ora',
  violet: 'vio',
  pink: 'pin',
  gray: 'gra',
  gray2: 'gra2',
  turquoise: 'tur',
  turquoise2: 'tur2',
  brown: 'bro',
  brown2: 'bro2'
};

const nameOfIds = invert(ids);

export const stringToValue = id => nameOfIds[id];
export const valueToString = name => ids[name];

export const reducer = (state = initial, action = {}) => {
  return state;
};

export default reducer;