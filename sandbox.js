console.log("hi");
var job = angular.module('job', []);

job.controller('jobController',  ['http', function($http){

$http.get('http://jsbin.com/http-promise-chain-json/1.json')
  .then(function(json) {
    console.log("1");
    console.log(json.data);

    return $http.get('http://jsbin.com/http-promise-chain-json/2.json');

  })
  .then(function(json) {
    console.log("2");
    console.log(json.data);

    return $http.get('http://jsbin.com/http-promise-chain-json/3.json');

  })
  .then(function(json) {
    console.log("3");
    console.log(json.data);

  });
}]);
