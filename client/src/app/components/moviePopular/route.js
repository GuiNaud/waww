(function() {
    'use strict';

    function config($stateProvider){
        $stateProvider
            .state('root.moviePopular', {
                url:'/moviePopular/:page',
                views: {
                    '@': {
                        template : '<movie-popular></movie-popular>'
                    }
                }
            })

    }
    angular.module('movie-popular', ['moviePopularDirective'])
        .config(config);

})();
