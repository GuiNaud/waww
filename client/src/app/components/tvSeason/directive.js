(function() {
    'use strict';

    function TvSeason(TvSeasonService) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl : './src/app/components/tvSeason/template.html',
            scope: {
                id: "@",
                season: "@"
            },
            controllerAs: 'vm',
            bindToController: true,

            controller: function($log, TvSeasonService, $stateParams) {
                var vm = this;
                var season = vm.season ? vm.season : $stateParams.season;
                var id = vm.id ? vm.id : $stateParams.id;
                TvSeasonService.getOneSeason(id, season).then(function(data){
                    vm.seasontv = data.data;
                });
            },
            link: function(scope, elm, attrs) {
                console.log(scope.episodeDisplay);
                if(!scope.episodeDisplay) {
                    var width = $(window).width() - (($(window).width() * 5) / 100);
                    $(".episode").css({
                        width : width
                    });
                }
            }
        };
    }

    angular.module('tvSeasonDirective', ['service.seasontv']).directive('tvSeason', TvSeason);
})();