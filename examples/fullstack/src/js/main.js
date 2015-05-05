let $       = require('jquery')
let angular = require('angular')

let app = angular.module('app', [])

$(() => {
  let root = $('#root')
  angular.bootstrap(root, ['app'])
})
