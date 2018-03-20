/**
 * Provides handlers for the login component
 */
class LoginCtrl {
  /**
   * Announces that input bindings aren't defined
   * @return {undefined} undefined
   */
  constructor (Game, $state) {

    this.regex = /^\s*\w*\s*$/
    this._$state = $state
    this._Game = Game

  }

  /**
   * Calls onLogin with the value of inputName put in fancyFunction
   * @return {undefined} undefined
   */
  submitForm (valid = false) {
    
    if (valid) {
      this._Game.login(this.username)
    }
  }

}


export { LoginCtrl } 