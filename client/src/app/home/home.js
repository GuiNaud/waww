(function() {
  'use strict';

  function config($stateProvider) {
    $stateProvider
      .state('root.home', {
        url: '/',
        views: {
            '@': {
                template:   '<movie-popular data-filter="10"></movie-popular>' +
                            '<movie-upcoming data-filter="10"></movie-upcoming>' +
                            '<movie-rated data-filter="10"></movie-rated>' +
                            '<tv-popular data-filter="10"></tv-popular>'
            }
        }
      });
  }


  angular.module('home', [])
    .config(config);
})();
