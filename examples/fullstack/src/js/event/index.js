angular
  .module('event', [require('angular-route')])
  .config(['$routeProvider', ($routeProvider) => {
    $routeProvider.when('/', {
      template: require('./templates/index.jade')
    })
  }])

module.exports = 'event'
