describe('ghJob', function() {
  
  beforeEach(function(){
    browser.get('/');
  });

  it ('displays a list of users', function() {
    var users = $$('#users p');
    expect(users.first().getText()).toEqual('paulalexrees');
    expect(users.last().getText()).toEqual('kevinpmcc');
  });

  it ('has a search field with a search button', function() {
    var field = element(by.id('searchfield'));
    var button = element(by.id('searchbutton'));
    expect(field.isPresent()).toBeTruthy();
    expect(button.isPresent()).toBeTruthy();
  });
});
