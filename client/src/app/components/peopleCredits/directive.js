(function() {
    'use strict';

    function PeopleCredits(PeopleCreditsService) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl : './src/app/components/peopleCredits/template.html',
            scope: {
                filter: "@"
            },
            controllerAs: 'vm',
            bindToController: true,
            controller: function($log, PeopleCreditsService, $stateParams) {
                var vm = this;
                var filter = vm.filter;
                PeopleCreditsService.getOneMovie($stateParams.id).then(function(data){
                    vm.creditspeoples = filter > 0 ? _.slice(data.data.cast, 0, filter) : data.data.cast;
                });
            },
            link: function(scope, elm, attrs) {

            }
        };
    }

    angular.module('peopleCreditsDirective', ['service.creditspeople']).directive('peopleCredits', PeopleCredits);
})();