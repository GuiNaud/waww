(function() {
    'use strict';

    function TvDetailService($http, $log) {
        var service = {};

        service.detailtv = [];

        var key = 'bb7f1b623e15f1c323072c6f2c7c8a2d';

        service.getOneMovie = function(movieID){
            return $http.get('http://api.themoviedb.org/3/tv/' + movieID,{
                params: {
                    api_key: key
                }
            })
                .success(function(data){
                    service.detailtv = data;
                })
                .error(function(data){
                    console.log(data);
                });

        };

        return service;
    }

    angular.module('service.detailtv', []).factory('TvDetailService', TvDetailService);

})();
