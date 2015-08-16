/**
 * Created by iMuzz on 8/13/15.
 */
(function(){

    angular.module('redditApp')
        .controller('PostsCtrl', function ($scope, posts, $routeParams) {

            posts($routeParams.subreddit || "all")
                .then(function(posts){
                    $scope.posts = posts;
                });
        //    TODO: Need to account for when user puts an invalid subreddit
        })
}());