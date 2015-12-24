(function() {
    'use strict';

    function config($stateProvider) {
        $stateProvider
            .state('root.peopleCredits', {
                url:'/peopleCredits/:id',
                views: {
                    '@': {
                        template: '<people-credits></people-credits>'
                    }
                }
            })
    }

    angular.module('people-credits', ['peopleCreditsDirective']).config(config);
})();
