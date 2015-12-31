(function() {
    'use strict';

    function Search(SearchService) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl : './src/app/components/search/template.html',
            scope: {
                test:'='
            },
            controllerAs: 'vm',
            bindToController: true,

            controller: function($log, SearchService, $stateParams, $scope) {
                var vm = this;
                var query = $scope.test ? $scope.test : $stateParams.id;
                SearchService.getResults(query).then(function(data) {
                    vm.querieslist = data.data.results;
                    vm.query = query;
                })
            },
            link: function(scope, element, attrs) {
                scope.goBack = function() {
                    window.history.back();
                };
            }
        };
    }

    angular.module('searchDirective', ['service.querylist']).directive('search', Search);
})();