(function() {
    'use strict';

    function config($stateProvider) {
        $stateProvider
            .state('root.tvDetail', {
                url:'/tvshows/:id',
                views: {
                    '@': {
                        template:'<tv-detail></tv-detail>'
                    }
                }
            })
    }

    angular.module('tv-detail', ['tvDetailDirective']).config(config);
})();
