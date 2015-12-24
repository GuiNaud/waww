(function() {
    'use strict';

    function config($stateProvider) {
        $stateProvider
            .state('root.tvSimilar', {
                url:'/tvSimilar/:id',
                views: {
                    '@': {
                        template: '<tv-similar></tv-similar>'
                    }
                }
            })
    }

    angular.module('tv-similar', ['tvSimilarDirective']).config(config);
})();
