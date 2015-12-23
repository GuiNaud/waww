(function() {
    'use strict';

    function MovieVideoService($http, $log) {
        var service = {};

        service.videomovie = [];

        var key = 'bb7f1b623e15f1c323072c6f2c7c8a2d';

        service.getOneVideo = function(tvID){
            return $http.get('http://api.themoviedb.org/3/movie/' + tvID + '/videos',{
                params: {
                    api_key: key
                }
            })
                .success(function(data){
                    service.videomovie = data;
                })
                .error(function(data){
                    console.log(data);
                });
        };

        return service;
    }

    angular.module('service.videomovie', []).factory('MovieVideoService', MovieVideoService);

})();
