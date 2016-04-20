var countryApp = angular.module('countryApp', []);
		countryApp.controller('CountryCtrl', function ($scope, $http){
			$http.get('JSON/books.json').success(function(data) {
				$scope.books = data;
			});
});



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