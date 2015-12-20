(function() {
    'use strict';

    function MovieSimilarService($http, $log) {
        var service = {};

        service.similarmovie = [];

        var key = 'bb7f1b623e15f1c323072c6f2c7c8a2d';

        service.getOneMovie = function(movieID){
            return $http.get('http://api.themoviedb.org/3/movie/' + movieID + '/similar',{
                params: {
                    api_key: key
                }
            })
                .success(function(data){
                    service.similarmovie = data;
                })
                .error(function(data){
                    console.log(data);
                });
        };

        return service;
    }

    angular.module('service.similarmovie', []).factory('MovieSimilarService', MovieSimilarService);

})();
