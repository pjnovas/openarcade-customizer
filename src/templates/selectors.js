

const getTopLHoleHeight = ({thick, acrylic}, {TOP_L_HOLE_HEIGHT}) => thick + acrylic + TOP_L_HOLE_HEIGHT;
const getTopLHoleWidth = isLateral => ({thick}, {TOP_L_HOLE_WIDTH}) => isLateral ? thick + TOP_L_HOLE_WIDTH : TOP_L_HOLE_WIDTH;
const getLegHoleDepth = isLateral => ({thick}, {LEG_HOLE_DEPTH}) => isLateral ? thick + LEG_HOLE_DEPTH : LEG_HOLE_DEPTH;

const getTopLHoleWidthFB = getTopLHoleWidth(false);
const getLegHoleDepthFB = getLegHoleDepth(false);

const getTopLHoleWidthLR = getTopLHoleWidth(true);
const getLegHoleDepthLR = getLegHoleDepth(true);

export const selectFrontTemplate = ({ current, templates }) => ({
  name: {
    label: 'Front',
    x: current.box.width / 2,
    y: templates.TOP_LEGEND_LABEL
  },
  size: {
    width: current.box.width,
    height: current.box.height,
  },
  screwHoles: [{
    x: getTopLHoleWidthFB(current.box, templates),
    y: getTopLHoleHeight(current.box, templates)
  }, {
    x: current.box.width - getTopLHoleWidthFB(current.box, templates),
    y: getTopLHoleHeight(current.box, templates)
  }, {
    x: getLegHoleDepthFB(current.box, templates),
    y: current.box.height - templates.LEG_HOLE_HEIGHT
  }, {
    x: current.box.width - getLegHoleDepthFB(current.box, templates),
    y: current.box.height - templates.LEG_HOLE_HEIGHT
  }, 
    // Buttons
  {
    x: current.box.width / templates.FRONT_BUTTONS_RATE_POS,
    y: current.box.height / 2,
    dia: templates.POWER_DIAMETER
  }, {
    x: current.box.width - (current.box.width / templates.FRONT_BUTTONS_RATE_POS),
    y: current.box.height / 2,
    dia: templates.START_DIAMETER
  }, {
    x: current.box.width - (current.box.width / templates.FRONT_BUTTONS_RATE_POS) - (templates.SELECT_DIAMETER * 2),
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
    x: current.box.width / 2,
    y: templates.TOP_LEGEND_LABEL
  },
  size: {
    width: current.box.width,
    height: current.box.height,
  },
  screwHoles: [{
    x: getTopLHoleWidthFB(current.box, templates),
    y: getTopLHoleHeight(current.box, templates)
  }, {
    x: current.box.width - getTopLHoleWidthFB(current.box, templates),
    y: getTopLHoleHeight(current.box, templates)
  }, {
    x: getLegHoleDepthFB(current.box, templates),
    y: current.box.height - templates.LEG_HOLE_HEIGHT
  }, {
    x: current.box.width - getLegHoleDepthFB(current.box, templates),
    y: current.box.height - templates.LEG_HOLE_HEIGHT
  }, 
  // Section Holes
  { // left
    x: ((current.box.width / 2) - (templates.SECTION_WIDTH * 4) / 2) - templates.SECTION_HOLE_DISTANCE,
    y: getBackYHole({ current, templates })
  }, { // big right
    x: ((current.box.width / 2) + (templates.SECTION_WIDTH * 2)) + templates.SECTION_HOLE_DISTANCE,
    y: getBackYHole({ current, templates })
  }, { // small left
    x: ((current.box.width / 2) + templates.SECTION_WIDTH) - templates.SECTION_HOLE_DISTANCE,
    y: getBackYHole({ current, templates })
  }, { // mid right
    x: ((current.box.width / 2) + templates.SECTION_WIDTH) + templates.SECTION_HOLE_DISTANCE,
    y: getBackYHole({ current, templates })
  }],
  sections: [{
    x: (current.box.width / 2) - (templates.SECTION_WIDTH * 4) / 2,
    y: getBackY({ current, templates }),
    width: templates.SECTION_WIDTH * 4,
    height: templates.SECTION_HEIGHT
  }, {
    x: (current.box.width / 2) + templates.SECTION_WIDTH,
    y: getBackY({ current, templates }),
    width: templates.SECTION_WIDTH,
    height: templates.SECTION_HEIGHT
  }]
});