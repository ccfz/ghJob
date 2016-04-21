describe('ghJob', function(){
	beforeEach(module('ghJob'));

	var ctrl;

	beforeEach(inject(function($controller){
		ctrl = $controller('ghJobController');
	}));

	it('initialises with an empty array', function(){
		expect(ctrl.users).toEqual([]);
	});
});