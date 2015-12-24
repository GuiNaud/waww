(function() {
    'use strict';

    function config($stateProvider) {
        $stateProvider
            .state('root.tvCredits', {
                url:'/tvCredits/:id',
                views: {
                    '@': {
                        template: '<tv-credits></tv-credits>'
                    }
                }
            })
    }

    angular.module('tv-credits', ['tvCreditsDirective']).config(config);
})();
