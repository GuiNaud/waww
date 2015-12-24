(function() {
    'use strict';

    function UpcomingService($http, $log){

        var service = {};

        service.upcoming = [];

        var key = 'bb7f1b623e15f1c323072c6f2c7c8a2d';

        service.getMovie = function ($page) {
            return $http.get('https://api.themoviedb.org/3/movie/upcoming', {
                params : {
                    api_key: key,
                    page: $page
                }
            })
                .success(function(data){
                    service.upcoming = data;
                })
                .error(function(){
                    console.log('erreur');
                });

        };

        return service;
    }


    angular.module('service.upcoming', [])
        .factory('UpcomingService', UpcomingService);


})();
