module.exports = ['$http', ($http) => {

  // no $http yet
  let participantList = [
    {name: 'Jaakko'},
    {name: 'Tapio'},
    {name: 'Juha'},
    {name: 'Mikko'},
    {name: 'Aaro'},
    {name: 'Cecilia'}]

    return {
      participants: participantList
    }
}]
