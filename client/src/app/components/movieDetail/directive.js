(function() {
    'use strict';

    function MovieDetail(DetailService) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl : './src/app/components/movieDetail/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,

            controller: function($log, DetailService, $stateParams) {
                var vm = this;
                DetailService.getOneMovie($stateParams.id).then(function(data){
                    vm.detail = data.data;
                });
            },
            link: function(scope, elm, attrs) {

            }
        };
    }

    angular.module('movieDetailDirective', ['service.detail']).directive('movieDetail', MovieDetail);
})();