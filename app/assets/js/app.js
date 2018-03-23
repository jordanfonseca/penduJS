
// Import angular dependencies
import angular from 'angular'
import uiRouter from '@uirouter/angularjs';

// Import sass for webpack css export
import sass from '../sass/app.sass'

/**
 * Application configuration
 *--------------------------------------------*/

let myApp = angular.module('penduApp', ['ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
  var authState = {
    name: 'auth',
    url: '',
    templateUrl: './views/auth.html'
  }

  var ingameState = {
    name: 'ingame',
    url: '',
    templateUrl: './views/ingame.html'
  }

  $stateProvider.state(authState)
  $stateProvider.state(ingameState)

  $urlRouterProvider.otherwise('')
}]);

/**
 * Services
 *--------------------------------------------*/

import Game from '../services/game.service.js'
Game.$inject = ['$state']
myApp.service('Game', Game)

/**
 * Components
 *--------------------------------------------*/

import { login } from '../components/login/login.js'
login.$inject = ['Game']
myApp.component('login', login)

import { keyboard } from '../components/keyboard/keyboard.js'
keyboard.$inject = ['Game']
myApp.component('keyboard', keyboard)

import { gameInterface } from '../components/gameInterface/gameInterface.js'
gameInterface.$inject = ['Game', '$document']
myApp.component('gameInterface', gameInterface)

import { message } from '../components/message/message.js'
message.$inject = ['Game']
myApp.component('message', message)