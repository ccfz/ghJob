describe('ghJob', function() {
  it ('has a title', function(){
    browser.get('/');
    expect(browser.getTitle()).toEqual("Title");
  });

  it('displays a list of github users', function() {


  });

  it ('has a search field with a search button', function() {
    browser.get('/');
    var field = element(by.id('searchfield'));
    var button = element(by.id('searchbutton'));
    expect(field.isPresent()).toBeTruthy();
    expect(button.isPresent()).toBeTruthy();
  });
});
