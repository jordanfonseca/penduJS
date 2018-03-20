
class KeyboardCtrl {

  constructor (Game, $state) {

    this._$state = $state
    this._Game = Game
    this.keys = []

  }

  keyClick (key) {

    if (!this._Game.inputLetters.includes(key)) {
      this._Game.tryLetter(key)
    } 
  }

  $onInit () {

    for (let i = 0; i < 26; i++) {
      this.keys[i] = (i + 10).toString(36)
    }
  }

}


export { KeyboardCtrl } 