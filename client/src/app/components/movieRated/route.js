(function() {
    'use strict';

    function config($stateProvider){
        $stateProvider
            .state('root.movieRated', {
                url:'/movieRated',
                views: {
                    '@': {
                        template : '<movie-rated></movie-rated>'
                    }
                }
            })
    }
    angular.module('movie-rated', ['movieRatedDirective'])
        .config(config);

})();
