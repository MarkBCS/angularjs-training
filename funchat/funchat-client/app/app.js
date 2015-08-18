'use strict';

angular.module('funchat', [])

  .controller('appController', function($scope, FunchatApi) {

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
});
