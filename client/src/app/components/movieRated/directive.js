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
            controller: function($log, MovieRatedService, $stateParams) {
                var vm = this;
                var filter = vm.filter;
                var page = $stateParams.page ? Number($stateParams.page) : 1;
                var pageToLoad = page + 1;
                var pageToReload = page - 1;
                MovieRatedService.getMovie(page).then(function(data) {
                    vm.ratedmovies = filter > 0 ? _.slice(data.data.results, 0, filter) : data.data.results;
                    vm.page = page;
                    if(data.data.total_pages > page) vm.pageToLoad = pageToLoad;
                    vm.pageToReload = pageToReload;
                    vm.filter = filter ;
                });
            },
            link: function(scope, elm, attrs){
                scope.goBack = function() {
                    window.history.back();
                };
            }
        };
    }

    angular.module('movieRatedDirective', ['service.ratedmovie'])
        .directive('movieRated', MovieRated);

})();
