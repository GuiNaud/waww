(function() {
    'use strict';

    function MovieRated(MovieRatedService){
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/components/movieRated/template.html',
            scope: {
                filter: "@"
            },
            controllerAs: 'vm',
            bindToController: true,
            controller: function($log, MovieRatedService) {
                var vm = this;
                var filter = vm.filter;
                console.log(filter);
                MovieRatedService.getMovie().then(function(data) {
                    vm.ratedmovies = filter > 0 ? _.slice(data.data.results, 0, filter) : data.data.results;
                });
            },
            link: function(scope, elm, attrs){

            }
        };
    }

    angular.module('movieRatedDirective', ['service.ratedmovie'])
        .directive('movieRated', MovieRated);

})();
