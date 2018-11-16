
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
};

export const reducer = (state = initial, action = {}) => {
  return state;
};

export default reducer;