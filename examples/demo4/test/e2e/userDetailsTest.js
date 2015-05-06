describe('User details ', function(){
  beforeEach(function(){
    browser.get('http://localhost:3000');
  });

  it('Will show user details', function(){
    expect(element(by.binding('userDetails.username')).getText()).toEqual('perttiesimerkki');
  });

  it('Will show firstname', function() {
    expect(element(by.binding('userDetails.firstname')).getText()).toEqual('Pertti');
  });

  it('Will show lastname', function() {
    expect(element(by.binding('userDetails.lastname')).getText()).toEqual('Esimerkki');
  });

});