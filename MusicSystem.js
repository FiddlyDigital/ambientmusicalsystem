/*
 * PG: Inspiration taken from
 * http://teropa.info/blog/2016/07/28/javascript-systems-music.html
 * https://sonoport.github.io/visualising-waveforms-with-web-audio.html
 */

(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        // AMD
        define([
            'MusicSystemSamples', 
            'MusicSystemImpulses', 
            'MusicSystemVisualiser'
        ], factory);
    } else if (typeof module === "object") {
        // Common JS
        module.exports = factory(
            require('MusicSystemSamples'), 
            require('MusicSystemImpulses'), 
            require('MusicSystemVisualiser'));
    } else {
        // Browser Globals (root is window)
        root.MusicSystem = factory(
            root.MusicSystemSamples, 
            root.MusicSystemImpulses, 
            root.MusicSystemVisualiser
        );
    }
}(this, function(SAMPLE_LIBRARY, IMPULSE_LIBRARY, VISUALISER) {
    'use strict';

    var OCTAVE = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    var audioContext = new AudioContext();
    var analyser;

    function getSample(instrument, note, octave) {
        var requestedOctave = parseInt(octave, 10);
        var requestedNote = flatToSharp(note);
        var sampleBank = SAMPLE_LIBRARY[instrument];
        var sample = getNearestSample(sampleBank, requestedNote, requestedOctave);

        var distance = getNoteDistance(requestedNote, requestedOctave, sample.note, sample.octave);
        return fetchSample(sample.file)
            .then(function(sampleAudioBuffer) {
                return {
                    audioBuffer: sampleAudioBuffer,
                    distance: distance
                };
            });
    }

    function flatToSharp(note) {
        switch (note) {
            case 'Bb':
                return 'A#';
            case 'Db':
                return 'C#';
            case 'Eb':
                return 'D#';
            case 'Gb':
                return 'F#';
            case 'Ab':
                return 'G#';
            default:
                return note;
        }
    }

    function noteValue(note, octave) {
        return octave * 12 + OCTAVE.indexOf(note);
    }

    function getNoteDistance(note1, octave1, note2, octave2) {
        return noteValue(note1, octave1) - noteValue(note2, octave2);
    }

    function getNearestSample(sampleBank, note, octave) {
        var sortedBank = sampleBank.slice().sort(function(a, b) {
            var distanceToA = Math.abs(getNoteDistance(
                note, octave,
                a.note, a.octave
            ));

            var distanceToB = Math.abs(getNoteDistance(
                note, octave,
                b.note, b.octave
            ));

            return distanceToA - distanceToB;
        });

        return sortedBank[0];
    }

    function fetchSample(samplePath) {
        return fetch(encodeURIComponent(samplePath))
            .then(function(response) {
                return response.arrayBuffer();
            })
            .then(function(arrayBuffer) {
                return audioContext.decodeAudioData(arrayBuffer)
            });
    }

    function playSample(instrument, note, octave, destination, delaySeconds = 0) {
        getSample(instrument, note, octave)
            .then(function(sample) {
                var bufferSource = audioContext.createBufferSource();
                bufferSource.buffer = sample.audioBuffer;
                bufferSource.playbackRate.value = Math.pow(2, sample.distance / 12);

                bufferSource.connect(destination);
                bufferSource.start(audioContext.currentTime + delaySeconds);
            });
    }

    function startLoop(instrument, note, octave, destination, loopLengthSeconds, delaySeconds) {

        playSample(instrument, note, octave, destination, delaySeconds);

        setInterval(function() {
                playSample(instrument, note, octave, destination, delaySeconds);
            },
            loopLengthSeconds * 1000
        );
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    function getRandomFloat(min, max) {
        return Math.random() * (max - min) + min;
    };

    function getRandominstrument() {
        var instruments = [];
        for (var inst in SAMPLE_LIBRARY) {
            if (SAMPLE_LIBRARY.hasOwnProperty(inst)) {
                instruments.push(inst);
            }
        }

        return instruments[getRandomInt(0, instruments.length - 1)];
    }

    function startLayer(instrument, destination) {
        var note = OCTAVE[getRandomInt(0, OCTAVE.length - 1)];
        var oct = getRandomInt(0, 8);
        var loopLength = getRandomFloat(0, 30);
        var loopDelay = getRandomFloat(0, loopLength / 2);
        startLoop(instrument, note, oct, destination, loopLength, loopDelay);

        console.log('Note: ' + note + '' + oct + ' [' + loopLength + '/' + loopDelay + ']');
    }

    function startMusic() {
        // Get a random Impulse Sample for the Convolver Reverb
        var impulse = IMPULSE_LIBRARY[getRandomInt(0, IMPULSE_LIBRARY.length -1)];
        console.log('Impulse: ' + impulse.name);

        fetchSample(impulse.file)
            .then(function(convolverBuffer) {
                var delay = audioContext.createDelay();
                var feedback = audioContext.createGain();
                var convolver = audioContext.createConvolver();
                var instrument;
                var layers;
                var layerIdx;
            
                // global
                analyser = audioContext.createAnalyser();

                // Node Config
                delay.delayTime.value = getRandomFloat(0.1,1);
                feedback.gain.value = getRandomFloat(0.1,1);                
                convolver.buffer = convolverBuffer;

                // Node Connections
                delay.connect(feedback);
                feedback.connect(convolver);
                convolver.connect(analyser);
                analyser.connect(audioContext.destination);

                // Start Randomising
                instrument = getRandominstrument();
                layers = getRandomInt(1, 8);

                console.log('Instrument: ' + instrument + ' - Layers: ' + layers);

                for (layerIdx = 0; layerIdx < layers; layerIdx++) {
                    startLayer(instrument, convolver);
                }

                // Start Drawing
                VISUALISER.start(analyser);
            });
    }

    return {
        start: startMusic
    };
}));