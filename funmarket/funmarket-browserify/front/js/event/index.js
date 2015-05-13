angular
  .module('event', [])

  .directive('participants', require('./directives/participants'))

  .factory('participantService', require('./participantService'))

  .config(['$routeProvider', ($routeProvider) => {
    $routeProvider.when('/event', {
      template: require('./templates/index.html')
    })
  }])

module.exports = 'event'
