// Import the JSON containing all mystery words
import WORDS from '../json/words.json';

/**
 * Provides the Game functions and values
 */
export default class Game {

    /**
     * Load State service to allow template change
     * Initialize some Game values
     * @return {undefined} undefined
     */
    constructor($state) {

        this._$state = $state;

        // Username sent by the login component
        this.username = undefined

        // Game status : 0 => OFF, 1 => ON
        this.status = 0

        // Game end result : 0 => LOOSE, 1 => WIN
        this.result = undefined

        // Lifepoints : attempts available before loose
        this.lifepoints = undefined

        // Array containing all mystery words
        this.words = WORDS

        // Array containing the mystery word splitted
        this.mysteryWord = []

        // Mystery word category
        this.mysteryCategory = undefined

        // Array containing all letters attempt by user
        this.triedLetters = []

        // Array containing underscores or letters attempt by user and included in the mystery word
        this.foundLetters = []
    }

    /**
     * Launch the game by initializing values and changing state
     * @return {undefined} undefined
     */
    launch () {

        // Get a random mystery word
        let rand = Math.floor(Math.random() * (this.words.length)) // Get a random index
        this.mysteryWord = this.words[rand].word.split('') // Get mystery word with the random index and split it into an array
        this.mysteryCategory = this.words[rand].type

        // Set lifepoints to the maximum
        this.lifepoints = 5

        // Set Game status to 1 => in game
        this.status = 1

        // Clean values, empty the arrays
        this.result = undefined
        this.triedLetters = []
        this.foundLetters = []

        // Prepare array with as many underscores as there are letters in the mystery word
        for (let i = 0; i < this.mysteryWord.length; i++) {

            this.foundLetters[i] = "_";
        }

        // Change application state
        this._$state.go('ingame', {}, { location: false } )
    }

    /**
     * Stop the game by changing the status and result
     * @param {boolean} result 0 => LOOSE, 1 => WIN
     * @return {undefined} undefined
     */
    stop (result = undefined) {

        this.result = result
        this.status = 0
    }

    /**
     * Connect user with the form username by launching the game
     * @param {string} username username sent by the form
     * @return {undefined} undefined
     */
    login (username = undefined) {
 
        if (username != undefined) {

            this.username = username
            this.launch()  
        }
    }

    /**
     * Try if letter is include in the mysteryWord
     * @param {string} key keyboard key character
     * @return {undefined} undefined
     */
    tryLetter (key = undefined) {

        // If the letter hasn't already been tried, else don't do anything
        if (!this.triedLetters.includes(key)) {

            this.triedLetters.push(key) // Push the letter into the tried letters array

            // If the letter is included in the mystery word
            if (this.mysteryWord.includes(key)) {

                let index = this.mysteryWord.indexOf(key); // Get the index of the found letter

                // Replace underscores by the letter found as many times as contained in the mystery word
                while (index != -1) {

                    this.foundLetters[index] = key
                    index = this.mysteryWord.indexOf(key, index + 1);
                }

                // If the found letters array includes no underscores anymore, stop the game, it's won
                if (!this.foundLetters.includes('_')) {

                    this.stop(1)
                }

            // Else remove a life point and if it was his last one, stop the game, it's lost
            } else {

                this.lifepoints--
                if (this.lifepoints == 0) {

                    this.stop(0)
                }
            }
        }
    }
}