(function() {
    'use strict';

    function TvSimilar(TvSimilarService) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl : './src/app/components/tvSimilar/template.html',
            scope: {
                filter: "@"
            },
            controllerAs: 'vm',
            bindToController: true,
            controller: function($log, TvSimilarService, $stateParams) {
                var vm = this;
                var filter = vm.filter;
                TvSimilarService.getOneMovie($stateParams.id).then(function(data){
                    vm.similartvs = filter > 0 ? _.slice(data.data.results, 0, filter) : data.data.results;
                });
            },
            link: function(scope, elm, attrs) {

            }
        };
    }

    angular.module('tvSimilarDirective', ['service.similartv']).directive('tvSimilar', TvSimilar);
})();