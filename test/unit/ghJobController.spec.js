describe('ghJob', function(){
	beforeEach(module('ghJob'));

	var ctrl, httpBackend;

  var user= [{"login": "user1"}, {"login": "user2"}];

	beforeEach(inject(function($controller, $httpBackend){
		ctrl = $controller('ghJobController');
    httpBackend = $httpBackend;
	}));

	it('initialises with an empty array', function(){
		expect(ctrl.users).toEqual([]);
	});

  it('fetches a list of users', function (){
    httpBackend.expectGET("https://api.github.com/orgs/makersacademy/public_members").respond(user);

    var user1 = {"login": "user1"};
    var user2 = {"login": "user2"};

    ctrl.getAll().then(function(users) {
      expect(ctrl.users).toEqual([user1, user2]);
    });

    httpBackend.flush();

  });

  it('search by userName', function(){  	
      expect(ctrl.searchUsersFor("user1")).toEqual("https://api.github.com/search/users?q=user1");
  });



});