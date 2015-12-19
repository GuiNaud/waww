(function() {
    'use strict';

    function TvAiring(TvAiringService){
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/components/tvAiring/template.html',
            scope: {
                filter: "@",
                page: '@'
            },
            controllerAs: 'vm',
            bindToController: true,
            controller: function($log, TvAiringService) {
                var vm = this;
                var filter = vm.filter;
                var page = vm.page;
                if(!page) page = 1;
                TvAiringService.getMovie(page).then(function(data) {
                    vm.airings = filter > 0 ? _.slice(data.data.results, 0, filter) : data.data.results;
                });
            },
            link: function(scope, elm, attrs){

            }
        };
    }

    angular.module('tvAiringDirective', ['service.airing'])
        .directive('tvAiring', TvAiring);

})();
