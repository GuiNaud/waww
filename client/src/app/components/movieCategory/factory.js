(function() {
    'use strict';

    function MovieCategoryService($http, $log) {
        var service = {};

        service.categorymovie = [];

        var key = 'bb7f1b623e15f1c323072c6f2c7c8a2d';

        service.getMovie = function(listID, $page){
            return $http.get('http://api.themoviedb.org/3/genre/' + listID + '/movies',{
                params: {
                    api_key: key,
                    page : $page,
                    include_all_movies: true
                }
            })
                .success(function(data){
                    service.categorymovie = data;
                })
                .error(function(data){
                    console.log(data);
                });
        };

        return service;
    }

    angular.module('service.categorymovie', []).factory('MovieCategoryService', MovieCategoryService);

})();
