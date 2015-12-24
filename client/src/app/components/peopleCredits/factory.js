(function() {
    'use strict';

    function PeopleCreditsService($http, $log) {
        var service = {};

        service.creditspeople = [];

        var key = 'bb7f1b623e15f1c323072c6f2c7c8a2d';

        service.getOneMovie = function(personID){
            return $http.get('http://api.themoviedb.org/3/person/' + personID + '/combined_credits',{
                params: {
                    api_key: key
                }
            })
                .success(function(data){
                    service.creditspeople = data;
                })
                .error(function(data){
                    console.log(data);
                });
        };

        return service;
    }

    angular.module('service.creditspeople', []).factory('PeopleCreditsService', PeopleCreditsService);

})();
