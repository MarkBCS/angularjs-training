module.exports = () => ({
    restrict: 'E',
    template: require('../templates/participants.jade'),
    controller: ['$scope', '$filter', 'participantService', ($scope, $filter, participantService) => {
      let participants = participantService.participants
      $scope.participants = $filter('orderBy')(participants, 'name')
    }]
})
