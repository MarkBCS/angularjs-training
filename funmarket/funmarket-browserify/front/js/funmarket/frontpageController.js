module.exports = ['$scope', 'AdsResource', ($scope, AdsResource) => {
  var ads = AdsResource.query( () => {
    $scope.ads = ads;
  });
}];
