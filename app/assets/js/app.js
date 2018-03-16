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

  var endgameState = {
    name: 'endgame',
    url: '',
    template: '<h3>La partie est terminée !</h3>'
  }

  $stateProvider.state(authState);
  $stateProvider.state(ingameState);
  $stateProvider.state(endgameState);
});


import { login } from '../components/login/login.js'
myApp.component('login', login)

import Game from '../services/game.service.js';
myApp.service('Game', Game);