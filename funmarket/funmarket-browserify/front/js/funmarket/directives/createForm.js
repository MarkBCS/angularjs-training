module.exports = () => ({
    restrict: 'E',
    scope: {},
    template: require('../templates/createDirective.html'),
    controller: ['$scope', '$location', 'AdsResource', 'Upload',
                 ($scope, $location, AdsResource, Upload) => {

      $scope.publish = function(ad) {
        var newAd = new AdsResource(ad);
        newAd.$save(function() {
          $location.path('/');
        });
      };

       $scope.ad = {};
       $scope.upload = function (files) {
         if (files && files.length) {
           for (var i = 0; i < files.length; i++) {
             var file = files[i];
             Upload.upload({
               url: 'http://funmarket-api.herokuapp.com/images',
               file: file
             }).progress(function (evt) {
              $scope.uploadProgress = parseInt(100.0 * evt.loaded / evt.total);
             }).success(function (data, status, headers, config) {
               $scope.ad.imageUrl = data.imageUrl;
               $scope.ad.thumbnailUrl = data.thumbnailUrl;
             });
           }
         }
       };
    }]
})
