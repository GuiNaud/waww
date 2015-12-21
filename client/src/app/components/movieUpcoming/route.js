(function() {
    'use strict';

    function config($stateProvider){
        $stateProvider
            .state('root.movieUpcoming', {
                url:'/upcoming/:page',
                views: {
                    '@': {
                        template : '<movie-upcoming></movie-upcoming>'
                    }
                }
            })
    }
    angular.module('movie-upcoming', ['movieUpcomingDirective'])
        .config(config);

})();
