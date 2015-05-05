angular
  .module('event', [require('angular-route')])
  .directive('participants', require('./directives/participants'))
  .config(['$routeProvider', ($routeProvider) => {
    $routeProvider.when('/', {
      template: require('./templates/index.jade')
    })
  }])

module.exports = 'event'
