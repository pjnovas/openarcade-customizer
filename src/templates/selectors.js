
import { createSelector } from 'reselect';

import pipe from 'lodash/fp/pipe';
import prop from 'lodash/fp/prop';
import identity from 'lodash/identity';
import get from 'lodash/get';
import noop from 'lodash/noop';

const selectSideWidth = lateral => createSelector(
  () => lateral,
  prop('current.box'),
  (isLateral, {width, depth, thick}) => isLateral ? depth + (thick * 2) : width
);

const selectSideHeight = createSelector(
  prop('current.box.height'),
  identity
);

const selectLabel = (label, lateral) => createSelector(
  selectSideWidth(lateral),
  prop('templates'),
  (width, templates) => ({
    label,
    x: width / 2,
    y: templates.TOP_LEGEND_LABEL
  })
);

export const selectPosition = offset => createSelector(
  () => offset,
  selectSideHeight,
  (offset, height) => ({
    x: 150,
    y: 30 + (height * offset)
  })
);

const selectSize = lateral => createSelector(
  selectSideWidth(lateral),
  selectSideHeight,
  (width, height) => ({ width, height })
);

const selectTopLX = lateral => createSelector(
  () => lateral,
  prop('current.box'),
  prop('templates.TOP_L_HOLE_WIDTH'),
  (isLateral, {thick}, TOP_L_HOLE_WIDTH) => isLateral ? thick + TOP_L_HOLE_WIDTH : TOP_L_HOLE_WIDTH
);

const selectTopLY = createSelector(
  prop('current.box'),
  prop('templates.TOP_L_HOLE_HEIGHT'),
  ({thick, acrylic}, TOP_L_HOLE_HEIGHT) => thick + acrylic + TOP_L_HOLE_HEIGHT
);

const selectLegX = lateral => createSelector(
  () => lateral,
  prop('current.box'),
  prop('templates.LEG_HOLE_DEPTH'),
  (isLateral, {thick}, LEG_HOLE_DEPTH) => isLateral ? thick + LEG_HOLE_DEPTH : LEG_HOLE_DEPTH
);

const selectTopLPositions = lateral => createSelector(
  selectSideWidth(lateral),
  selectTopLX(lateral),
  selectTopLY,
  (width, topLX, topLY) => [{
    x: topLX,
    y: topLY
  }, {
    x: width - topLX,
    y: topLY
  }]);

const selectLegPositions = lateral => createSelector(
  selectSideWidth(lateral),
  selectSideHeight,
  selectLegX(lateral),
  prop('templates.LEG_HOLE_HEIGHT'),
  (width, height, x, LEG_HOLE_HEIGHT) => [{
    x,
    y: height - LEG_HOLE_HEIGHT
  }, {
    x: width - x,
    y: height - LEG_HOLE_HEIGHT
  }]);

const selectBoxScrewHoles = lateral => createSelector(
  selectTopLPositions(lateral),
  selectLegPositions(lateral),
  (screwHoles_TopLs, screwHoles_Legs) => [
    ...screwHoles_TopLs,
    ...screwHoles_Legs
  ]
);

/////////////

const selectPowerHole = lateral => createSelector(
  selectSideWidth(lateral),
  selectSideHeight,
  prop('templates'),
  (width, height, {FRONT_BUTTONS_RATE_POS, POWER_DIAMETER}) => ({
    x: width / FRONT_BUTTONS_RATE_POS,
    y: height / 2,
    dia: POWER_DIAMETER
  })
);

const selectCommandHoles = lateral => createSelector(
  selectSideWidth(lateral),
  selectSideHeight,
  prop('templates'),
  (width, height, {FRONT_BUTTONS_RATE_POS, START_DIAMETER, SELECT_DIAMETER}) => [{
    x: width - (width / FRONT_BUTTONS_RATE_POS),
    y: height / 2,
    dia: START_DIAMETER
  }, {
    x: width - (width / FRONT_BUTTONS_RATE_POS) - (SELECT_DIAMETER * 2),
    y: height / 2,
    dia: SELECT_DIAMETER
  }]
);

const isLateral = side => ['left', 'right'].includes(side) ? true : false;
const selectSectionSizeAndOffset = side => createSelector(
  () => side,
  ({current, templates}) => get(templates, `SECTIONS_BY_MODE.${side}.${current.mode}`),
  (side, sizeAndOffset) => sizeAndOffset
);

const selectSectionX = side => createSelector(
  selectSectionSizeAndOffset(side),
  selectSideWidth(isLateral(side)),
  prop('templates'),
  ([size, offset = 0], width, {SECTION_WIDTH}) => 
    (width / 2) - (SECTION_WIDTH * size / 2) + (SECTION_WIDTH * offset)
);

const selectSectionY = isBack => createSelector(
  () => isBack,
  selectSideHeight,
  prop('templates'),
  (isBack, height, {SECTION_HEIGHT, BACK_SECTION_HEIGHT}) => isBack
    ? (height - SECTION_HEIGHT) - BACK_SECTION_HEIGHT
    : (height / 2) - SECTION_HEIGHT / 2
);

/////////////

const selectSection = side => createSelector(
  selectSectionSizeAndOffset(side),
  selectSideWidth(isLateral(side)),
  selectSideHeight,
  selectSectionX(side),
  selectSectionY(side === 'back'),
  prop('templates'),
  ([size], width, height, x, y, {SECTION_WIDTH, SECTION_HEIGHT, SECTION_HOLE_DISTANCE}) => size ? ({
    section: {
      x,
      y,
      width: SECTION_WIDTH * size,
      height: SECTION_HEIGHT
    },
    screwHoles: [{
      x: x - SECTION_HOLE_DISTANCE,
      y: y + (SECTION_HEIGHT / 2)
    }, {
      x: x + (SECTION_WIDTH * size) + SECTION_HOLE_DISTANCE,
      y: y + (SECTION_HEIGHT / 2)
    }]
  }) : ({screwHoles: []})
);

/////////////

export const selectBaseTemplate = (label, lateral) => createSelector(
  selectLabel(label, lateral),
  selectSize(lateral),
  selectBoxScrewHoles(lateral),
  (name, size, screwHoles) => ({ name, size, screwHoles })
);

export const selectFrontTemplate = createSelector(
  selectBaseTemplate('Front', false),
  selectSectionSizeAndOffset('front'),
  selectPowerHole(false),
  selectCommandHoles(false),
  (base, hasPrower, powerHole, commandHoles) => ({
    ...base,
    screwHoles: [
      ...base.screwHoles,
      ...(hasPrower ? [powerHole] : []),
      ...commandHoles
    ]
  })
);

const fillWithSection = (base, {section, screwHoles}) => ({
  ...base,
  screwHoles: [
    ...base.screwHoles,
    ...screwHoles
  ],
  section
});

export const selectBackTemplate = createSelector(
  selectBaseTemplate('Back', false),
  selectSection('back'),
  fillWithSection
);

export const selectLeftTemplate = createSelector(
  selectBaseTemplate('Left', true),
  selectSection('left'),
  fillWithSection
);

export const selectRightTemplate = createSelector(
  selectBaseTemplate('Right', true),
  selectSection('right'),
  fillWithSection
);
