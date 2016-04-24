ghJob.controller('ghJobController',  ['ghJobFactory', function(ghJobFactory){

  var self = this;

  ghJobFactory.getAll(function(users){
    self.users = users;
    console.log(users);
  });

  //self.searchUserFor = function(searchTerm) {
    //var apiCall = ghJobService.setApiCall(searchTerm)

    //ghJobService.getAll(apiCall).then(function(users){
    //self.users = users;
    //});
  //};

}]);
