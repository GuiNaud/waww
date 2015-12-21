(function() {
    'use strict';

    function config($stateProvider){
        $stateProvider
            .state('root.tvRated', {
                url:'/tvRated/:page',
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
