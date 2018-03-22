import template from './login.template.html'
import style from './login.sass'
import {LoginCtrl} from './login.controller.js'

const login = {
  controller: LoginCtrl,
  template
}

export { login } 