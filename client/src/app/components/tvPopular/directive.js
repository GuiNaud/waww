(function() {
    'use strict';

    function TvPopular(TvPopularService){
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/components/tvPopular/template.html',
            scope: {
                filter: "@"
            },
            controllerAs: 'vm',
            bindToController: true,
            /*jshint unused:false*/
            controller: function($log, TvPopularService) {
                var vm = this;
                var filter = vm.filter;
                console.log(filter);
                TvPopularService.getMovie().then(function(data) {
                    vm.populartvs = filter > 0 ? _.slice(data.data.results, 0, filter) : data.data.results;
                });
            },
            link: function(scope, elm, attrs){

            }
        };
    }

    angular.module('tvPopularDirective', ['service.populartv'])
        .directive('tvPopular', TvPopular);

})();
