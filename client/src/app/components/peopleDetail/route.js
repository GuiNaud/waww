(function() {
    'use strict';

    function config($stateProvider) {
        $stateProvider
            .state('root.peopleDetail', {
                url:'/people/:id',
                views: {
                    '@': {
                        template: '<people-detail></people-detail><people-credits></people-credits>'
                    }
                }
            })
    }

    angular.module('people-detail', ['peopleDetailDirective']).config(config);
})();
