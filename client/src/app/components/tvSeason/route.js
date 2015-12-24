(function() {
    'use strict';

    function config($stateProvider) {
        $stateProvider
            .state('root.tvSeason', {
                url:'/tvseason/:id/:season',
                views: {
                    '@': {
                        template:'<tv-season></tv-season>'
                    }
                }
            })
    }

    angular.module('tv-season', ['tvSeasonDirective']).config(config);
})();
