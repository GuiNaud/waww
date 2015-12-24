(function() {
    'use strict';

    function config($stateProvider){
        $stateProvider
            .state('root.tvList', {
                url:'/tvList',
                views: {
                    '@': {
                        template : '<tv-list></tv-list>'
                    }
                }
            })

    }
    angular.module('tv-list', ['tvListDirective'])
        .config(config);

})();
