/* global angular */
(function() {
    "use strict";
    
    angular.module('ambientmusicsystem')
        .component('app', {
            templateUrl : 'ambientmusicsystem/app.html',
            controller: [
                'MusicSystem', 
                AppComponentController
            ]
        }
    );
        
    function AppComponentController(MusicSystem) {
        this.$onInit = function () {
            // Tell the application where to find the sample files
            // (This is FiddlyDigital's dropbox, but you can point to any other server instead...)
            var assetsRoot = 'https://dl.dropboxusercontent.com/u/69704724/';
            var dbVersion = 2;
            MusicSystem.start(assetsRoot, dbVersion);  
        }
    };
})();