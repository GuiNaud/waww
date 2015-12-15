(function() {
    'use strict';

    function MovieRated(RatedService){
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/components/movieRated/template.html',
            scope: {
                filter: "@"
            },
            controllerAs: 'vm',
            bindToController: true,
            controller: function($log, UpcomingService) {
                var vm = this;
                var filter = vm.filter;
                console.log(filter);
                RatedService.getMovie().then(function(data) {
                    vm.rateds = filter > 0 ? _.slice(data.data.results, 0, filter) : data.data.results;
                });
            },
            link: function(scope, elm, attrs){

            }
        };
    }

    angular.module('movieRatedDirective', ['service.rated'])
        .directive('movieRated', MovieRated);

})();
