(function() {
    'use strict';

    function MovieService($http, $log){

        var service = {};

        service.movie = [];		//MovieService.movie = [];

        var key = 'bb7f1b623e15f1c323072c6f2c7c8a2d';

        service.getMovie = function () {


            return $http.get('https://api.themoviedb.org/3/movie/popular', {
                params : {
                    api_key: key
                }
            })
                .success(function(data){
                    service.movie = data;
                })
                .error(function(){
                    console.log('erreur');
                });

        };

        return service;
    }


    angular.module('service.movie', [])
        .factory('MovieService', MovieService);


})();
