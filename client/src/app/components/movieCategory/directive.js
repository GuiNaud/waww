(function() {
    'use strict';

    function MovieCategory(MovieCategoryService) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl : './src/app/components/movieCategory/template.html',
            scope: {
                filter: "@",
                name: "@",
                id: "@"
            },
            controllerAs: 'vm',
            bindToController: true,

            controller: function($log, MovieCategoryService, $stateParams) {
                var vm = this;
                var filter = vm.filter;
                var id = $stateParams.id ? $stateParams.id : vm.id;
                var name = $stateParams.name ? $stateParams.name : vm.name;
                var page = $stateParams.page ? Number($stateParams.page) : 1;
                var pageToLoad = page + 1;
                var pageToReload = page - 1;
                MovieCategoryService.getMovie(id, page).then(function(data){
                    vm.categorymovies = filter > 0 ? _.slice(data.data.results, 0, filter) : data.data.results;
                    vm.name = name;
                    vm.id = id;
                    vm.page = page;
                    vm.pageToLoad = pageToLoad;
                    vm.pageToReload = pageToReload;
                    vm.filter = filter ;
                });
            },
            link: function(scope, elm, attrs) {

            }
        };
    }

    angular.module('movieCategoryDirective', ['service.categorymovie']).directive('movieCategory', MovieCategory);
})();