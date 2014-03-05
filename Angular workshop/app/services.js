angular.module('app.services', [])
.factory("github", function($resource) {
	return $resource('https://api.github.com/search/repositories')
});
