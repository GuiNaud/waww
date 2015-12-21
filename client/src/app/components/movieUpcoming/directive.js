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
            controller: function($log, UpcomingService, $stateParams) {
                var vm = this;
                var filter = vm.filter;
                var page = $stateParams.page ? Number($stateParams.page) : 1;
                var pageToLoad = page + 1;
                var pageToReload = page - 1;
                UpcomingService.getMovie(page).then(function(data) {
                    vm.upcomings = filter > 0 ? _.slice(data.data.results, 0, filter) : data.data.results;
                    vm.page = page;
                    if(data.data.total_pages > page) vm.pageToLoad = pageToLoad;
                    vm.pageToReload = pageToReload;
                    vm.filter = filter ;
                });
            },
            link: function(scope, elm, attrs){

            }
        };
    }

    angular.module('movieUpcomingDirective', ['service.upcoming'])
        .directive('movieUpcoming', MovieUpcoming);

})();
