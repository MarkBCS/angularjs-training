module.exports = () => ({
    restrict: 'E',
    template: require('../templates/participants.jade'),
    controller: ['$scope', ($scope) => {
      $scope.foo = 'it works'
    }]
})
