
class GameInterfaceCtrl {

  constructor (Game, $state, $document, $rootScope) {

    this._$rootScope = $rootScope
    this._$state = $state
    this._Game = Game
    this._$document = $document

  }

  showLifepoints() {

    return this._Game.lifepoints;
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