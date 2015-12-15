(function() {
    'use strict';

    function MoviePopular(MovieService){
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/components/moviePopular/template.html',
            scope: {
                filter: "@"
            },
            controllerAs: 'vm',
            bindToController: true,
            /*jshint unused:false*/
            controller: function($log, MovieService) {
                var vm = this;
                var filter = vm.filter;
                console.log(filter);
                MovieService.getMovie().then(function(data) {
                    vm.movies = filter > 0 ? _.slice(data.data.results, 0, filter) : data.data.results;
                });
            },
            link: function(scope, elm, attrs){

            }
        };
    }

    angular.module('moviePopularDirective', ['service.movie'])
        .directive('moviePopular', MoviePopular);

})();
