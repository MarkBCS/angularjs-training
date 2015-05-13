let $       = require('jquery')
let angular = require('angular')

let app = angular.module('exampleApp', [require('./event')])

$(() => {
  let root = $('#root')
  angular.bootstrap(root, ['exampleApp'])
})
