(function() {
    'use strict';

    function MovieVideo(MovieVideoService) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl : './src/app/components/movieVideo/template.html',
            scope: {
                id: "@",
                filter:"@"
            },
            controllerAs: 'vm',
            bindToController: true,

            controller: function($log, MovieVideoService, $stateParams) {
                var vm = this;
                var id = vm.id ? vm.id : $stateParams.id;
                var filter = vm.filter;
                MovieVideoService.getOneVideo(id).then(function(data){
                    vm.videomovies = filter > 0 ? _.slice(data.data.results, 0, filter) : data.data.results;
                });
            },
            link: function(scope) {

            }
        };
    }

    angular.module('movieVideoDirective', ['service.videomovie']).directive('movieVideo', MovieVideo);
})();