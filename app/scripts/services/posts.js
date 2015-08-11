'use strict';

angular.module('redditApp').factory('posts', function($resource){
    return $resource('https://www.reddit.com/r/apple.json', {});
});