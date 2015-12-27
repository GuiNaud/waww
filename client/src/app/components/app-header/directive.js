(function() {
    'use strict';

    function AppHeaderComponent() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/components/app-header/template.html',
            scope: {},
            controllerAs: 'self',
            bindToController: true,
            /*jshint unused:false*/
            controller: function($log, $scope) {
                var vm = this;
                $log.debug('Header loaded');
            },
            link: function(scope, elm, attrs) {
                scope.displayInput = function(event) {
                    if(!$("#search .md-input-has-placeholder").is(':visible')) {
                        event.preventDefault();
                        $("#search .md-input-has-placeholder").show();
                    } else if(!scope.test) {
                        event.preventDefault();
                        $("#search .md-input-has-placeholder").hide();
                    } else {
                        scope.test = '';
                    }
                }
            }
        };
    }

    angular.module('appHeaderComponent', [])
        .directive('appHeader', AppHeaderComponent);
})();
