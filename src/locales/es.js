export default {
  app: {
    title: 'Open Arcade Personalizador'
  },
  fields: {
    toggle_menu: 'Menú',
    toggle_presets: 'Combinación',
    mode_selector: 'Modo',
    layout_selector: {
      label: 'Diseño Panel',
      layouts: {
        '26x6_ST': 'Derecho',
        '26x6_EG': 'Ergonómico',
        '26x6_DG': 'Inclinado'
      }
    },
    size_selector: {
      label: 'Tamaño',
      width: 'Ancho',
      height: 'Alto',
      depth: 'Largo',
      thick: 'Espesor',
    },
    color_selector: {
      label: 'Colores'
    },
    presets_selector: {
      label: 'Combinaciones'
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
      side_left: 'Parte Izquierda',
      side_front: 'Parte Delantera',
      side_right: 'Parte Derecha',
      side_back: 'Parte Trasera',
      side_base: 'Base',
      side_top: 'Panel de Botones',

      buttons: 'Palanca y Botones Arcade',
      leg: 'Patas',

      // Right
      USB_rack: 'USB Switch Lateral',

      // Back
      USB_output: 'Salida USB del Jostick',
      rpi_back_w_selector: 'Puertos de RaspberryPi con USB del Joystick',
      rpi_back: 'Puertos de RaspberryPi',
      
      // Left
      cheat_buttons: 'Botones Cheat',
      ventilation: 'Ventilacion',
      ventilation_buttons: 'Ventilacion con Cheat'
    }
  },
  materials: {
    titles: {
      button: 'Botones Arcade',
      filament: 'Filamento de impresión 3D',
      vinyl: 'Vinilo Mate'
    }
  }
}
