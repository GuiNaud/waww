(function() {
    'use strict';

    function TvCategory(TvCategoryService) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl : './src/app/components/tvCategory/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,

            controller: function($log, TvCategoryService, $stateParams) {
                var vm = this;
                var name = $stateParams.name;
                TvCategoryService.getMovie($stateParams.id).then(function(data){
                    vm.categorytvs = data.data.results;
                    vm.name = name;
                });
            },
            link: function(scope, elm, attrs) {

            }
        };
    }

    angular.module('tvCategoryDirective', ['service.categorytv']).directive('tvCategory', TvCategory);
})();