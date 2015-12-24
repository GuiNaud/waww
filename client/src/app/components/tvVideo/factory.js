(function() {
    'use strict';

    function TvVideoService($http, $log) {
        var service = {};

        service.videotv = [];

        var key = 'bb7f1b623e15f1c323072c6f2c7c8a2d';

        service.getOneVideo = function(tvID){
            return $http.get('http://api.themoviedb.org/3/tv/' + tvID + '/videos',{
                params: {
                    api_key: key
                }
            })
                .success(function(data){
                    service.videotv = data;
                })
                .error(function(data){
                    console.log(data);
                });
        };

        return service;
    }

    angular.module('service.videotv', []).factory('TvVideoService', TvVideoService);

})();
