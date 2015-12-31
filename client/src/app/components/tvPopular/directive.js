(function() {
    'use strict';

    function TvPopular(TvPopularService){
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/components/tvPopular/template.html',
            scope: {
                filter: "@",
                page: "@"
            },
            controllerAs: 'vm',
            bindToController: true,
            /*jshint unused:false*/
            controller: function($log, TvPopularService, $stateParams) {
                var vm = this;
                var filter = vm.filter;
                var page = $stateParams.page ? Number($stateParams.page) : 1;
                var pageToLoad = page + 1;
                var pageToReload = page - 1;
                TvPopularService.getMovie(page).then(function(data) {
                    vm.populartvs = filter > 0 ? _.slice(data.data.results, 0, filter) : data.data.results;
                    vm.page = page;
                    if(data.data.total_pages > page) vm.pageToLoad = pageToLoad;
                    vm.pageToReload = pageToReload;
                    vm.filter = filter ;
                });
            },
            link: function(scope, elm, attrs){
                scope.goBack = function() {
                    window.history.back();
                };
            }
        };
    }

    angular.module('tvPopularDirective', ['service.populartv'])
        .directive('tvPopular', TvPopular);

})();
