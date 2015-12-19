(function() {
    'use strict';

    function TvPopularService($http, $log){

        var service = {};

        service.populartv = [];

        var key = 'bb7f1b623e15f1c323072c6f2c7c8a2d';

        service.getMovie = function () {


            return $http.get('https://api.themoviedb.org/3/tv/popular', {
                params : {
                    api_key: key
                }
            })
                .success(function(data){
                    service.populartv = data;
                })
                .error(function(){
                    console.log('erreur');
                });

        };

        return service;
    }


    angular.module('service.populartv', [])
        .factory('TvPopularService', TvPopularService);


})();
