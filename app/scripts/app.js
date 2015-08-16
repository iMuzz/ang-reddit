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

      app.config(function ($routeProvider, $locationProvider, $mdThemingProvider) {

          // Configure angular router
          $routeProvider
          .when('/', {
              templateUrl: 'views/main.html',
              controller: 'PostsCtrl',
              controllerAs: 'posts'
          })
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
            redirectTo: '/'
          });

          //$locationProvider.html5Mode(true);

          //Configure Theme
          $mdThemingProvider.theme('default')
              //.primaryPalette('pink')
              .accentPalette('purple')
      });
}());