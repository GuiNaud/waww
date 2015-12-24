(function() {
    'use strict';

    function config($stateProvider) {
        $stateProvider
            .state('root.tvIframe', {
                url:'/tvIframe/:code',
                views: {
                    '@': {
                        template:'<tv-iframe></tv-iframe>'
                    }
                }
            })
    }

    angular.module('tv-iframe', ['tvIframeDirective']).config(config);
})();
