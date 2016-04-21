describe('ghJobService', function(){
  beforeEach(module('ghJob'));

  var ghJobService, httpBackenend;

  var user= [{"login": "user1"}, {"login": "user2"}];

  beforeEach(inject(function(_ghJobService_ , $httpBackend){
    httpBackend = $httpBackend;
    ghJobService = _ghJobService_;
  }));

  it('fetches a list of users', function (){
    httpBackend.expectGET("https://api.github.com/orgs/makersacademy/public_members").respond(user);

    var user1 = {"login": "user1"};
    var user2 = {"login": "user2"};

    ghJobService.getAll().then(function(users) {
      expect(ghJobService.users).toEqual([user1, user2]);
    });

    httpBackend.flush();

  });

  it('search by userName', function(){    
      expect(ghJobService.searchUsersFor("user1")).toEqual("https://api.github.com/search/users?q=user1");
  });
})