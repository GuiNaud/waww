(function() {
    'use strict';

    function config($stateProvider) {
        $stateProvider
            .state('root.search', {
                url:'/Search/:id',
                views: {
                    '@': {
                        template:'<search></search>'
                    }
                }
            })
    }

    angular.module('search', ['searchDirective']).config(config);
})();
