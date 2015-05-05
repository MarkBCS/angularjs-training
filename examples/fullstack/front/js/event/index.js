angular
  .module('event', [require('angular-route')])
  .directive('participants', require('./directives/participants'))
  .factory('participantService', require('./participantService'))
  .config(['$routeProvider', ($routeProvider) => {
    $routeProvider.when('/', {
      template: require('./templates/index.jade')
    })
  }])

module.exports = 'event'
