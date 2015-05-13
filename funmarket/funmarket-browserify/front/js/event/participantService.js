module.exports = ['$http', ($http) => {

  let participants = $http.get('/api/participants')

  return {
    participants: participants
  }

}]
