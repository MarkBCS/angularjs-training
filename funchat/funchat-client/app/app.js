'use strict';

angular.module('funchat', [])

  .filter('markOwnMessage', function() {
    return function(messages, username) {
      if(messages) {
        for(var i = 0; i < messages.length; i++) {
          var message = messages[i];
          if(message.author === username) {
            message.own = true;
          }
        }
      }
      return messages;
    }
  })

  .controller('appController', function($scope, FunchatApi) {

    var username = "Marko";
    $scope.username = username;

    function listMessages() {
      FunchatApi.list().then(function(messages) {
        $scope.messages = messages.data;
      });
    }

    $scope.post = function() {
      FunchatApi.post(username, $scope.newMessage).then(listMessages);
      $scope.newMesasge = undefined;
    }

    listMessages();
});
