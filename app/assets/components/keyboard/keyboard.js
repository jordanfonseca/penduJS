import template from './keyboard.template.html'
import style from './keyboard.sass'
import {KeyboardCtrl} from './keyboard.controller.js'

const bindings = {
  keys: '<'
}

const keyboard = {
  controller: KeyboardCtrl,
  template,
  bindings
}

export { keyboard } 