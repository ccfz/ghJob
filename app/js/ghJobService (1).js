ghJob.service('ghJobService', ['$http', function($http) {
  var self =this;



  self.getAll = function(filter = "orgs/makersacademy/public_members") {
    self.users = [];
    return $http.get("https://api.github.com/"+filter)
      .then(function(resp){
        console.log(resp)
        _handleResponseFromApi(resp.data);
      }, function(err){});
     return _userProfile(self.users)
  }

  function _handleResponseFromApi(data) {
    data.forEach(function(userData){
      self.users.push(userData);
    })
  }

  self.setApiCall= function(user){
    return "/search/users?q="+user
  };

  function _userProfile(data){
    var foundUsers = [];
    data.forEach(function(data){
      return $http.get("https://api.github.com/users/"+data.login) 
        .then(function(resp){
          foundUsers.push(resp.data);
      }, function(err){}); 
      return foundUsers    
    })

  }

}])
