(function() {
    'use strict';

    function TvRated(TvRatedService){
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/components/tvRated/template.html',
            scope: {
                filter: "@"
            },
            controllerAs: 'vm',
            bindToController: true,
            controller: function($log, TvRatedService, $stateParams) {
                var vm = this;
                var filter = vm.filter;
                var page = $stateParams.page ? Number($stateParams.page) : 1;
                var pageToLoad = page + 1;
                var pageToReload = page - 1;
                TvRatedService.getMovie(page).then(function(data) {
                    vm.ratedtvs = filter > 0 ? _.slice(data.data.results, 0, filter) : data.data.results;
                    vm.page = page;
                    if(data.data.total_pages > page) vm.pageToLoad = pageToLoad;
                    vm.pageToReload = pageToReload;
                    vm.filter = filter;
                });
            },
            link: function(scope, elm, attrs){

            }
        };
    }

    angular.module('tvRatedDirective', ['service.ratedtv'])
        .directive('tvRated', TvRated);

})();
