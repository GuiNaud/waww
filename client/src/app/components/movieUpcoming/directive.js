(function() {
    'use strict';

    function MovieUpcoming(UpcomingService){
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/components/movieUpcoming/template.html',
            scope: {
                filter: "@",
                page: '@'
            },
            controllerAs: 'vm',
            bindToController: true,
            controller: function($log, UpcomingService) {
                var vm = this;
                var filter = vm.filter;
                var page = vm.page;
                if(!page) page = 1;
                UpcomingService.getMovie(page).then(function(data) {
                    vm.upcomings = filter > 0 ? _.slice(data.data.results, 0, filter) : data.data.results;
                });
            },
            link: function(scope, elm, attrs){

            }
        };
    }

    angular.module('movieUpcomingDirective', ['service.upcoming'])
        .directive('movieUpcoming', MovieUpcoming);

})();
