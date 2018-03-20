import angular from 'angular'
import uiRouter from '@uirouter/angularjs';

import sass from '../sass/app.sass'



let myApp = angular.module('penduApp', ['ui.router']);

myApp.config(function ($stateProvider) {
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

  $stateProvider.state(authState);
  $stateProvider.state(ingameState);
});


import { login } from '../components/login/login.js'
myApp.component('login', login)

import { keyboard } from '../components/keyboard/keyboard.js'
myApp.component('keyboard', keyboard)

import { gameInterface } from '../components/gameInterface/gameInterface.js'
myApp.component('gameInterface', gameInterface)

import Game from '../services/game.service.js';
myApp.service('Game', Game);