(function() {
    'use strict';

    function config($stateProvider) {
        $stateProvider
            .state('root.movieDetail', {
                url:'/movies/:id',
                views: {
                    '@': {
                        template: '<movie-detail></movie-detail><movie-similar data-filter="5"></movie-similar>' +
                                    '<movie-credits></movie-credits>'
                    }
                }
            })
    }

    angular.module('movie-detail', ['movieDetailDirective']).config(config);
})();
