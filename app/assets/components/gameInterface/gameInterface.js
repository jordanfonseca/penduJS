import template from './gameInterface.template.html'
import style from './gameInterface.sass'
import {GameInterfaceCtrl} from './gameInterface.controller.js'

const bindings = {
  foundLetters: '<'
}

const gameInterface = {
  controller: GameInterfaceCtrl,
  template,
  bindings
}

export { gameInterface } 