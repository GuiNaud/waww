(function() {
    'use strict';

    function TvSimilarService($http, $log) {
        var service = {};

        service.similartv = [];

        var key = 'bb7f1b623e15f1c323072c6f2c7c8a2d';

        service.getOneMovie = function(tvID){
            return $http.get('http://api.themoviedb.org/3/tv/' + tvID + '/similar',{
                params: {
                    api_key: key
                }
            })
                .success(function(data){
                    service.similartv = data;
                })
                .error(function(data){
                    console.log(data);
                });
        };

        return service;
    }

    angular.module('service.similartv', []).factory('TvSimilarService', TvSimilarService);

})();
