require('ng-file-upload')

angular
  .module('funmarket', [require('angular-resource'), 'ngFileUpload'])

  .directive('createForm', require('./directives/createForm'))

  .factory('AdsResource', require('./adsResource'))

  .config(['$routeProvider', ($routeProvider) => {
    $routeProvider
      .when('/', {
        template: require('./templates/index.html'),
        controller: require('./frontpageController')
      })
      .when('/create', {
        template: require('./templates/create.html')
      })
  }])

module.exports = 'funmarket'
