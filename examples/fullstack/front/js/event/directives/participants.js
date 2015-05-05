module.exports = () => ({
    restrict: 'E',
    template: require('../templates/participants.jade'),
    controller: ['$scope', '$filter', 'participantService', ($scope, $filter, participantService) => {
      participantService.participants.success((participants) => {
        $scope.participants = $filter('orderBy')(participants, 'name')
      })
    }]
})
