(function() {
    'use strict';

    function TvSeasonService($http, $log) {
        var service = {};

        service.seasontv = [];

        var key = 'bb7f1b623e15f1c323072c6f2c7c8a2d';

        service.getOneSeason = function(tvID, season){
            return $http.get('http://api.themoviedb.org/3/tv/' + tvID + '/season/' + season,{
                params: {
                    api_key: key
                }
            })
                .success(function(data){
                    service.seasontv = data;
                })
                .error(function(data){
                    console.log(data);
                });
        };

        return service;
    }

    angular.module('service.seasontv', []).factory('TvSeasonService', TvSeasonService);

})();
