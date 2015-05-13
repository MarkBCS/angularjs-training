let restify = require('restify')
let server  = restify.createServer()

let participants = [
  {name: 'Jaakko'},
  {name: 'Tapio'},
  {name: 'Juha'},
  {name: 'Mikko'},
  {name: 'Aaro'},
  {name: 'Cecilia'},
  {name: 'Peter'}]

server.get('/api/participants', (req, res, next) => {
  res.send(participants)
  return next()
})

server.get(/.*/, restify.serveStatic({
  directory: 'public',
  default:   'index.html'
}))

server.listen(9000, () => {
  console.log('%s listening at %s', server.name, server.url)
})
