(function() {
    'use strict';

    function config($stateProvider) {
        $stateProvider
            .state('root.movieVideo', {
                url:'/movieVideo/:id',
                views: {
                    '@': {
                        template:'<movie-video></movie-video>'
                    }
                }
            })
    }

    angular.module('movie-video', ['movieVideoDirective']).config(config);
})();
