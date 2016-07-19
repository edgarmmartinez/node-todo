angular.module('hashrankService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Hashranks', ['$http',function($http) {
		return {
			get : function() {
                                console.log("hello from hashrankService, get");
				return $http.get('/api/hashranks');
			},
			create : function(hashrankData) {
				return $http.post('/api/hashranks', hashrankData);
			},
			delete : function(id) {
				return $http.delete('/api/hashranks/' + id);
			}
		}
	}]);
