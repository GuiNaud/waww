(function() {
    'use strict';

    function MovieCreditsService($http, $log) {
        var service = {};

        service.creditsmovie = [];

        var key = 'bb7f1b623e15f1c323072c6f2c7c8a2d';

        service.getOneMovie = function(movieID){
            return $http.get('http://api.themoviedb.org/3/movie/' + movieID + '/credits',{
                params: {
                    api_key: key
                }
            })
                .success(function(data){
                    console.log(data);
                    service.creditsmovie = data;
                })
                .error(function(data){
                    console.log(data);
                });
        };

        return service;
    }

    angular.module('service.creditsmovie', []).factory('MovieCreditsService', MovieCreditsService);

})();
