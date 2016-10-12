(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define([], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory();
    } else {
        // Browser Globals (root is window)
        root.MusicSystemSamples = factory();
    }
}(this, function() {
    'use strict';

    var samples = {};

    samples['Violas'] = [{
        note: 'A',
        octave: 4,
        file: 'samples/Violas/violas-sus-a4.wav'
    }, {
        note: 'A',
        octave: 5,
        file: 'samples/Violas/violas-sus-a5.wav'
    }, {
        note: 'C',
        octave: 4,
        file: 'samples/Violas/violas-sus-c4.wav'
    }, {
        note: 'C',
        octave: 5,
        file: 'samples/Violas/violas-sus-c5.wav'
    }, {
        note: 'C',
        octave: 6,
        file: 'samples/Violas/violas-sus-c6.wav'
    }, {
        note: 'D#',
        octave: 4,
        file: 'samples/Violas/violas-sus-d#4.wav'
    }, {
        note: 'D#',
        octave: 5,
        file: 'samples/Violas/violas-sus-d#5.wav'
    }, {
        note: 'F#',
        octave: 4,
        file: 'samples/Violas/violas-sus-f#4.wav'
    }, {
        note: 'F#',
        octave: 5,
        file: 'samples/Violas/violas-sus-f#5.wav'
    }];

    samples['Violin'] = [{
        note: 'A#',
        octave: 3,
        file: 'samples/Violin/violin-a#3.wav'
    }, {
        note: 'A#',
        octave: 4,
        file: 'samples/Violin/violin-a#4.wav'
    }, {
        note: 'A#',
        octave: 5,
        file: 'samples/Violin/violin-a#5.wav'
    }, {
        note: 'A#',
        octave: 6,
        file: 'samples/Violin/violin-a#6.wav'
    }, {
        note: 'C#',
        octave: 4,
        file: 'samples/Violin/violin-c#4.wav'
    }, {
        note: 'C#',
        octave: 5,
        file: 'samples/Violin/violin-c#5.wav'
    }, {
        note: 'C#',
        octave: 6,
        file: 'samples/Violin/violin-c#6.wav'
    }, {
        note: 'C#',
        octave: 7,
        file: 'samples/Violin/violin-c#7.wav'
    }, {
        note: 'E',
        octave: 4,
        file: 'samples/Violin/violin-e4.wav'
    }, {
        note: 'E',
        octave: 5,
        file: 'samples/Violin/violin-e5.wav'
    }, {
        note: 'E',
        octave: 6,
        file: 'samples/Violin/violin-e6.wav'
    }, {
        note: 'G',
        octave: 3,
        file: 'samples/Violin/violin-g3.wav'
    }, {
        note: 'G',
        octave: 4,
        file: 'samples/Violin/violin-g4.wav'
    }, {
        note: 'G',
        octave: 5,
        file: 'samples/Violin/violin-g5.wav'
    }, {
        note: 'G',
        octave: 6,
        file: 'samples/Violin/violin-g6.wav'
    }];

    samples['Flutes'] = [{
        note: 'A',
        octave: 4,
        file: 'samples/Flutes/flutes-stc-rr1-a4.wav'
    }, {
        note: 'A',
        octave: 5,
        file: 'samples/Flutes/flutes-stc-rr1-a5.wav'
    }, {
        note: 'C',
        octave: 4,
        file: 'samples/Flutes/flutes-stc-rr1-c4.wav'
    }, {
        note: 'C',
        octave: 5,
        file: 'samples/Flutes/flutes-stc-rr1-c5.wav'
    }, {
        note: 'D#',
        octave: 4,
        file: 'samples/Flutes/flutes-stc-rr1-d#4.wav'
    }, {
        note: 'D#',
        octave: 5,
        file: 'samples/Flutes/flutes-stc-rr1-d#5.wav'
    }, {
        note: 'F#',
        octave: 4,
        file: 'samples/Flutes/flutes-stc-rr1-f#4.wav'
    }, {
        note: 'F#',
        octave: 5,
        file: 'samples/Flutes/flutes-stc-rr1-f#5.wav'
    }];

    samples['Harp'] = [{
        note: 'A',
        octave: 4,
        file: 'samples/Harp/harp-a4.wav'
    }, {
        note: 'A',
        octave: 5,
        file: 'samples/Harp/harp-a5.wav'
    }, {
        note: 'A',
        octave: 6,
        file: 'samples/Harp/harp-a6.wav'
    }, {
        note: 'C',
        octave: 4,
        file: 'samples/Harp/harp-c4.wav'
    }, {
        note: 'C',
        octave: 5,
        file: 'samples/Harp/harp-c5.wav'
    }, {
        note: 'C',
        octave: 6,
        file: 'samples/Harp/harp-c6.wav'
    }, {
        note: 'D#',
        octave: 4,
        file: 'samples/Harp/harp-d#4.wav'
    }, {
        note: 'D#',
        octave: 5,
        file: 'samples/Harp/harp-d#5.wav'
    }, {
        note: 'D#',
        octave: 6,
        file: 'samples/Harp/harp-d#6.wav'
    }, {
        note: 'F#',
        octave: 4,
        file: 'samples/Harp/harp-f#4.wav'
    }, {
        note: 'F#',
        octave: 5,
        file: 'samples/Harp/harp-f#5.wav'
    }, {
        note: 'F#',
        octave: 6,
        file: 'samples/Harp/harp-f#6.wav'
    }];

    samples['Grand Piano'] = [{
        note: 'A',
        octave: 4,
        file: 'samples/Grand Piano/piano-f-a4.wav'
    }, {
        note: 'A',
        octave: 5,
        file: 'samples/Grand Piano/piano-f-a5.wav'
    }, {
        note: 'A',
        octave: 6,
        file: 'samples/Grand Piano/piano-f-a6.wav'
    }, {
        note: 'C',
        octave: 4,
        file: 'samples/Grand Piano/piano-f-c4.wav'
    }, {
        note: 'C',
        octave: 5,
        file: 'samples/Grand Piano/piano-f-c5.wav'
    }, {
        note: 'C',
        octave: 6,
        file: 'samples/Grand Piano/piano-f-c6.wav'
    }, {
        note: 'D#',
        octave: 4,
        file: 'samples/Grand Piano/piano-f-d#4.wav'
    }, {
        note: 'D#',
        octave: 5,
        file: 'samples/Grand Piano/piano-f-d#5.wav'
    }, {
        note: 'D#',
        octave: 6,
        file: 'samples/Grand Piano/piano-f-d#6.wav'
    }, {
        note: 'F#',
        octave: 4,
        file: 'samples/Grand Piano/piano-f-f#4.wav'
    }, {
        note: 'F#',
        octave: 5,
        file: 'samples/Grand Piano/piano-f-f#5.wav'
    }, {
        note: 'F#',
        octave: 6,
        file: 'samples/Grand Piano/piano-f-f#6.wav'
    }];

    return samples;

}));