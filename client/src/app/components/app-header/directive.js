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

                //A l'affichage de la page
                scope.hideMenu = function () {
                    $(".navbar-header button").addClass(' collapsed');
                    $(".navbar-collapse").removeClass('in');
                    scope.rotateBar();
                };

                //Animation Burger
                scope.rotateBar = function() {
                    if($(".navbar-toggle .icon-bar:nth-child(3)").is(':visible')) {
                        $(".navbar-toggle").css('margin', '15px 15px 11px 10px');
                        $(".navbar-toggle .icon-bar:nth-child(2)").css({
                            transform : 'rotate(45deg)',
                            webkit: 'rotate(45deg)',
                            transition: 'transform 0.5s ease'
                        });
                        $(".navbar-toggle .icon-bar:last-child").css({
                            transform : 'rotate(-45deg)',
                            webkit: 'rotate(-45deg)',
                            marginTop: '-2px',
                            transition: 'all 0.5s ease'
                        });
                        $(".navbar-toggle .icon-bar:nth-child(3)").css({
                            display: 'none',
                            transition: 'all 0.5s ease'
                        });
                    } else {
                        $(".icon-bar").css({
                            display:'block',
                            transform : 'rotate(0)',
                            webkit: 'rotate(0)',
                            transition: 'all 0.5s ease'
                        });
                        $(".navbar-toggle").css('margin', '10px 15px 4px 10px');
                        $(".navbar-toggle .icon-bar:last-child").css('margin-top', '4px');
                    }
                };

                //affichage input search
                scope.displayInput = function() {
                    if(!$("#search .md-input-has-placeholder").is(':visible')) {
                        $("#search .md-input-has-placeholder").show();
                        $(".navbar h2").hide();
                    } else {
                        $("#search .md-input-has-placeholder, .autocomplete").hide();
                        $(".navbar h2").show();
                    }
                };

                //autocomplete
                scope.$watch('query', function(newval) {
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
                                        result =  '<a href="#/movies/' + value.id + '"><b>'+ value.title +'</b><span class="movie"><i class="fa fa-film"></i></span></a>' ;
                                    } else if(value.media_type == 'tv') {
                                        result = '<a href="#/tvshows/' + value.id + '"><b>'+ value.name +'</b><span class="tv"><i class="fa fa-tv"></i></span></a>';
                                    } else{
                                        result = '<a href="#/people/' + value.id + '"><b>'+ value.name +'</b><span class="people"><i class="fa fa-user"></i></span></a>';
                                    }
                                    $(".autocomplete ul").append('<li>'+result+'</li>');
                                });
                                $(".autocomplete a").on('click', function() {
                                    search = {};
                                    $(".autocomplete ul").html('');
                                    $(".autocomplete").hide();
                                    scope.query = '';
                                });
                            }
                        });
                    } else {
                        setTimeout(function() {
                            search = {};
                            $(".autocomplete ul").html('');
                            $(".autocomplete").hide();
                        }, 1000);
                    }
                });

            }
        };
    }

    angular.module('appHeaderComponent', ['service.querylist'])
        .directive('appHeader', AppHeaderComponent);
})();
