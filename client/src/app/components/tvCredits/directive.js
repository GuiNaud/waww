(function() {
    'use strict';

    function TvCredits(TvCreditsService) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl : './src/app/components/tvCredits/template.html',
            scope: {
                filter: "@"
            },
            controllerAs: 'vm',
            bindToController: true,

            controller: function($log, TvCreditsService, $stateParams) {
                var vm = this;
                var filter = vm.filter;
                TvCreditsService.getOneMovie($stateParams.id).then(function(data){
                    vm.creditstvs = filter > 0 ? _.slice(data.data.cast, 0, filter) : data.data.cast;
                });
            },
            link: function(scope, elm, attrs) {

            }
        };
    }

    angular.module('tvCreditsDirective', ['service.creditstv']).directive('tvCredits', TvCredits);
})();