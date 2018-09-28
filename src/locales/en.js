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
    },
    color_selector: {
      label: 'Colors'
    },
    presets_selector: {
      label: 'Presets'
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
      side_top: 'Box Top',

      buttons: 'Buttons Panel Layout',
      leg: 'Box Legs',

      // Right
      USB_rack: 'USB Switch Lateral',

      // Back
      USB_output: 'Jostick Output USB',
      rpi_back_w_selector: 'RaspberryPi Ports with Jostick Output USB',
      rpi_back: 'RaspberryPi Ports',
      
      // Left
      cheat_buttons: 'Cheat Buttons',
      ventilation: 'Ventilation',
      ventilation_buttons: 'Ventilation with Cheat Buttons'
    }
  },
  materials: {
    titles: {
      button: 'Arcade Buttons',
      filament: '3D printing filament',
      vinyl: 'Flat Vinyl'
    }
  }
}
