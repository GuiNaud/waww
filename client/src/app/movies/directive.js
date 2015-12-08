/**
 * Created by amelie.kirsch on 08/12/2015.
 */

(function() {
    'use strict'; /* permet de remonter des erreurs ex(var non def) http://www.w3schools.com/js/js_strict.asp */
    function PopularMovies(MoviePopService) {

        return{
                restrict:'EA', /* Permet de définir comment la déclaration de la directive doit se faire dans le code HTML*/
                templateUrl:'./src/app/movies/template.html',

        }

    }


});