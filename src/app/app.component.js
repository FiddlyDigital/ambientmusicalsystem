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
            
            // Tell the application where to find the sample files
            // (This is FiddlyDigital's dropbox, but you can point to any other server instead...)
            var assetsPath = 'https://dl.dropboxusercontent.com/u/69704724/';
            MusicSystem.start(assetsPath);  
            
            // or use assets that you've downloaded locally
            // (assumed to be in ~/[src/dist]/assets/samples/)
            //MusicSystem.start();  
        }
    }
})();