(function() {
    'use strict';

    function TvList(TvListService){
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/components/tvList/template.html',
            scope: {
                toLoad: '='
            },
            controllerAs: 'vm',
            bindToController: true,

            controller: function($log, TvListService) {
                var vm = this;
                TvListService.getMovie().then(function(data) {
                    vm.listtvs = data.data.genres;
                });
            },
            link: function(scope, elm, attrs){
                scope.toLoad = $(window).width() >= 1024 ? true : false;
            }
        };
    }

    angular.module('tvListDirective', ['service.listtv'])
        .directive('tvList', TvList);

})();
