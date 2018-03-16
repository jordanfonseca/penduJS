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
      this._Game.setUser(this.username)
      this._$state.go('ingame')
      
      console.log('form submitted !')
      console.log(this._Game.getUser())
    }else {

      console.log('form invalid !')
      console.log(this._Game.getUser())
    }
  }

}


export { LoginCtrl } 