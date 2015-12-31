(function() {
    'use strict';

    function PeopleDetail(PeopleDetailService) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl : './src/app/components/peopleDetail/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,

            controller: function($log, PeopleDetailService, $stateParams) {
                var vm = this;
                PeopleDetailService.getOneMovie($stateParams.id).then(function(data){
                    vm.detailpeople = data.data;
                });
            },
            link: function(scope, elm, attrs) {
                scope.goBack = function() {
                    window.history.back();
                };
            }
        };
    }

    angular.module('peopleDetailDirective', ['service.detailpeople']).directive('peopleDetail', PeopleDetail);
})();