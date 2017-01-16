/* global window angular fetch AudioContext*/

/** AssetCache Factory
 * @namespace AmbientMusicSystem.MusicSystem
 */
(function() {
    'use strict';
    
    angular.module('ambientmusicsystem').factory('AssetCache', AssetCache);
    AssetCache.$inject = ['$q'];
    
    /**
     * @class AssetCache
     * @desc After 1st load caches assets in an IndexedDB
     * @memberOf AmbientMusicSystem.MusicSystem
     */
    function AssetCache($q) {
        var assetCacheVersion = -1;
        var assetCacheDBName = 'AssetCache';
        var assetCacheObjectStoreName = 'Samples';
        
        var audioContext = null;
        var db = null;
        var filePrefix = '';
        
        /**
         * @function setupIndexedDB
         * @private
         * @desc Checks Browser support of IndexedDB
         * @returns {object} Reference to browser implementation of IndexedDB
         * @memberOf AmbientMusicSystem.MusicSystem.AssetCache
         */
        function setupIndexedDB() {
            try
            {
                window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
                window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || {READ_WRITE: "readwrite"}; // This line should only be needed if it is needed to support the object's constants for older browsers
                window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
            }
            catch(exc) {
                // FD: TODO:
            }
            
            return window.indexedDB;
        };
        
        /**
         * @function initAssetCache
         * @private
         * @desc Create the IndexDB if it doesn't already exist or Upgrading existing DB if necessary 
         * @returns {object} Promise
         * @memberOf AmbientMusicSystem.MusicSystem.AssetCache
         */
        function initAssetCache() {
            var defer = $q.defer();
            
            var request = window.indexedDB.open(assetCacheDBName, assetCacheVersion);
            request.onerror = function(event) {
                defer.reject(event.target.errorCode);
            };
            request.onsuccess = function(event) {
                defer.resolve(event.target.result);
            };
            request.onupgradeneeded = function(event) {
                var tempdb = event.target.result;
                var assetStore = tempdb.createObjectStore(assetCacheObjectStoreName, { keyPath : "url" });
                assetStore.createIndex("url", "url", { unique: false });
            };
            
            return defer.promise;
        };
        
        /**
         * @function init
         * @public
         * @desc Checks if browser supports IndexedDB then tries to create a db for caching audio assets 
         * @param {number} dbVersion Current Working Version of our IndexedDB
         * @param {string} basePath The root url to prepend to all file requests
         * @param {object} rootAudioContext Existing AudioContext for decoding audio data
         * @returns {object} Promise
         * @memberOf AmbientMusicSystem.MusicSystem.AssetCache
         */ 
        function init (dbVersion, basePath, rootAudioContext) {
            var defer = $q.defer();
            
            assetCacheVersion = dbVersion;
            filePrefix = basePath || '';
            audioContext = rootAudioContext || new AudioContext();
            
            if(setupIndexedDB()) {
                initAssetCache()
                    .then(function(result) {
                        db = result;    
                        defer.resolve();
                    });
            } else {
                defer.reject();
                throw new Error("Unable to init Asset Cache - IndexedDB is not supported");
            }
            
            return defer.promise;
        };
        
        /**         
         * @function fetchAsset
         * @public
         * @desc Tries to retrieve and decode audio from cache if exists, or from remote URL if doesn't
         * @function fetchAsset
         * @param {string} filepath The audio file to retrieve
         * @returns {object} Promise with the decoded audio data
         * @memberOf AmbientMusicSystem.MusicSystem.AssetCache
         */ 
        function fetchAsset(filepath) {
            var defer = $q.defer();
            var readTransaction = db.transaction([assetCacheObjectStoreName]);
            var readAssetStore = readTransaction.objectStore(assetCacheObjectStoreName);
            var readSampleRequest = readAssetStore.get(filepath);
            
            readSampleRequest.onerror = function(event) {
                defer.reject(event);
            };
            readSampleRequest.onsuccess = function(event) {
                if(event.target.result) {
                    console.log('Using cached version of ' + filepath);
                    
                    audioContext.decodeAudioData(event.target.result.dataView.buffer)
                        .then(function(buff) {
                            defer.resolve(buff);
                        });
                } else {
                    console.log('Fetching fresh version of ' + filepath);
                    var fullFilePath = filePrefix + encodeURIComponent(filepath);
                    
                    fetch(fullFilePath)
                        .then(function(response) { 
                            // FD: This is only the fetch - response header
                            if (response.status == 200 || response.status == 301) {
                                // parse response
                                return response.arrayBuffer();  
                            } else {
                                throw new Error('Unable to read file');
                            }
                        })
                        .then(function(arrayBuffer) {
                            // FD: NOW we're parsing the fetch - response body
                            try {
                                var writeTransaction = db.transaction([assetCacheObjectStoreName], "readwrite");
                                writeTransaction.oncomplete = function(event) {
                                    // console.log(event);
                                };
                                writeTransaction.onerror = function(event) {
                                    // console.log(event);
                                };
                                
                                var writeAssetStore = writeTransaction.objectStore(assetCacheObjectStoreName);
                                var addRequest = writeAssetStore.add({
                                    "url" : filepath,
                                    "dataView" : new DataView(arrayBuffer)
                                }); 
                                addRequest.onsuccess = function(event) {
                                    // console.log(event);
                                };
                                addRequest.onerror = function (event) {
                                    // console.log(event);
                                };
                            }
                            catch(exc) {
                                // console.log(exc);
                            }    
                                
                            // decode audio buffer
                            audioContext.decodeAudioData(arrayBuffer)
                                .then(function(buff) {
                                    defer.resolve(buff);
                                });
                        });
                }
            };
            
            return defer.promise;
        };
        
        return {
            init : init,
            fetchAsset : fetchAsset
        };
    };
})();
