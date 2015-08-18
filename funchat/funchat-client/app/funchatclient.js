angular.module('funchat').directive('funchatClient', function(FunchatApi) {

  return {
    restrict : 'E',
    replace : true,
    templateUrl : 'funchatclient.html',
    scope: {},
    controller : function($scope){

      function listMessages() {
        FunchatApi.list().then(function(messages) {
          $scope.messages = messages.data;
        });
      }

      $scope.post = function() {
        FunchatApi.post('Marko(Gofore)', $scope.newMessage).then(listMessages);
        $scope.newMesasge = undefined;
      }

      listMessages();

    }
  }

});