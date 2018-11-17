
const pageA4 = {
  height: 210,
  width: 297
};

const initial = {
  sheetSize: pageA4,
  
  TOP_LEGEND_LABEL: 12,

  HOLE_DIAMETER: 5,

  TOP_L_HOLE_HEIGHT: 5,
  TOP_L_HOLE_WIDTH: 23,

  LEG_HOLE_HEIGHT: 17.5,
  LEG_HOLE_DEPTH: 10,

  FRONT_BUTTONS_RATE_POS: 3.7,
  POWER_DIAMETER: 16,
  START_DIAMETER: 12,
  SELECT_DIAMETER: 12,

  SECTION_HEIGHT: 30,
  SECTION_WIDTH: 30,
  SECTION_HOLE_DISTANCE: 7,

  BACK_SECTION_HEIGHT: 8.5,

  SECTIONS_BY_MODE: {
    front: {
      retropie_full: true,
      retropie_cheater: true,
      retropie: true,
      retropie_solo: true,
      joystick_cheater: false,
      joystick: false,
    },
    back: {
      retropie_full: [4],
      retropie_cheater: [3, -0.5],
      retropie: [3, -0.5],
      retropie_solo: [3, -0.5],
      joystick_cheater: [1, 1.5],
      joystick: [1, 1.5]
    },
    left: {
      retropie_full: [3],
      retropie_cheater: [3],
      retropie: [3],
      retropie_solo: [3],
      joystick_cheater: [1, 1],
      joystick: []
    },
    right: {
      retropie_full: [3],
      retropie_cheater: [3],
      retropie: [3],
      retropie_solo: [],
      joystick_cheater: [],
      joystick: []
    }
  }
};

export const reducer = (state = initial, action = {}) => {
  return state;
};

export default reducer;