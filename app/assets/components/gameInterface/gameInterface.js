import template from './gameInterface.template.html'
import style from './gameInterface.sass'
import {GameInterfaceCtrl} from './gameInterface.controller.js'

const gameInterface = {
  controller: GameInterfaceCtrl,
  template
}

export { gameInterface } 