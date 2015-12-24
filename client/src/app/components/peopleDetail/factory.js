(function() {
    'use strict';

    function PeopleDetailService($http, $log) {
        var service = {};

        service.detailpeople = [];

        var key = 'bb7f1b623e15f1c323072c6f2c7c8a2d';

        service.getOneMovie = function(peopleID){
            return $http.get('http://api.themoviedb.org/3/person/' + peopleID,{
                params: {
                    api_key: key
                }
            })
                .success(function(data){
                    console.log(data);
                    service.detailpeople = data;
                })
                .error(function(data){
                    console.log(data);
                });
        };

        return service;
    }

    angular.module('service.detailpeople', []).factory('PeopleDetailService', PeopleDetailService);

})();
