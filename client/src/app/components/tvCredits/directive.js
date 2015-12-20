(function() {
    'use strict';

    function TvCredits(TvCreditsService) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl : './src/app/components/tvCredits/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,

            controller: function($log, TvCreditsService, $stateParams) {
                var vm = this;
                TvCreditsService.getOneMovie($stateParams.id).then(function(data){
                    vm.creditstvs = data.data.cast;
                });
            },
            link: function(scope, elm, attrs) {

            }
        };
    }

    angular.module('tvCreditsDirective', ['service.creditstv']).directive('tvCredits', TvCredits);
})();