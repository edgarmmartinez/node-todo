angular.module('hashrankController', [])

        // On document ready:
//        $(function(){
//            // Instantiate MixItUp:
//            $('#Container').mixItUp();
//        });

	// inject the Hashrank service factory into our controller
	.controller('mainController', ['$scope','$http','$interval','Hashranks', function($scope, $http, $interval, Hashranks) {
		$scope.formData = {};
		$scope.loading = true;

		// GET =====================================================================
		// when landing on the page, get all hashranks and show them
		// use the service to get all the hashranks
		Hashranks.get()
			.success(function(data) {
                                console.log("hello from main.js, Hashranks.get()");
				$scope.hashranks = data;
				$scope.loading = false;
			});

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.getHashrank = function() {
			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			$scope.loading = true;

			// call the create function from our service (returns a promise object)
			Hashranks.get()

				// if successful creation, call our get function to get all the new hashranks
				.success(function(data) {
					$scope.loading = false;
                                        //data is an array of entries returned by MongoDB, so dereference the first one
					$scope.hashranks = data[0].hashrankList; // assign our new list of hashranks
				});
		};

    
                $interval(function(){
                    $scope.getHashrank();
                },2000);

		// DELETE ==================================================================
		// delete a hashrank after checking it
		$scope.deleteHashrank = function(id) {
			$scope.loading = true;

			Hashranks.delete(id)
				// if successful creation, call our get function to get all the new hashranks
				.success(function(data) {
					$scope.loading = false;
					$scope.hashranks = data; // assign our new list of hashranks
				});
		};
                //$interval(Hashranks.get(),2000)
	}]);
