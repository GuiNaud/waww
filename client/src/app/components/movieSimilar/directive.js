(function() {
    'use strict';

    function MovieSimilar(MovieSimilarService) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl : './src/app/components/movieSimilar/template.html',
            scope: {
                filter: "@"
            },
            controllerAs: 'vm',
            bindToController: true,
            controller: function($log, MovieSimilarService, $stateParams) {
                var vm = this;
                var filter = vm.filter;
                MovieSimilarService.getOneMovie($stateParams.id).then(function(data){
                    vm.similarmovies = filter > 0 ? _.slice(data.data.results, 0, filter) : data.data.results;
                });
            },
            link: function(scope, elm, attrs) {

            }
        };
    }

    angular.module('movieSimilarDirective', ['service.similarmovie']).directive('movieSimilar', MovieSimilar);
})();