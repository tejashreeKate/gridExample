'use strict';

/**
 * @ngdoc overview
 * @name dragDropExampleApp
 * @description
 * # dragDropExampleApp
 *
 * Main module of the application.
 */
angular
  .module('dragDropExampleApp', [
    'ngResource',
    'ngRoute',
    'ngTouch',
    'ngDraggable',
    'gridster',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/screen', {
        templateUrl: 'views/screen.html',
        controller: 'ScreenCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
