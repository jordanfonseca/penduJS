
class GameInterfaceCtrl {

  constructor (Game, $state, $document, $rootScope) {

    this._$rootScope = $rootScope
    this._$state = $state
    this._Game = Game
    this._$document = $document

  }

  showLifepoints() {

    let hearts = ""

    for (let index = 0; index < this._Game.lifepoints; index++) {
      hearts += "❤ " 
    }

    return hearts;
  }

  $onInit () {
    
    this._$document.bind('keyup', e => {
      if (e.keyCode >= 65 && e.keyCode <= 90 && this._Game.status == 1) {
        document.getElementById('key' + e.key.toUpperCase()).click() 
      }
    });
  }

}


export { GameInterfaceCtrl } 