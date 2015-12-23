(function() {
    'use strict';

    function config($stateProvider) {
        $stateProvider
            .state('root.tvVideo', {
                url:'/tvVideo/:id/:season/:episode',
                views: {
                    '@': {
                        template:'<tv-video></tv-video>'
                    }
                }
            })
    }

    angular.module('tv-video', ['tvVideoDirective']).config(config);
})();
