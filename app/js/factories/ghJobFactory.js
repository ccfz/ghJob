ghJob.factory('ghJobFactory', ['$http', function($http) {
  var self = this;

  var getAll = function(callbackFn) {

    $http.get("https://api.github.com/orgs/makersacademy/public_members")
      .then(function(response) {
        return response.data
      })
      .then(function(response){
        var users = [];
        response.forEach(function(response) {
        
        $http.get("https://api.github.com/users/"+ response.login)
          .then(function(response) {
            users.push(response.data);
        });
            callbackFn(users);

          });
      });
  };





  return { getAll: getAll };
}]);
