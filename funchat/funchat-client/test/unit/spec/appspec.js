'use strict';

describe('appController', function() {

  beforeEach(module('AngularMiniSeedApp'));

  it('It should insert Hello world! to scope', inject(function($controller, $rootScope) {

    var scope = $rootScope.$new();
    var appController = $controller('appController', {$scope : scope});

    expect(scope.hello).toEqual('Hello world!');

  }));

});