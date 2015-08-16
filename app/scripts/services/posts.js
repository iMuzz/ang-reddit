'use strict';
(function () {

    angular.module('redditApp').factory('posts', function($http){

        return getPostsForSub;

        function getPostsForSub(sub){
            return $http.get('https://www.reddit.com/r/' + sub + '.json', {})
                .then(function(res){
                    return  buildPostObjects(res);
                })
                .catch(function(mess){
                    return $q.reject("Something got fucked.");
                });
        };

        function buildPostObjects(res){
            var postObjects = [];
            var post = {};
            var postArray = res.data.data.children;

            for(var i = 0 ; i < postArray.length; i++) {
                post = {};
                post.title = postArray[i].data.title;
                post.author = postArray[i].data.author;
                postObjects.push(post);
            }
            return postObjects;
        }

    });

}());
