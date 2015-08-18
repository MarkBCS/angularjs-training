module.exports = function(config){
  config.set({
    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/app.js',
      'test/unit/spec/**/*.js'
    ],

    singleRun : false
  });
};
