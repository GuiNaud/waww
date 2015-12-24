(function() {
    'use strict';

    function config($stateProvider){
        $stateProvider
            .state('root.movieRated', {
                url:'/movieRated/:page',
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
