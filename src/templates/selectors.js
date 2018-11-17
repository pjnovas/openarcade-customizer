

const getTopLHoleHeight = ({thick, acrylic}, {TOP_L_HOLE_HEIGHT}) => thick + acrylic + TOP_L_HOLE_HEIGHT;
const getTopLHoleWidth = (isLateral, {thick}, {TOP_L_HOLE_WIDTH}) => isLateral ? thick + TOP_L_HOLE_WIDTH : TOP_L_HOLE_WIDTH;
const getLegHoleDepth = (isLateral, {thick}, {LEG_HOLE_DEPTH}) => isLateral ? thick + LEG_HOLE_DEPTH : LEG_HOLE_DEPTH;

const getSideWidth = (isLateral, {width, depth, thick}) => isLateral ? depth + (thick * 2) : width;

const getSideScrewHoles = (isLateral, { current, templates }) => [{
  x: getTopLHoleWidth(isLateral, current.box, templates),
  y: getTopLHoleHeight(current.box, templates)
}, {
  x: getSideWidth(isLateral, current.box) - getTopLHoleWidth(isLateral, current.box, templates),
  y: getTopLHoleHeight(current.box, templates)
}, {
  x: getLegHoleDepth(isLateral, current.box, templates),
  y: current.box.height - templates.LEG_HOLE_HEIGHT
}, {
  x: getSideWidth(isLateral, current.box) - getLegHoleDepth(isLateral, current.box, templates),
  y: current.box.height - templates.LEG_HOLE_HEIGHT
}];

export const selectFrontTemplate = ({ current, templates }) => ({
  name: {
    label: 'Front',
    x: getSideWidth(false, current.box) / 2,
    y: templates.TOP_LEGEND_LABEL
  },
  size: {
    width: getSideWidth(false, current.box),
    height: current.box.height,
  },
  screwHoles: [
    ...getSideScrewHoles(false, { current, templates }),
    // Buttons
  {
    x: getSideWidth(false, current.box) / templates.FRONT_BUTTONS_RATE_POS,
    y: current.box.height / 2,
    dia: templates.POWER_DIAMETER
  }, {
    x: getSideWidth(false, current.box) - (getSideWidth(false, current.box) / templates.FRONT_BUTTONS_RATE_POS),
    y: current.box.height / 2,
    dia: templates.START_DIAMETER
  }, {
    x: getSideWidth(false, current.box) - (getSideWidth(false, current.box) / templates.FRONT_BUTTONS_RATE_POS) - (templates.SELECT_DIAMETER * 2),
    y: current.box.height / 2,
    dia: templates.SELECT_DIAMETER
  }]
});


const getBackY = ({ current, templates }) => 
  current.box.height - templates.SECTION_HEIGHT - templates.BACK_SECTION_HEIGHT;

const getBackYHole = ({ current, templates }) => 
  getBackY({ current, templates }) + (templates.SECTION_HEIGHT / 2);


export const selectBackTemplate = ({ current, templates }) => ({
  name: {
    label: 'Back',
    x: getSideWidth(false, current.box) / 2,
    y: templates.TOP_LEGEND_LABEL
  },
  size: {
    width: getSideWidth(false, current.box),
    height: current.box.height,
  },
  screwHoles: [
    ...getSideScrewHoles(false, { current, templates }),
  // Section Holes
  { // left
    x: ((getSideWidth(false, current.box) / 2) - (templates.SECTION_WIDTH * 4) / 2) - templates.SECTION_HOLE_DISTANCE,
    y: getBackYHole({ current, templates })
  }, { // big right
    x: ((getSideWidth(false, current.box) / 2) + (templates.SECTION_WIDTH * 2)) + templates.SECTION_HOLE_DISTANCE,
    y: getBackYHole({ current, templates })
  }, { // small left
    x: ((getSideWidth(false, current.box) / 2) + templates.SECTION_WIDTH) - templates.SECTION_HOLE_DISTANCE,
    y: getBackYHole({ current, templates })
  }, { // mid right
    x: ((getSideWidth(false, current.box) / 2) + templates.SECTION_WIDTH) + templates.SECTION_HOLE_DISTANCE,
    y: getBackYHole({ current, templates })
  }],
  sections: [{
    x: (getSideWidth(false, current.box) / 2) - (templates.SECTION_WIDTH * 4) / 2,
    y: getBackY({ current, templates }),
    width: templates.SECTION_WIDTH * 4,
    height: templates.SECTION_HEIGHT
  }, {
    x: (getSideWidth(false, current.box) / 2) + templates.SECTION_WIDTH,
    y: getBackY({ current, templates }),
    width: templates.SECTION_WIDTH,
    height: templates.SECTION_HEIGHT
  }]
});

const getSideY = ({ current, templates }) => 
  (current.box.height / 2) - (templates.SECTION_HEIGHT / 2);

const getSideYHole = ({ current, templates }) => 
  getSideY({ current, templates }) + (templates.SECTION_HEIGHT / 2);

export const selectLeftTemplate = ({ current, templates }) => ({
  name: {
    label: 'left',
    x: getSideWidth(true, current.box) / 2,
    y: templates.TOP_LEGEND_LABEL
  },
  size: {
    width: getSideWidth(true, current.box),
    height: current.box.height,
  },
  screwHoles: [
    ...getSideScrewHoles(true, { current, templates }),
  // Section Holes
  { // left
    x: ((getSideWidth(true, current.box) / 2) - (templates.SECTION_WIDTH * 3) / 2) - templates.SECTION_HOLE_DISTANCE,
    y: getSideYHole({ current, templates })
  }, { // big right
    x: ((getSideWidth(true, current.box) / 2) + (templates.SECTION_WIDTH * 1.5)) + templates.SECTION_HOLE_DISTANCE,
    y: getSideYHole({ current, templates })
  }, { // small left
    x: ((getSideWidth(true, current.box) / 2) + templates.SECTION_WIDTH / 2) - templates.SECTION_HOLE_DISTANCE,
    y: getSideYHole({ current, templates })
  }],
  sections: [{
    x: (getSideWidth(true, current.box) / 2) - (templates.SECTION_WIDTH * 3) / 2,
    y: getSideY({ current, templates }),
    width: templates.SECTION_WIDTH * 3,
    height: templates.SECTION_HEIGHT
  }, {
    x: (getSideWidth(true, current.box) / 2) + templates.SECTION_WIDTH / 2,
    y: getSideY({ current, templates }),
    width: templates.SECTION_WIDTH,
    height: templates.SECTION_HEIGHT
  }]
});

export const selectRightTemplate = ({ current, templates }) => ({
  name: {
    label: 'right',
    x: getSideWidth(true, current.box) / 2,
    y: templates.TOP_LEGEND_LABEL
  },
  size: {
    width: getSideWidth(true, current.box),
    height: current.box.height,
  },
  screwHoles: [
    ...getSideScrewHoles(true, { current, templates }),
  // Section Holes
  { // left
    x: ((getSideWidth(true, current.box) / 2) - (templates.SECTION_WIDTH * 3) / 2) - templates.SECTION_HOLE_DISTANCE,
    y: getSideYHole({ current, templates })
  }, { // big right
    x: ((getSideWidth(true, current.box) / 2) + (templates.SECTION_WIDTH * 1.5)) + templates.SECTION_HOLE_DISTANCE,
    y: getSideYHole({ current, templates })
  }],
  sections: [{
    x: (getSideWidth(true, current.box) / 2) - (templates.SECTION_WIDTH * 3) / 2,
    y: getSideY({ current, templates }),
    width: templates.SECTION_WIDTH * 3,
    height: templates.SECTION_HEIGHT
  }]
});