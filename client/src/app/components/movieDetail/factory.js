(function() {
   'use strict';

    function MovieDetailService($http, $log) {
        var service = {};

        service.detailmovie = [];

        var key = 'bb7f1b623e15f1c323072c6f2c7c8a2d';

        service.getOneMovie = function(movieID){
            return $http.get('http://api.themoviedb.org/3/movie/' + movieID,{
                params: {
                    api_key: key
                }
            })
                .success(function(data){
                    console.log(data);
                    service.detailmovie = data;
                })
                .error(function(data){
                    console.log(data);
                });
        };

        return service;
    }

    angular.module('service.detailmovie', []).factory('MovieDetailService', MovieDetailService);

})();
