/**
 * Provides handlers for the keyboard component
 */
class KeyboardCtrl {
  /**
   * Load Game service and initialize keys array that will contains keyboard keys
   * @return {undefined} undefined
   */
  constructor (Game) {

    this._Game = Game
    this.keys = []
  }

  /**
   * Function fired by a click on keyboard component buttons
   * @param {string} key keyboard key character
   * @return {undefined} undefined
   */
  keyClick (key) {

    // If the user is in game && if the key wasn't clicked before
    if (this._Game.status == 1 && !this.wasClicked(key)) {
      this._Game.tryLetter(key)
    } 
  }

  /**
   * Test if a keyboard key was clicked before
   * @param {string} key keyboard key character
   * @return {undefined} undefined
   */
  wasClicked (key) {

    return this._Game.triedLetters.includes(key)
  }

  /**
   * On component initializing
   * Push in the keys array all alphabetic letters
   * @return {undefined} undefined
   */
  $onInit () {

    for (let i = 0; i < 26; i++) {
      this.keys[i] = (i + 10).toString(36)
    }
  }
}

export { KeyboardCtrl } 