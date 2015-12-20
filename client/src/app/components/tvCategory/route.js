(function() {
    'use strict';

    function config($stateProvider) {
        $stateProvider
            .state('root.tvCategory', {
                url:'/tvCategory/:id/:name',
                views: {
                    '@': {
                        template: '<tv-category></tv-category>'
                    }
                }
            })
    }

    angular.module('tv-category', ['tvCategoryDirective']).config(config);
})();
