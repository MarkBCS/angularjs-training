describe('Protractor Demo App', () => {
  it('should have a title', () => {
    browser.get('/');

    expect(browser.getTitle()).toEqual('Angular template');
  });
});
