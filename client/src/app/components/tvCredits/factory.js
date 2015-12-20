(function() {
    'use strict';

    function TvCreditsService($http, $log) {
        var service = {};

        service.creditstv = [];

        var key = 'bb7f1b623e15f1c323072c6f2c7c8a2d';

        service.getOneMovie = function(tvID){
            return $http.get('http://api.themoviedb.org/3/tv/' + tvID + '/credits',{
                params: {
                    api_key: key
                }
            })
                .success(function(data){
                    console.log(data);
                    service.creditstv = data;
                })
                .error(function(data){
                    console.log(data);
                });
        };

        return service;
    }

    angular.module('service.creditstv', []).factory('TvCreditsService', TvCreditsService);

})();
