(function() {
    'use strict';

    function MovieCredits(MovieCreditsService) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl : './src/app/components/movieCredits/template.html',
            scope: {
                filter: "@"
            },
            controllerAs: 'vm',
            bindToController: true,
            controller: function($log, MovieCreditsService, $stateParams) {
                var vm = this;
                var filter = vm.filter;
                MovieCreditsService.getOneMovie($stateParams.id).then(function(data){
                    vm.creditsmovie = filter > 0 ? _.slice(data.data.cast, 0, filter) : data.data.cast;
                });
            },
            link: function(scope, elm, attrs) {

            }
        };
    }

    angular.module('movieCreditsDirective', ['service.creditsmovie']).directive('movieCredits', MovieCredits);
})();