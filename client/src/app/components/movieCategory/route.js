(function() {
    'use strict';

    function config($stateProvider) {
        $stateProvider
            .state('root.movieCategory', {
                url:'/movieCategory/:id/:name/:page',
                views: {
                    '@': {
                        template: '<movie-category></movie-category>'
                    }
                }
            });
    }

    angular.module('movie-category', ['movieCategoryDirective']).config(config);
})();
