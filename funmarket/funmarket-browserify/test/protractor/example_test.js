describe('Protractor Demo App', () => {
  it('should have a title', () => {
    browser.get('/');

    element(by.css('a')).click();

    browser.sleep(50000);

    expect(browser.getTitle()).toEqual('Angular template');

  });
});
