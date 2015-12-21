(function() {
    'use strict';

    function MoviePopular(MoviePopularService){
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
            controller: function($log, MoviePopularService, $stateParams) {
                var vm = this;
                var filter = vm.filter;
                var page = $stateParams.page ? Number($stateParams.page) : 1;
                var pageToLoad = page + 1;
                var pageToReload = page - 1;
                    MoviePopularService.getMovie(page).then(function(data) {
                        vm.popularmovies = filter > 0 ? _.slice(data.data.results, 0, filter) : data.data.results;
                        vm.page = page;
                        vm.pageToLoad = pageToLoad;
                        vm.pageToReload = pageToReload;
                        vm.filter = filter ;
                    });
            },
            link: function(scope, elm, attrs){

            }
        };
    }

    angular.module('moviePopularDirective', ['service.popularmovie'])
        .directive('moviePopular', MoviePopular);

})();
