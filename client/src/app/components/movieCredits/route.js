(function() {
    'use strict';

    function config($stateProvider) {
        $stateProvider
            .state('root.movieCredits', {
                url:'/moviesCredits/:id',
                views: {
                    '@': {
                        template: '<movie-credits></movie-credits>'
                    }
                }
            })
    }

    angular.module('movie-credits', ['movieCreditsDirective']).config(config);
})();
