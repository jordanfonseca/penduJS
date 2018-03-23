
// Import angular dependencies
import angular from 'angular'
import uiRouter from '@uirouter/angularjs';

// Import sass for webpack css export
import sass from '../sass/app.sass'

/**
 * Application configuration
 *--------------------------------------------*/

let myApp = angular.module('penduApp', ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {
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

  $urlRouterProvider.otherwise('');
});

/**
 * Components
 *--------------------------------------------*/

import { login } from '../components/login/login.js'
myApp.component('login', login)

import { keyboard } from '../components/keyboard/keyboard.js'
myApp.component('keyboard', keyboard)

import { gameInterface } from '../components/gameInterface/gameInterface.js'
myApp.component('gameInterface', gameInterface)

import { message } from '../components/message/message.js'
myApp.component('message', message)

/**
 * Services
 *--------------------------------------------*/

import Game from '../services/game.service.js';
myApp.service('Game', Game);