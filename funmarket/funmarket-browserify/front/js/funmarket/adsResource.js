module.exports = ['$resource', ($resource) => {
  return $resource(
    'http://funmarket-api.herokuapp.com/marketads/:adId',
    {adId: '@id'}
  );
}];
