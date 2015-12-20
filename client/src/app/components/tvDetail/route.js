(function() {
    'use strict';

    function config($stateProvider) {
        $stateProvider
            .state('root.tvDetail', {
                url:'/tvshows/:id',
                views: {
                    '@': {
                        template:   '<tv-detail></tv-detail><tv-similar data-filter="5"></tv-similar>' +
                                    '<tv-credits></tv-credits>'
                    }
                }
            })
    }

    angular.module('tv-detail', ['tvDetailDirective']).config(config);
})();
