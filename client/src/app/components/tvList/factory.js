(function() {
    'use strict';

    function TvListService($http, $log){

        var service = {};

        service.listtv = [];

        var key = 'bb7f1b623e15f1c323072c6f2c7c8a2d';
        service.getMovie = function () {
            return $http.get('https://api.themoviedb.org/3/genre/tv/list', {
                params : {
                    api_key: key
                }
            })
                .success(function(data){
                    service.listtv = data;
                })
                .error(function(){
                    console.log('erreur');
                });
        };
        return service;
    }


    angular.module('service.listtv', [])
        .factory('TvListService', TvListService);


})();
