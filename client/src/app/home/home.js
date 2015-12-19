(function() {
  'use strict';

  function config($stateProvider) {
    $stateProvider
      .state('root.home', {
        url: '/',
        views: {
            '@': {
                template:   '<movie-popular data-filter="10"></movie-popular>' +
                            '<movie-rated data-filter="10"></movie-rated>' +
                            '<movie-upcoming data-filter="10"></movie-upcoming>' +
                            '<tv-popular data-filter="10"></tv-popular>' +
                            '<tv-rated data-filter="10"></tv-rated>'
            }
        }
      });
  }


  angular.module('home', [])
    .config(config);
})();
