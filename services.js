app.factory('forecast', ['$http', function($http) { 
  return $http.get('books/books.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);
