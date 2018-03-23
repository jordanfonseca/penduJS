/**
 * Provides handlers for the keyboard component
 */
class GameInterfaceCtrl {
  /**
   * Load Game service and window.document Object
   * @return {undefined} undefined
   */
  constructor (Game, $document) {

    this._Game = Game
    this._$document = $document
  }

  /**
   * Generate and show an hearts string depending of lifepoints availables
   * @return {string} string containing the lifepoints hearts
   */
  showLifepoints() {

    let hearts = ""
    for (let index = 0; index < this._Game.lifepoints; index++) {
      hearts += "❤ " 
    }

    return hearts;
  }

  /**
   * Show the mystery word's category
   * @return {string} string formatted containing the category
   */
  showCategory() {

    return `Catégorie : ${this._Game.mysteryCategory.toUpperCase()}`
  }

  /**
   * On component initializing
   * Attach a keyup event on all alphabetic letters keys
   * This event fire a click on corresponding key on keyboard component
   * @return {undefined} undefined
   */
  $onInit () {
    
    this._$document.bind('keyup', e => {
      if (e.keyCode >= 65 && e.keyCode <= 90 && this._Game.status == 1) {
        document.getElementById('key' + e.key.toUpperCase()).click() 
      }
    });
  }

}

export { GameInterfaceCtrl } 