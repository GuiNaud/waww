(function() {
    'use strict';

    function config($stateProvider){
        $stateProvider
            .state('root.movieList', {
                url:'/movieList',
                views: {
                    '@': {
                        template : '<movie-list></movie-list>'
                    }
                }
            })

    }
    angular.module('movie-list', ['movieListDirective'])
        .config(config);

})();
