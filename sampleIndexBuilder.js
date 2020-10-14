var fs = require('fs');
var sampleIndex = {};
//var basePath = './';
var basePath = 'C:\\temp\\Sonatina Symphonic Orchestra\\Samples';
var outputPath = 'C:\\Dev\\ZZZ_Graveyard\\ambientmusicalsystem\\src\\ambientmusicsystem\\MusicSystem\\samples.factory.js';
var noteAndOctaveRGX = /[a-gA-G]#*[0-9]/g;

function parseSampleIndiceFromFile(filename) {
    var match = filename.match(noteAndOctaveRGX);
    if (match && match.length == 1) {
        return {
            note: match[0].substring(0, match[0].length - 1),
            octave : match[0].charAt(match[0].length -1) 
        }
    } else {
        return null;
    }
}

function FindInstrumentFiles(filePath) {
    var folderFiles = fs.readdirSync(basePath + '\\' + filePath);
    var file;

    while (folderFiles.length) {
        file = folderFiles.pop();

        if (file) {
            var fullFilePath = basePath + '\\' + filePath + '\\' + file;
            var stat = fs.statSync(fullFilePath);

            if (stat && !stat.isDirectory()) {
                var indice = parseSampleIndiceFromFile(file);
                
                if (indice) {
                    indice.file = filePath + '/' + file;
                    sampleIndex[filePath].push(indice);
                }
            }
        }
        else {
            break;
        }
    }
}

function FindInstrumentDirectories() {
    var filePath;
    var filePaths = fs.readdirSync(basePath);

    while (filePaths.length) {
        filePath = filePaths.pop();

        if (filePath) {
            var fullFilePath = basePath + '\\' + filePath;
            var stat = fs.statSync(fullFilePath);

            if (stat && stat.isDirectory()) {
                sampleIndex[filePath] = [];
                FindInstrumentFiles(filePath);
            }
        } else {
            break;
        }
    }
}      

function OutputSamplesIndex() {
    var fileContents = `/* global angular */
(function() {
    'use strict';

    angular.module('ambientmusicsystem').factory('Samples', SamplesIndex);

    function SamplesIndex() {
        return ` + JSON.stringify(sampleIndex, null, 4)
            .replace(/\u2028/g, '\\u2028')
            .replace(/\u2029/g, '\\u2029') + `;
    } // end of SamplesIndex fn
})();`;

    fs.writeFile(outputPath, fileContents, function(err){
        if(err) {
            console.log(err);
        }
    });
}          

FindInstrumentDirectories();
OutputSamplesIndex();