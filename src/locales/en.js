export default {
  app: {
    title: 'Open Arcade Customizer'
  },
  fields: {
    mode_selector: 'Mode',
    size_selector: {
      label: 'Size',
      width: 'Width',
      height: 'Height',
      depth: 'Depth',
      thick: 'Thick',
    }
  },
  modes: {
    retropie_full: 'RetroPie Full',
    retropie_cheater: 'RetroPie Cheater',
    retropie: 'RetroPie',
    retropie_solo: 'RetroPie Solo',
    joystick_cheater: 'Joystick Cheater',
    joystick: 'Joystick',
  },
  parts: {
    titles: {
      side_left: 'Box Left Side',
      side_front: 'Box Front Side',
      side_right: 'Box Right Side',
      side_back: 'Box Back Side',
      side_base: 'Box Base Side',
      els: 'Box Top Els',
      panel: 'Buttons Panel Layout',
      acrylic: 'Top Art Acrylic',
      ventilation: 'Right side buttons',
      legs: 'Box Legs',
      controls: 'Arcade Stick and Buttons',
      usb: 'USB rack',
      power_button: 'Power Button',
      rpi: 'Raspberry Pi Ports'
    }
  }
}
