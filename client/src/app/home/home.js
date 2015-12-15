(function() {
  'use strict';

  function config($stateProvider) {
    $stateProvider
      .state('root.home', {
        url: '/',
        views: {
          '@': {
            template: '<movie-popular data-filter="10"></movie-popular>'
          }
        }
      });
  }


  angular.module('home', [])
    .config(config);
})();
