(function() {
    'use strict';

    function config($stateProvider){
        $stateProvider
            .state('root.tvPopular', {
                url:'/tvPopular',
                views: {
                    '@': {
                        template : '<tv-popular></tv-popular>'
                    }
                }
            })

    }
    angular.module('tv-popular', ['tvPopularDirective'])
        .config(config);

})();
