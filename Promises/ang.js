angular.module("promiseApp", [])
    .controller("TimeOutCtrl", function($scope, $q, $timeout, $http) {
        $scope.cities = [];
        $scope.searchResults = [];

        function asyncShowTimeout() {

            var deferred = $q.defer();
            $timeout(function() {
                deferred.resolve(["Minsk", "Gomel"]);
            }, $scope.msec)

            return deferred.promise;
        }

        function asyncShowGet() {
            return $http.get("http://velvet.tesla-kbd11.kluwer.nl/rsi-v1.svc/Search?&filterTreeId=*&sort=MostRecent&authorization=Basic+YW5kcmVpLnllbWlhbHlhbmNoaWs6d2VsY29tZQ==&apikey=1F70D0711ADB4278A1B68446AF8B6734&$format=json", {
                params: {
                    query: $scope.query
                }
            });
        }

        $scope.callAsyncShow = function() {
            var promise = asyncShowTimeout();
            promise.then(function(val) {
                $scope.cities = val[0];
            });
        }

        $scope.callAsyncGet = function() {
            var promise = asyncShowGet();
            promise.then(function(res) {
                var uri = res.data.d.Result.__deferred.uri + "?&authorization=Basic+YW5kcmVpLnllbWlhbHlhbmNoaWs6d2VsY29tZQ==&apikey=1F70D0711ADB4278A1B68446AF8B6734&$format=json";
                return $http.get(uri);
            }).then(function(res) {
                var uri = res.data.d.Items.__deferred.uri + "?&authorization=Basic+YW5kcmVpLnllbWlhbHlhbmNoaWs6d2VsY29tZQ==&apikey=1F70D0711ADB4278A1B68446AF8B6734&$format=json";
                return $http.get(uri);
            }).then(function(res) {
                $scope.searchResults = res.data.d.results;
            })
        }

        $scope.is = "";
        $scope.fetchData = function() {
            $.get("http://ajax.googleapis.com/ajax/libs/angularjs/1.2.13/angular.min.js", null, function(data) {
                $scope.is = data
            });
        }
    });