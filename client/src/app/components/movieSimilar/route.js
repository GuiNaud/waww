(function() {
    'use strict';

    function config($stateProvider) {
        $stateProvider
            .state('root.movieSimilar', {
                url:'/movieSimilar/:id',
                views: {
                    '@': {
                        template: '<movie-similar></movie-similar>'
                    }
                }
            })
    }

    angular.module('movie-similar', ['movieSimilarDirective']).config(config);
})();
