angular.module('funchat').factory('FunchatApi', function($http) {

  var apiUrl = 'http://funchat-api.herokuapp.com';

  return {
    list : function() {
      return $http.get(apiUrl + '/messages?limit=50');
    },
    post : function(author, content) {
      return $http.post(apiUrl + '/messages', {author : author, content : content});
    }
  }
});