let $       = require('jquery')
let angular = require('angular')

let app = angular.module('exampleApp',
  [require('angular-route'),
   require('./event'),
   require('./funmarket')]
)

$(() => {
  let root = $('#root')
  angular.bootstrap(root, ['exampleApp'])
})
