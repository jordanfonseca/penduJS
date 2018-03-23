/**
 * Provides handlers for the login component
 */
class LoginCtrl {
  /**
   * Load Game service and initialize regex for the form validation
   * @return {undefined} undefined
   */
  constructor (Game) {

    this.regex = /^\s*\w*\s*$/
    this._Game = Game

  }

  /**
   * Connect user with the form username thanks to the Game service handler if the form is valid
   * @param {boolean} valid form validation
   * @return {undefined} undefined
   */
  submitForm (valid = false) {

    if (valid) {
      this._Game.login(this.username)
    }
  }

}


export { LoginCtrl } 