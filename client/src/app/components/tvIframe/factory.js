(function() {
    'use strict';

    function TvIframeService($http, $log) {
        var service = {};

        service.iframetv = [];

        return service;
    }

    angular.module('service.iframetv', []).factory('TvIframeService', TvIframeService);

})();
