(function() {
    'use strict';

    function MoviePopular(MoviePopularService){
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/components/moviePopular/template.html',
            scope: {
                filter: "@"
            },
            controllerAs: 'vm',
            bindToController: true,
            /*jshint unused:false*/
            controller: function($log, MoviePopularService) {
                var vm = this;
                var filter = vm.filter;
                console.log(filter);
                MoviePopularService.getMovie().then(function(data) {
                    vm.popularmovies = filter > 0 ? _.slice(data.data.results, 0, filter) : data.data.results;
                });
            },
            link: function(scope, elm, attrs){

            }
        };
    }

    angular.module('moviePopularDirective', ['service.popularmovie'])
        .directive('moviePopular', MoviePopular);

})();
