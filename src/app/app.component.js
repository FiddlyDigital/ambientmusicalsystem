/* global angular */
(function() {
    "use strict";
    
    angular.module('app')
        .component('app', {
            templateUrl : 'app/app.html',
            controller: [
                'MusicSystem', 
                AppComponentController
            ]
        }
    );
        
    function AppComponentController(MusicSystem) {
        this.$onInit = function () {
            MusicSystem.start();    
        }
    }
})();