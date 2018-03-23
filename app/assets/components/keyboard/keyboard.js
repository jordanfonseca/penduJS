import template from './keyboard.template.html'
import style from './keyboard.sass'
import {KeyboardCtrl} from './keyboard.controller.js'

const keyboard = {
  controller: KeyboardCtrl,
  template
}

export { keyboard } 