(function() {
    'use strict';

    function SearchService($http, $log) {
        var service = {};

        service.querylist = [];

        var key = 'bb7f1b623e15f1c323072c6f2c7c8a2d';

        service.getResults = function(query){
            return $http.get('http://api.themoviedb.org/3/search/multi',{
                params: {
                    api_key: key,
                    query: query
                }
            })
                .success(function(data){
                    service.querylist = data;
                })
                .error(function(data){
                    console.log(data);
                });
        };

        return service;
    }

    angular.module('service.querylist', []).factory('SearchService', SearchService);

})();
