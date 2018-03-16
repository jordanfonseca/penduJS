// import words from './json/words.json'

export default class Game {

    constructor($state) {

        this._$state = $state;
        this.username = undefined
        this.status = 0
        this.lifepoints = 0
        this.words = []
        this.mysteryWord = undefined
        this.inputLetters = []

    }

    getUser() {

        return this.username
    }

    setUser(username = undefined) {

        this.username = username
    }

}