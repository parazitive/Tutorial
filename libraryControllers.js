/*Controllers*/

var libraryControllers = angular.module('libraryControllers', []);


	libraryControllers.controller('LibraryListCtrl', [$scope, $http,function($scope, $http){
		$http.get('JSON/books.json').success(function(data) {
			$scope.books = data;
		});
}]);

libraryControllers.controller('LibraryDetailCtrl',['$scope', '$routeParams', function($scope, $routeParams){
	$scope.id = $routeParams.id;
}]);

/*
	<script>
		var countryApp = angular.module('countryApp', []);
		countryApp.controller('CountryCtrl', function ($scope, $http){
			$http.get('test.json').success(function(data) {
				$scope.test = data;
			});
		});
	</script>
*/			