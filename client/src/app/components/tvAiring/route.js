(function() {
    'use strict';

    function config($stateProvider){
        $stateProvider
            .state('root.tvAiring', {
                url:'/tvAiring',
                views: {
                    '@': {
                        template : '<tv-airing></tv-airing>'
                    }
                }
            })
    }
    angular.module('tv-airing', ['tvAiringDirective'])
        .config(config);

})();
