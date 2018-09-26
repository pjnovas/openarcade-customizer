
// TODO: move into a Selector

const getSettings = (sz = {
  width: 200, // X
  height: 70, // Y
  depth: 160, // Z
  thick: 6
}) => ({
  buttons: {
    positions: [[-60, sz.height, -5]],
    rotations: [[0, 0, 0]],
    material: 'button'
  },
  USB_rack: {
    positions: [[sz.width/2 - 15/2, sz.height/2, 0]],
    rotations: [[-Math.PI / 2, 0, -Math.PI / 2]],
    material: 'filament'
  },
  ventilation_buttons: {
    positions: [[-sz.width/2 - sz.thick, sz.height/2, 0]],
    rotations: [[-Math.PI / 2, -Math.PI, -Math.PI / 2]],
    material: 'filament'
  },
  ventilation: {
    positions: [[-sz.width/2 - sz.thick, sz.height/2, 0]],
    rotations: [[-Math.PI / 2, -Math.PI, -Math.PI / 2]],
    material: 'filament'
  },
  cheat_buttons: {
    positions: [[-sz.width/2 - sz.thick, sz.height/2, 0]],
    rotations: [[-Math.PI / 2, -Math.PI, -Math.PI / 2]],
    material: 'filament'
  },
  rpi_back_w_selector: {
    positions: [[120/2, 10, -sz.depth/2 - sz.thick]],
    rotations: [[0, Math.PI, 0]],
    material: 'filament'
  },
  rpi_back: {
    positions: [[120/2, 10, -sz.depth/2 - sz.thick]],
    rotations: [[0, Math.PI, 0]],
    material: 'filament'
  },
  USB_output: {
    positions: [[-44, 14, -sz.depth/2 + sz.thick]],
    rotations: [[0, Math.PI, 0]],
    material: 'filament'
  },
  leg: {
    positions: [
      [-sz.width/2, 0, -sz.depth/2],
      [-sz.width/2, 0, sz.depth/2],
      [sz.width/2, 0, sz.depth/2],
      [sz.width/2, 0, -sz.depth/2]
    ],
    rotations: [
      [0, - Math.PI / 2, 0],
      [0, 0, 0],
      [0, Math.PI / 2, 0],
      [0, -Math.PI , 0],
    ],
    material: 'filament'
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
    rotations: [[0, Math.PI / 2, 0]],
    material: 'vinyl'
  },
  side_right: {
    box: {
      width: sz.depth + sz.thick*2,
      height: sz.height,
      depth: sz.thick
    },
    positions: [[sz.width/2 + sz.thick/2, sz.height/2, 0]],
    rotations: [[0, Math.PI / 2, 0]],
    material: 'vinyl'
  },
  side_base: {
    box: {
      width: sz.width,
      height: sz.thick,
      depth: sz.depth
    },
    positions: [[0, sz.thick/2, 0]],
    rotations: [[0, 0, 0]],
    material: 'vinyl'
  },
  side_back: {
    box: {
      width: sz.width,
      height: sz.height,
      depth: sz.thick
    },
    positions: [[0, sz.height/2, -sz.depth/2 - sz.thick/2]],
    rotations: [[0, 0, 0]],
    material: 'vinyl'
  },
  side_front: {
    box: {
      width: sz.width,
      height: sz.height,
      depth: sz.thick
    },
    positions: [[0, sz.height/2, sz.depth/2 + sz.thick/2]],
    rotations: [[0, 0, 0]],
    material: 'vinyl'
  },
  side_top: {
    box: {
      width: sz.width,
      height: sz.thick,
      depth: sz.depth
    },
    positions: [[0, sz.height - sz.thick, 0]],
    rotations: [[0, 0, 0]],
    material: 'vinyl'
  }
});

export default getSettings;