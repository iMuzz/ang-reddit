'use strict';

/**
 * @ngdoc function
 * @name redditApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the redditApp
 */
angular.module('redditApp')
  .controller('AboutCtrl', function(posts) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    posts.get().$promise.then(function(postCollection){
        console.log(postCollection);
    });

  });