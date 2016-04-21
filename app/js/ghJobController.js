ghJob.controller('ghJobController',  ['ghJobService', function(ghJobService){

  var self = this;


	
  ghJobService.getAll().then(function(users){
    self.users = users;
  });

  self.searchUserFor = function(searchTerm) {
    var apiCall = ghJobService.setApiCall(searchTerm)

    ghJobService.getAll(apiCall).then(function(users){
    self.users = users;
    });
  };   
}]);
