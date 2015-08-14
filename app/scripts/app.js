'use strict';

/**
 * @ngdoc overview
 * @name redditApp
 * @description
 * # redditApp
 *
 * Main module of the application.
 */

(function () {
    var app = angular.module('redditApp', [
        'ngAnimate',
        'ngRoute',
        'ngSanitize',
        'ngResource',
        'ngMaterial'
      ]);

      app.config(function ($routeProvider) {
          // Configure angular router
          $routeProvider
          .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
          })
          .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl',
            controllerAs: 'about'
          })
          .otherwise({
            redirectTo: '/'
          });
      });
}());