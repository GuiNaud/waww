(function() {
    'use strict';

    function MovieList(MovieListService){
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/components/movieList/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,
            /*jshint unused:false*/
            controller: function($log, MoviePopularService) {
                var vm = this;
                MovieListService.getMovie().then(function(data) {
                    vm.listmovies = data.data.genres;
                });
            },
            link: function(scope, elm, attrs){

            }
        };
    }

    angular.module('movieListDirective', ['service.listmovie'])
        .directive('movieList', MovieList);

})();
