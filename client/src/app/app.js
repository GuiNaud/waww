(function() {
  'use strict';

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
  });

  function config($stateProvider, $urlRouterProvider, $logProvider, $httpProvider, $sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(['self', 'http://www.youtube.com/embed/**']);
    $urlRouterProvider.otherwise('/');
    $logProvider.debugEnabled(true);
    $httpProvider.interceptors.push('httpInterceptor');
    $stateProvider
      .state('root', {
        views: {
          'header': {
            template: '<div data-app-header></div>'
          },
          'footer': {
            template: '<div data-app-footer></div>'
          }
        }
      });
  }

  function MainCtrl($log) {
    $log.debug('MainCtrl loaded!');
  }

  function run($log) {
    $log.debug('App is running!');
  }

  angular.module('app', [
      'ui.router',
      'home',
      'appHeaderComponent',
      'movie-popular',
      'movie-rated',
      'movie-upcoming',
      'movie-detail',
      'movie-similar',
      'movie-credits',
      'movie-list',
      'movie-category',
      'movie-video',
      'people-detail',
      'people-credits',
      'search',
      'tv-popular',
      'tv-rated',
      'tv-airing',
      'tv-detail',
      'tv-similar',
      'tv-credits',
      'tv-list',
      'tv-category',
      'tv-season',
      'tv-video',
      'tv-iframe',
      'appFooterComponent',
      'common.filters.uppercase',
      'common.interceptors.http',
      'templates'
    ])
    .config(config)
    .run(run)
    .controller('MainCtrl', MainCtrl)
    .value('version', '1.1.0');
})();
