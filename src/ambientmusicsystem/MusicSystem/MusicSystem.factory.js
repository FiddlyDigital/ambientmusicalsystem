/* global angular AudioContext fetch */
(function() {
    'use strict';
    
    angular.module('ambientmusicsystem').
        factory('MusicSystem', [ 
            'Utilities',
            'Samples', 
            'Impulses',
            'AssetCache',
            'Visualiser',
            MusicSystem
        ]);
    

    function MusicSystem(UTILITIES, SAMPLES_INDEX, IMPULSES_INDEX, ASSET_CACHE, VISUALISER) {
        var audioContext = null;
        var analyser;
        var sampleLocationPrefix;
    
        function getSample(instrument, note, octave) {
            var requestedOctave = parseInt(octave, 10);
            var requestedNote = UTILITIES.flatToSharp(note);
            var sampleBank = SAMPLES_INDEX[instrument];
            var sample = getNearestSample(
                sampleBank, 
                requestedNote, 
                requestedOctave
            );
            var distance = UTILITIES.getNoteDistance(
                requestedNote, 
                requestedOctave, 
                sample.note, 
                sample.octave
            );
            
            return ASSET_CACHE.fetchAsset(sample.file)
                .then(function(sampleAudioBuffer) {
                    return {
                        audioBuffer: sampleAudioBuffer,
                        distance: distance
                    };
                });
        };
    
        function getNearestSample(sampleBank, note, octave) {
            var sortedBank = sampleBank.slice().sort(function(a, b) {
                var distanceToA = Math.abs(UTILITIES.getNoteDistance(
                    note, octave,
                    a.note, a.octave
                ));
    
                var distanceToB = Math.abs(UTILITIES.getNoteDistance(
                    note, octave,
                    b.note, b.octave
                ));
    
                return distanceToA - distanceToB;
            });
    
            return sortedBank[0];
        };
    
        function playSample(instrument, note, octave, destination, delaySeconds) {
            delaySeconds = delaySeconds || 0;
            getSample(instrument, note, octave)
                .then(function(sample) {
                    var bufferSource = audioContext.createBufferSource();
                    bufferSource.buffer = sample.audioBuffer;
                    bufferSource.playbackRate.value = Math.pow(2, sample.distance / 12);
    
                    bufferSource.connect(destination);
                    bufferSource.start(audioContext.currentTime + delaySeconds);
                });
        };
    
        function startLoop(instrument, note, octave, destination, loopLengthSeconds, delaySeconds) {
            playSample(instrument, note, octave, destination, delaySeconds);
    
            setInterval(function() {
                    playSample(instrument, note, octave, destination, delaySeconds);
                },
                loopLengthSeconds * 1000
            );
        };
    
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
            for (var inst in SAMPLES_INDEX) {
                if (SAMPLES_INDEX.hasOwnProperty(inst)) {
                    instruments.push(inst);
                }
            }
    
            return instruments[getRandomInt(0, instruments.length - 1)];
        };
    
        function startLayer(instrument, note, oct, destination) {
            var loopLength = getRandomFloat(0, 30);
            var loopDelay = getRandomFloat(0, loopLength / 2);
            startLoop(instrument, note, oct, destination, loopLength, loopDelay);
        };
    
        function startMusic(samplesBasePath, dbVersion) {
            sampleLocationPrefix = samplesBasePath || 'assets/'
            dbVersion = dbVersion || 1;
            audioContext = new AudioContext();
                
            // FD: Create/Init the Asset Cache
            ASSET_CACHE.init(dbVersion, sampleLocationPrefix, audioContext)
                .then(function() {
                    // Get a random Impulse Sample for the Convolver Reverb
                    var impulse = IMPULSES_INDEX[getRandomInt(0, IMPULSES_INDEX.length -1)];
            
                    // FD: Go get the impulse-response (from cache if possible, from url if not)
                    ASSET_CACHE.fetchAsset(impulse.file)
                        .then(function(convolverBuffer) {
                            var delay = audioContext.createDelay();
                            var feedback = audioContext.createGain();
                            var convolver = audioContext.createConvolver();
                            var compressor = audioContext.createDynamicsCompressor();
                            var instrument;
                            var layers;
                            var layerIdx;
                            var mode;
                            var modeNotes;
                        
                            // global
                            analyser = audioContext.createAnalyser();
            
                            // Node Config
                            delay.delayTime.value = getRandomFloat(0.1,1);
                            feedback.gain.value = getRandomFloat(0.1,1);                
                            convolver.buffer = convolverBuffer;
                            compressor.threshold.value = -40;
                            compressor.knee.value = 40;
                            compressor.ratio.value = 12;
                            compressor.attack.value = 0;
                            compressor.release.value = 0.25;
            
                            // Node Connections
                            delay.connect(feedback);
                            feedback.connect(convolver);
                            convolver.connect(compressor);
                            compressor.connect(analyser);
                            analyser.connect(audioContext.destination);
            
                            // Start Randomising
                            instrument = getRandominstrument();
                            console.log('Instrument: ' + instrument);
            
                            layers = getRandomInt(2, 10);
            
                            // Pick a random note and mode - then get the notes from that mode.
                            var note = UTILITIES.octaves[getRandomInt(0, UTILITIES.octaves.length - 1)];
                            var oct = getRandomInt(1, 7);
            
                            mode = UTILITIES.modes[getRandomInt(0, UTILITIES.modes.length)];
                            modeNotes = UTILITIES.getNotesInMode(note, mode);
                            
                            for (layerIdx = 0; layerIdx < layers; layerIdx++) {
                                if(modeNotes[layerIdx]) {
                                    if(modeNotes[layerIdx] === 'A' || getRandomInt(0,100) > 80){
                                        oct = oct + 1;
            
                                        if(oct > 8){
                                            oct = getRandomInt(4,6);
                                        }
                                    }
            
                                    startLayer(instrument, modeNotes[layerIdx], oct, convolver);
                                }
                            }
            
                            // Start Drawing
                            VISUALISER.start(analyser);
                        });
                });
        };
            
        return {
            start: startMusic
        };    
    }
})();
