angular.module('app', [])
    .controller('my', ['$scope', '$interval',

        function($scope, $interval) {
            var a = 0;
            $interval(function() {
                $scope.text = ++a;
            }, 1000);
        }
    ])