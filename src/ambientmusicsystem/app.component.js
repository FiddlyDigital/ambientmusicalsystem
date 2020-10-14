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
            var assetsRoot = '/Samples/'; //var assetsRoot = 'https://dl.dropboxusercontent.com/u/69704724/';
            var dbVersion = 1;
            MusicSystem.init(assetsRoot, dbVersion)
                .then(function(){
                    MusicSystem.start(null);    
                });

            document.addEventListener("keydown", function() {
                MusicSystem.audioContect.start();
            });
        }
    };
})();