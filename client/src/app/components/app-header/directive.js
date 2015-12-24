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

            }
        };
    }

    angular.module('appHeaderComponent', [])
        .directive('appHeader', AppHeaderComponent);
})();
