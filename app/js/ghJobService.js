ghJob.service('ghJobService', ['$http', function($http) {
  var self =this;

  self.users = [];

  self.getAll = function(filter = "orgs/makersacademy/public_members") {
    self.users = [];
    return $http.get("https://api.github.com/"+filter)
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

  self.setApiCall= function(user){
    return "/search/users?q="+user
  };

}])