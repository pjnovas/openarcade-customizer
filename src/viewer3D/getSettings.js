
// TODO: move into a Selector

const legoff = 6;

const getSettings = (sz = {
  width: 200, // X
  height: 70, // Y
  depth: 160, // Z
  thick: 6
}) => ({
  buttons: {
    positions: [[-60, sz.height, -5]],
    rotations: [[0, 0, 0]]
  },
  USB_rack: {
    positions: [[sz.width/2 + sz.thick - 14, sz.height/2, 0]],
    rotations: [[-Math.PI / 2, 0, -Math.PI / 2]]
  },
  ventilation_buttons: {
    positions: [[-sz.width/2 - sz.thick, sz.height/2, 0]],
    rotations: [[-Math.PI / 2, -Math.PI, -Math.PI / 2]]
  },
  ventilation: {
    positions: [[-sz.width/2 - sz.thick, sz.height/2, 0]],
    rotations: [[-Math.PI / 2, -Math.PI, -Math.PI / 2]]
  },
  cheat_buttons: {
    positions: [[-sz.width/2 - sz.thick, sz.height/2, 0]],
    rotations: [[-Math.PI / 2, -Math.PI, -Math.PI / 2]]
  },
  rpi_back_w_selector: {
    positions: [[120/2, 10, -sz.depth/2 - sz.thick]],
    rotations: [[0, Math.PI, 0]]
  },
  rpi_back: {
    positions: [[120/2, 10, -sz.depth/2 - sz.thick]],
    rotations: [[0, Math.PI, 0]]
  },
  USB_output: {
    positions: [[-44, 14, -sz.depth/2 + sz.thick]],
    rotations: [[0, Math.PI, 0]]
  },
  leg: {
    positions: [
      [-sz.width/2 - (sz.thick - legoff), 0, -sz.depth/2 - (sz.thick - legoff)],
      [-sz.width/2 - (sz.thick - legoff), 0, sz.depth/2 + (sz.thick - legoff)],
      [sz.width/2 + (sz.thick - legoff), 0, sz.depth/2 + (sz.thick - legoff)],
      [sz.width/2 + (sz.thick - legoff), 0, -sz.depth/2 - (sz.thick - legoff)]
    ],
    rotations: [
      [0, - Math.PI / 2, 0],
      [0, 0, 0],
      [0, Math.PI / 2, 0],
      [0, -Math.PI , 0],
    ]
  },
  button_power: {
    positions: [[-50, 30, sz.depth/2 + sz.thick]],
    rotations: [[0, 0, 0]],
  },
  button12: {
    positions: [
      [50, sz.height/2, sz.depth/2 + sz.thick],
      [25, sz.height/2, sz.depth/2 + sz.thick]
    ],
    rotations: [
      [Math.PI/2, 0, 0],
      [Math.PI/2, 0, 0]
    ]
  },
  side_left: {
    box: {
      width: sz.depth + sz.thick*2,
      height: sz.height,
      depth: sz.thick
    },
    positions: [[-sz.width/2 - sz.thick/2, sz.height/2, 0]],
    rotations: [[0, Math.PI / 2, 0]]
  },
  side_right: {
    box: {
      width: sz.depth + sz.thick*2,
      height: sz.height,
      depth: sz.thick
    },
    positions: [[sz.width/2 + sz.thick/2, sz.height/2, 0]],
    rotations: [[0, Math.PI / 2, 0]]
  },
  side_base: {
    box: {
      width: sz.width,
      height: sz.thick,
      depth: sz.depth
    },
    positions: [[0, sz.thick/2, 0]],
    rotations: [[0, 0, 0]]
  },
  side_back: {
    box: {
      width: sz.width,
      height: sz.height,
      depth: sz.thick
    },
    positions: [[0, sz.height/2, -sz.depth/2 - sz.thick/2]],
    rotations: [[0, 0, 0]]
  },
  side_front: {
    box: {
      width: sz.width,
      height: sz.height,
      depth: sz.thick
    },
    positions: [[0, sz.height/2, sz.depth/2 + sz.thick/2]],
    rotations: [[0, 0, 0]]
  },
  side_top: {
    box: {
      width: sz.width,
      height: sz.thick,
      depth: sz.depth
    },
    positions: [[0, sz.height - sz.thick/2, 0]],
    rotations: [[0, 0, 0]]
  }
});

export default getSettings;