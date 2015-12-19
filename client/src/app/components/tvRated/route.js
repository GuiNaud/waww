(function() {
    'use strict';

    function config($stateProvider){
        $stateProvider
            .state('root.tvRated', {
                url:'/tvRated',
                views: {
                    '@': {
                        template : '<tv-rated></tv-rated>'
                    }
                }
            })
    }
    angular.module('tv-rated', ['tvRatedDirective'])
        .config(config);

})();
