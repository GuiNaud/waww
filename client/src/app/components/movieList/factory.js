(function() {
    'use strict';

    function MovieListService($http, $log){

        var service = {};

        service.listmovie = [];

        var key = 'bb7f1b623e15f1c323072c6f2c7c8a2d';
        service.getMovie = function () {
            return $http.get('https://api.themoviedb.org/3/genre/movie/list', {
                params : {
                    api_key: key
                }
            })
                .success(function(data){
                    service.listmovie = data;
                })
                .error(function(){
                    console.log('erreur');
                });
        };
        return service;
    }


    angular.module('service.listmovie', [])
        .factory('MovieListService', MovieListService);


})();
