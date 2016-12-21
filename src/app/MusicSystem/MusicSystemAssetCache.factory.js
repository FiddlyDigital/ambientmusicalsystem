/* global window angular fetch AudioContext*/
(function() {
    'use strict';
    
    angular.module('app').
        factory('MusicSystemAssetCache', [
            '$q', 
            MusicSystemAssetCache
        ]);
    
    function MusicSystemAssetCache($q) {
        var assetCacheVersion = -1;
        var assetCacheDBName = 'AssetCache'
        var assetCacheObjectStoreName = 'Samples';
        
        var audioContext = null;
        var db = null;
        var filePrefix = '';
        
        // FD: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
        function indexedDBInit(){
            try
            {
                window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
                window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || {READ_WRITE: "readwrite"}; // This line should only be needed if it is needed to support the object's constants for older browsers
                window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
            }
            catch(exc){
                
            }
            
            return window.indexedDB;
        };
        
        function initAssetCacheIfPossible (dbVersion, basePath, baseAudioContext) {
            var defer = $q.defer();
            
            assetCacheVersion = dbVersion;
            filePrefix = basePath || '';
            audioContext = baseAudioContext || new AudioContext();
            
            if(indexedDBInit()){
                initAssetCache()
                    .then(function(result){
                        db = result;    
                        defer.resolve();
                    });
            } else {
                defer.reject();
                throw new Error("Unable to init Asset Cache - IndexedDB is not supported");
            }
            
            return defer.promise;
        };
        
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

        // FD: use file path as key to retrieve the decodedAudio ArrayBuffer
        // If key does not exist, go and get it from the remote asset URL
        function fetchAsset(filepath) {
            var defer = $q.defer();
            var readTransaction = db.transaction([assetCacheObjectStoreName]);
            var readAssetStore = readTransaction.objectStore(assetCacheObjectStoreName);
            var readSampleRequest = readAssetStore.get(filepath);
            
            readSampleRequest.onerror = function(event){
                defer.reject(event);
            };
            readSampleRequest.onsuccess = function(event){
                if(event.target.result) {
                    console.log('Using cached version of ' + filepath);
                    
                    audioContext.decodeAudioData(event.target.result.dataView.buffer)
                        .then(function(buff){
                            defer.resolve(buff);
                        });
                } else {
                    console.log('Fetching fresh version of ' + filepath);
                    var fullFilePath = filePrefix + encodeURIComponent(filepath);
                    
                    fetch(fullFilePath)
                        .then(function(response) { 
                            if (response.status == 200 || response.status == 301){
                                // parse response
                                return response.arrayBuffer();  
                            } else {
                                throw new Error('Unable to read file');
                            }
                        })
                        .then(function(arrayBuffer) {
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
                                .then(function(buff){
                                    defer.resolve(buff);
                                });
                        });
                }
            };
            
            return defer.promise;
        };
        
        return {
            init : initAssetCacheIfPossible,
            fetchAsset : fetchAsset
        };
    };
})();
