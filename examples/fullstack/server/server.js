let restify = require('restify')
let server  = restify.createServer()

server.get(/.*/, restify.serveStatic({
  directory: 'public',
  default:   'index.html'
}))

server.listen(9000, () => {
  console.log('%s listening at %s', server.name, server.url)
})
