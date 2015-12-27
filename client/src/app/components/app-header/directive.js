(function() {
    'use strict';

    function AppHeaderComponent(SearchService) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/components/app-header/template.html',
            scope: {
                test:'='
            },
            controllerAs: 'self',
            bindToController: true,
            /*jshint unused:false*/
            controller: function($log, $scope) {
                var vm = this;
                $log.debug('Header loaded');
            },
            link: function(scope, elm, attrs) {
                scope.$watch('test', function(newval) {
                    if(newval) {
                        var search = {};
                        SearchService.getResults(newval).then(function(data) {
                            search = {};
                            $(".autocomplete ul").html('');
                            search = data.data.results;
                            $(".autocomplete").show();
                            if(search) {
                                $.each(search, function(i, value){
                                    var name = value.title ? value.title : value.name;
                                    var result, type;
                                    if(value.media_type == 'movie') {
                                        result =  '<b><a href="#/movies/' + value.id + '">'+ value.title +'</a></b><span class="movie">' + value.media_type + '</span>' ;
                                    } else if(value.media_type == 'tv') {
                                        result = '<b><a href="#/tvshows/' + value.id + '">'+ value.name +'</a></b><span class="tv">' + value.media_type + '</span>';
                                    } else{
                                        result = '<b><a href="#/people/' + value.id + '">'+ value.name +'</a></b><span class="people">' + value.media_type + '</span>';
                                    }
                                    $(".autocomplete ul").append('<li>'+result+'</li>');
                                });
                                $(".autocomplete a").on('click', function() {
                                    search = {};
                                    $(".autocomplete ul").html('');
                                    $(".autocomplete").hide();
                                    scope.test = '';
                                });
                            }
                        });
                    } else {
                        setTimeout(function() {
                            search = {};
                            $(".autocomplete ul").html('');
                            $(".autocomplete").hide();
                        }, 2000);
                    }
                })
            }
        };
    }

    angular.module('appHeaderComponent', ['service.querylist'])
        .directive('appHeader', AppHeaderComponent);
})();
