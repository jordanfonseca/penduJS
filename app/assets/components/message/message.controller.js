
class MessageCtrl {

  constructor (Game) {

    this._Game = Game

  }

  getMysteryWord()
  {
    return this._Game.mysteryWord.join('')
  }

}


export { MessageCtrl } 