'use strict';

var app = angular.module('flashCardApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/html/home.html',
      controller: 'homeController'
    })
    .state('play', {
      url: '/play',
      templateUrl: '/html/play.html',
      controller: 'playController'
    })
    .state('add', {
      url: '/add',
      templateUrl: '/html/add.html',
      controller: 'addController'
    })
    .state('list', {
      url: '/list',
      templateUrl: '/html/list.html',
      controller: 'listController'
    })

    $urlRouterProvider.otherwise('/home');
});
