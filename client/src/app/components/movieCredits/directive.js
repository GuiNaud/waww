(function() {
    'use strict';

    function MovieCredits(MovieCreditsService) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl : './src/app/components/movieCredits/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,

            controller: function($log, MovieCreditsService, $stateParams) {
                var vm = this;
                MovieCreditsService.getOneMovie($stateParams.id).then(function(data){
                    vm.creditsmovies = data.data.cast;
                });
            },
            link: function(scope, elm, attrs) {

            }
        };
    }

    angular.module('movieCreditsDirective', ['service.creditsmovie']).directive('movieCredits', MovieCredits);
})();