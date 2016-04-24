ghJob.factory('ghJobFactory', ['$http', function($http) {
  var self = this;

  var getAll = function(callbackFn) {

    $http.get("https://api.github.com/orgs/makersacademy/public_members")
      .then(function(response) {
        callbackFn(response.data);
      })
      .then(function(response){


      });
  };





  return { getAll: getAll };
}]);
