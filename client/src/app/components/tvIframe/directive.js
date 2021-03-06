(function() {
    'use strict';

    function TvIframe(TvIframeService) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl : './src/app/components/tvIframe/template.html',
            scope: {
                code : '@'
            },
            controllerAs: 'vm',
            bindToController: true,

            controller: function($log, TvVideoService, $scope) {
                var vm = this;
                $scope.code = vm.code;
            },
            link: function(scope, element, attrs) {
                scope.$watch('code', function (newval) {
                    if(newval) {
                        scope.url = "http://www.youtube.com/embed/"+ newval +"?rel=0";
                    }
                });
            }
        };
    }

    angular.module('tvIframeDirective', ['service.iframetv']).directive('tvIframe', TvIframe);
})();