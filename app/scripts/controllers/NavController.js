/**
 * Created by iMuzz on 8/13/15.
 */
(function () {

    angular.module('redditApp')
        .controller('MainCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $log, $location) {
            $scope.toggleLeft = buildToggler('left');

            $scope.goToSubreddit = function(sub){
                $location.path('/r/'+ sub );
            };
            /**
             * Build handler to open/close a SideNav; when animation finishes
             * report completion in console
             */
            function buildToggler(navID) {
                var debounceFn =  $mdUtil.debounce(function(){
                    $mdSidenav(navID)
                        .toggle()
                        .then(function () {
                            $log.debug("toggle " + navID + " is done");
                        });
                },200);
                return debounceFn;
            }

        });

    angular.module('redditApp').controller('NavCtrl', function ($scope, $timeout, $mdSidenav, $log, $location, constants) {

        $scope.subreddits = constants.defaultSubs;

        $scope.goToSubreddit = function(sub){
            $location.path('/r/'+ sub );
        };
        
        $scope.close = function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });
        };
    });

}());