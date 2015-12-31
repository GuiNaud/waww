(function() {
    'use strict';

    function TvDetail(TvDetailService) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl : './src/app/components/tvDetail/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,

            controller: function($log, TvDetailService, $stateParams) {
                var vm = this;
                TvDetailService.getOneMovie($stateParams.id).then(function(data){
                    vm.detailtv = data.data;
                });
            },
            link: function(scope, elm, attrs) {
                scope.goBack = function() {
                    window.history.back();
                };
            }
        };
    }

    angular.module('tvDetailDirective', ['service.detailtv']).directive('tvDetail', TvDetail);
})();