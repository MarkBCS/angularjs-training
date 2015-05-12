module.exports = () => ({
    restrict: 'E',
    scope: {},
    template: require('../templates/participants.html'),
    controller: ['$scope', '$filter', 'participantService', ($scope, $filter, participantService) => {
      participantService.participants.success((participants) => {
        $scope.participants = $filter('orderBy')(participants, 'name')
      })
    }]
})
