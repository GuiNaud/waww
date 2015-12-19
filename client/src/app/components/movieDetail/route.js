(function() {
    'use strict';

    function config($stateProvider) {
        $stateProvider
            .state('root.movieDetail', {
                url:'/movieDetails/:id',
                views: {
                    '@': {
                        template: '<movie-detail></movie-detail>'
                    }
                }
            })
    }

    angular.module('movie-detail', ['movieDetailDirective']).config(config);
})();
