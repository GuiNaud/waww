(function() {
    'use strict';

    function TvCategory(TvCategoryService) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl : './src/app/components/tvCategory/template.html',
            scope: {
                filter: "@",
                name: "@",
                id: "@"
            },
            controllerAs: 'vm',
            bindToController: true,

            controller: function($log, TvCategoryService, $stateParams) {
                var vm = this;
                var filter = vm.filter;
                var id = $stateParams.id ? $stateParams.id : vm.id;
                var name = $stateParams.name ? $stateParams.name : vm.name;
                TvCategoryService.getMovie(id).then(function(data){
                    vm.categorytvs = filter > 0 ? _.slice(data.data.results, 0, filter) : data.data.results;
                    vm.name = name;
                });
            },
            link: function(scope, elm, attrs) {

            }
        };
    }

    angular.module('tvCategoryDirective', ['service.categorytv']).directive('tvCategory', TvCategory);
})();