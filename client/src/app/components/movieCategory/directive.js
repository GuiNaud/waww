(function() {
    'use strict';

    function MovieCategory(MovieCategoryService) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl : './src/app/components/movieCategory/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,

            controller: function($log, MovieCategoryService, $stateParams) {
                var vm = this;
                var name = $stateParams.name;
                MovieCategoryService.getMovie($stateParams.id).then(function(data){
                    vm.categorymovies = data.data.results;
                    vm.name = name;
                });
            },
            link: function(scope, elm, attrs) {

            }
        };
    }

    angular.module('movieCategoryDirective', ['service.categorymovie']).directive('movieCategory', MovieCategory);
})();