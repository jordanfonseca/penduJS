import template from './login.template.html'
import style from './login.sass'
import {LoginCtrl} from './login.controller.js'

const bindings = {
  username: '<'
}

const login = {
  controller: LoginCtrl,
  template,
  bindings
}

export { login } 