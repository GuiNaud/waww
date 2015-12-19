(function() {
    'use strict';

    function TvRated(TvRatedService){
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/components/tvRated/template.html',
            scope: {
                filter: "@",
                page: "@"
            },
            controllerAs: 'vm',
            bindToController: true,
            controller: function($log, TvRatedService) {
                var vm = this;
                var filter = vm.filter;
                var page = vm.page;
                if(!page) page = 1;
                TvRatedService.getMovie(page).then(function(data) {
                    vm.ratedtvs = filter > 0 ? _.slice(data.data.results, 0, filter) : data.data.results;
                });
            },
            link: function(scope, elm, attrs){

            }
        };
    }

    angular.module('tvRatedDirective', ['service.ratedtv'])
        .directive('tvRated', TvRated);

})();
