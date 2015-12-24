(function() {
    'use strict';

    function MoviePopularService($http, $log){

        var service = {};

        service.popularmovie = [];

        var key = 'bb7f1b623e15f1c323072c6f2c7c8a2d';
            service.getMovie = function ($page) {
                return $http.get('https://api.themoviedb.org/3/movie/popular', {
                    params : {
                        api_key: key,
                        page: $page
                    }
                })
                    .success(function(data){
                        service.popularmovie = data;
                    })
                    .error(function(){
                        console.log('erreur');
                    });
            };
        return service;
    }


    angular.module('service.popularmovie', [])
        .factory('MoviePopularService', MoviePopularService);


})();
