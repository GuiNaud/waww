(function() {
    'use strict';

    function TvAiringService($http, $log){

        var service = {};

        service.airing = [];

        var key = 'bb7f1b623e15f1c323072c6f2c7c8a2d';

        service.getMovie = function () {


            return $http.get('https://api.themoviedb.org/3/tv/airing_today', {
                params : {
                    api_key: key
                }
            })
                .success(function(data){
                    service.airing = data;
                })
                .error(function(){
                    console.log('erreur');
                });

        };

        return service;
    }


    angular.module('service.airing', [])
        .factory('TvAiringService', TvAiringService);


})();
