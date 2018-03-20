// import words from './json/words.json'

export default class Game {

    constructor($state) {

        this._$state = $state;
        this.username = undefined
        this.status = 0
        this.result = undefined
        this.lifepoints = undefined
        this.words = ['commune','paillasson','panneau']
        this.mysteryWord = []
        this.inputLetters = []
        this.foundLetters = []

    }

    launch () {

        let rand = Math.floor(Math.random() * (this.words.length))
        this.mysteryWord = this.words[rand].split('');
        this.lifepoints = 5
        this.status = 1
        this.result = undefined
        this.inputLetters = []

        for (let i = 0; i < this.mysteryWord.length; i++) {
            this.foundLetters[i] = "_";
        }

        this._$state.go('ingame')

        console.log(`Game is launched and ${this.username} is connected...`)
        console.log(`The mystery word is :`)
        console.log(this.mysteryWord)
    }

    stop (result) {

        this.result = result
        this.status = 0
    }

    login (username = undefined) {
 
        if (username != undefined) {
            this.setUser(username)
            this.launch()  
        }
    }

    getUser () {

        return this.username
    }

    setUser (username = undefined) {

        this.username = username
    }

    tryLetter (key) {

        if (!this.inputLetters.includes(key)) {

            this.inputLetters.push(key)

            if (this.mysteryWord.includes(key)) {

                let index = this.mysteryWord.indexOf(key);
                while (index != -1) {
                    this.foundLetters[index] = key
                    index = this.mysteryWord.indexOf(key, index + 1);
                }

                if (!this.foundLetters.includes('_')) {
                    //shutdown win
                    this.stop('GAGNÉ')
                }

            } else {

                this.lifepoints--
                if (this.lifepoints == 0) {
                    //shutdown loose
                    this.stop('PERDU')
                }
            }

            console.log(this.inputLetters)
            console.log(this.mysteryWord)
            console.log(this.foundLetters)

        }
    }

}