(function() {
    'use strict';

    function MovieList(MovieListService){
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/components/movieList/template.html',
            scope: {
                toLoad: '='
            },
            controllerAs: 'vm',
            bindToController: true,
            /*jshint unused:false*/
            controller: function($log, MovieListService) {
                var vm = this;
                MovieListService.getMovie().then(function(data) {
                    vm.listmovies = data.data.genres;
                });

            },
            link: function(scope, elm, attrs){
                scope.toLoad = $(window).width() >= 1024 ? true : false;

                scope.goBack = function() {
                    window.history.back();
                };
            }
        };
    }

    angular.module('movieListDirective', ['service.listmovie'])
        .directive('movieList', MovieList);

})();
