describe('ghJobController', function(){
	beforeEach(module('ghJob'));

	var ctrl, httpBackend, ghJobService;

	var user= [{"login": "user1"}, {"login": "user1"}, {"login": "user2"}];

	var userResult = [{"login": "user1"}, {"login": "user1"}];

	beforeEach(inject(function($httpBackend, $controller){
		ctrl = $controller('ghJobController');
		httpBackend = $httpBackend;
		httpBackend.expectGET("https://api.github.com/orgs/makersacademy/public_members").respond(user);
		httpBackend.expectGET("https://api.github.com/search/users/user1").respond(userResult);

		httpBackend.flush();
	}));

	it('can search for a user', function(){
		ctrl.searchUserFor("user1");
		console.log(ctrl.users);
		expect(ctrl.users).toEqual({"login": "user1"}, {"login": "user1"});
	});


	
	});