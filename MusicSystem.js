/*
 * PG: Inspiration taken from
 * http://teropa.info/blog/2016/07/28/javascript-systems-music.html
 * https://sonoport.github.io/visualising-waveforms-with-web-audio.html
 */

(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        // AMD
        define(['MusicSystemSamples'], factory);
    } else if (typeof module === "object") {
        // Common JS
        module.exports = factory(require('MusicSystemSamples'));
    } else {
        // Browser Globals (root is window)
        root.MusicSystem = factory(root.MusicSystemSamples);
    }
}(this, function(SAMPLE_LIBRARY) {
    'use strict';

    var OCTAVE = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    var audioContext = new AudioContext();

    // Used for Visualiser
    var VISUALISER_GREEN = 'rgb(38, 127, 57)';
    var VISUALISER_WHITE = 'rgb(256,256,256)';
    var canvas;
    var canvasCtx;
    var analyser;
    var dataArray;

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

    function drawFrame() {
        analyser.getByteTimeDomainData(dataArray);

        canvasCtx.fillStyle = 'rgb(38, 127, 57)';
        canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
        canvasCtx.lineWidth = 1;
        canvasCtx.strokeStyle = 'rgb(256,256,256)';
        canvasCtx.beginPath();

        var sliceWidth = canvas.width * 1.0 / analyser.frequencyBinCount;
        var x = 0;

        for (var i = 0; i < analyser.frequencyBinCount; i++) {
            var v = dataArray[i] / 128.0;
            var y = v * canvas.height / 2;

            if (i === 0) {
                canvasCtx.moveTo(x, y);
            } else {
                canvasCtx.lineTo(x, y);
            }

            x += sliceWidth;
        }

        canvasCtx.lineTo(canvas.width, canvas.height / 2);
        canvasCtx.stroke();

        requestAnimationFrame(drawFrame);
    }

    function startVisualisation() {
        canvas = document.getElementById('visualiser');
        if (canvas) {
            // set our visualiser to take up the whole screen
            canvas.width = Math.min(window.innerWidth, window.outerWidth);
            canvas.height = Math.min(window.innerHeight, window.outerHeight);

            // global
            canvasCtx = canvas.getContext('2d');

            analyser.fftSize = 2048;

            // global
            dataArray = new Uint8Array(analyser.frequencyBinCount);

            canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

            drawFrame();
        }
    }

    function startLayer(instrument, destination) {
        var note = OCTAVE[getRandomInt(0, OCTAVE.length - 1)];
        var oct = getRandomInt(0, 8);
        var loopLength = getRandomFloat(0, 30);
        var loopDelay = getRandomFloat(0, loopLength / 2);

        startLoop(instrument, note, oct, destination, loopLength, loopDelay);
    }

    function startMusic() {
        fetchSample('impulse_response/AirportTerminal.wav')
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
                delay.delayTime.value = 0.5;
                feedback.gain.value = 0.5;                
                convolver.buffer = convolverBuffer;

                // Node Connections
                delay.connect(feedback);
                feedback.connect(convolver);
                convolver.connect(analyser);
                analyser.connect(audioContext.destination);

                // Start Randomising
                instrument = getRandominstrument();
                layers = getRandomInt(1, 8);

                for (layerIdx = 0; layerIdx < layers; layerIdx++) {
                    startLayer(instrument, convolver);
                }

                // Start Drawing
                startVisualisation();
            });
    }

    return {
        start: startMusic
    };
}));