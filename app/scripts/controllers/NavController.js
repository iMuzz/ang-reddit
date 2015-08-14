/**
 * Created by iMuzz on 8/13/15.
 */
(function () {

    angular.module('redditApp')
        .controller('MainCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $log) {
            $scope.toggleLeft = buildToggler('left');
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

    angular.module('redditApp').controller('NavCtrl', function ($scope, $timeout, $mdSidenav, $log) {

        $scope.subreddits = ['/r/apple', '/r/angularjs', '/r/all', '/r/programmerhumor'];
        $scope.close = function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });
        };
    });

}());