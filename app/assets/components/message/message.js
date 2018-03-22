import template from './message.template.html'
import style from './message.sass'
import {MessageCtrl} from './message.controller.js'

const message = {
  controller: MessageCtrl,
  template
}

export { message } 