ghJob.controller('ghJobController',  ['$http', function($http){

  var self = this;

  self.users = [];

  self.getAll = function() {
    return $http.get("https://api.github.com/orgs/makersacademy/public_members")
      .then(function(resp){
        _handleResponseFromApi(resp.data);
      }, function(err){});
      return self.users
  }

  function _handleResponseFromApi(data) {
    data.forEach(function(userData){
      self.users.push(userData);
    })
  }

}]);
