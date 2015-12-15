(function() {
    'use strict';

    function RatedService($http, $log){

        var service = {};

        service.rated = [];

        var key = 'bb7f1b623e15f1c323072c6f2c7c8a2d';

        service.getMovie = function () {


            return $http.get('https://api.themoviedb.org/3/movie/top_rated', {
                params : {
                    api_key: key
                }
            })
                .success(function(data){
                    service.rated = data;
                })
                .error(function(){
                    console.log('erreur');
                });

        };

        return service;
    }


    angular.module('service.rated', [])
        .factory('RatedService', RatedService);


})();
