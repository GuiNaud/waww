(function() {
    'use strict';

    function TvAiring(TvAiringService){
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/components/tvAiring/template.html',
            scope: {
                filter: "@"
            },
            controllerAs: 'vm',
            bindToController: true,
            controller: function($log, TvAiringService) {
                var vm = this;
                var filter = vm.filter;
                console.log(filter);
                TvAiringService.getMovie().then(function(data) {
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
