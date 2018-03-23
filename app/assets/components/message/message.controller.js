
class MessageCtrl {

  constructor (Game) {

    this._Game = Game
  }

  getMysteryWord () {
    
    return this._Game.mysteryWord.join('')
  }

  showResult () {

    if (this._Game.result) {
      return "GAGNÉ"
    } else {
      return "PERDU"
    }
  }

}


export { MessageCtrl } 