(function() {
    'use strict';

    function MovieDetail(MovieDetailService) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl : './src/app/components/movieDetail/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,

            controller: function($log, MovieDetailService, $stateParams) {
                var vm = this;
                MovieDetailService.getOneMovie($stateParams.id).then(function(data){
                    vm.detailmovie = data.data;
                });
            },
            link: function(scope, elm, attrs) {

            }
        };
    }

    angular.module('movieDetailDirective', ['service.detailmovie']).directive('movieDetail', MovieDetail);
})();