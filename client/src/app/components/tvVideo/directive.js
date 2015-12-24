(function() {
    'use strict';

    function TvVideo(TvVideoService) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl : './src/app/components/tvVideo/template.html',
            scope: {
                id: "@",
                filter:"@"
            },
            controllerAs: 'vm',
            bindToController: true,

            controller: function($log, TvVideoService, $stateParams) {
                var vm = this;
                var id = vm.id ? vm.id : $stateParams.id;
                var filter = vm.filter;
                TvVideoService.getOneVideo(id).then(function(data){
                    vm.videostv = filter > 0 ? _.slice(data.data.results, 0, filter) : data.data.results;
                });
            },
            link: function(scope) {

            }
        };
    }

    angular.module('tvVideoDirective', ['service.videotv']).directive('tvVideo', TvVideo);
})();