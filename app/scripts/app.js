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
          .when('/r/', {
            templateUrl: 'views/main.html',
            controller: 'PostsCtrl',
            controllerAs: 'posts'
          })
          .when('/r/:subreddit', {
            templateUrl: 'views/main.html',
            controller: 'PostsCtrl',
            controllerAs: 'posts'
          })
          .otherwise({
            redirectTo: '/r/'
          });
      });
}());