/**
 * Created by iMuzz on 8/13/15.
 */
(function(){

    angular.module('redditApp')
        .controller('PostsCtrl', function ($scope, posts) {
            posts
                .then(function(posts){
                    $scope.posts = posts;
                });
        })
}());