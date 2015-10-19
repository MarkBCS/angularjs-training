angular.module('funtodoApp', [])
  .controller('FunchatCtrl', function($scope, $http, $log, $timeout) {
    
    $scope.addMessage = function (author, message) {
      $http.post('http://funchat-api.herokuapp.com/messages', {
        author: author,
        content: message
      }).success(function (data) {
        $scope.messages.splice(0,0,data);
      });
    };

    $scope.removeMessage = function (id) {
      $http.delete('http://funchat-api.herokuapp.com/messages/' + id).success(function () {
        $scope.messages = $scope.messages.filter(function (item ) {
          return item._id !== id;
        });
        $scope.note = "Message with id:' + id + ' was deleted successfully";
        $timeout(function () {
          $scope.note = "";
        }, 1000);
      });
    };

    $scope.editMessage = function (message) {
      $scope.editId = message._id;
    };

    $scope.updateMessage = function (message) {
      $http.put('http://funchat-api.herokuapp.com/messages/' + message._id, message).success(function (data) {
        $scope.editId = undefined;
      }).error(function () {
        $scope.editId = undefined;
      });
    };

    getMessages();

    function getMessages() {
      $http
          .get('http://funchat-api.herokuapp.com/messages')
          .success(function(messages) {
            $scope.messages = messages;
            $timeout(function () {
              getMessages();
            }, 3000);
          })
          .error(function(data, status, headers, config) {
            $log.error('ERROR fetching messages', status);
            getMessages();
          });
    }



  });
