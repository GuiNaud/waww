(function() {
    'use strict';

    function TvRatedService($http, $log){

        var service = {};

        service.ratedtv = [];

        var key = 'bb7f1b623e15f1c323072c6f2c7c8a2d';

        service.getMovie = function () {


            return $http.get('https://api.themoviedb.org/3/tv/top_rated', {
                params : {
                    api_key: key
                }
            })
                .success(function(data){
                    service.ratedtv = data;
                })
                .error(function(){
                    console.log('erreur');
                });

        };

        return service;
    }


    angular.module('service.ratedtv', [])
        .factory('TvRatedService', TvRatedService);


})();
