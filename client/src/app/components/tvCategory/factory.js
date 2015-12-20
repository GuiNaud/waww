(function() {
    'use strict';

    function TvCategoryService($http, $log) {
        var service = {};

        service.categorytv = [];

        var key = 'bb7f1b623e15f1c323072c6f2c7c8a2d';

        service.getMovie = function(listID){
            return $http.get('http://api.themoviedb.org/3/discover/tv',{
                params: {
                    api_key: key,
                    with_genres: listID
                }
            })
                .success(function(data){
                    service.categorytv = data;
                })
                .error(function(data){
                    console.log(data);
                });
        };

        return service;
    }

    angular.module('service.categorytv', []).factory('TvCategoryService', TvCategoryService);

})();
