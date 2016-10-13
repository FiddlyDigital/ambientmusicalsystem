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

    var Samples = {};

    Samples['Violas'] = [{
        note: 'A',
        octave: 4,
        file: 'Samples/Violas/violas-sus-a4.wav'
    }, {
        note: 'A',
        octave: 5,
        file: 'Samples/Violas/violas-sus-a5.wav'
    }, {
        note: 'C',
        octave: 4,
        file: 'Samples/Violas/violas-sus-c4.wav'
    }, {
        note: 'C',
        octave: 5,
        file: 'Samples/Violas/violas-sus-c5.wav'
    }, {
        note: 'C',
        octave: 6,
        file: 'Samples/Violas/violas-sus-c6.wav'
    }, {
        note: 'D#',
        octave: 4,
        file: 'Samples/Violas/violas-sus-d#4.wav'
    }, {
        note: 'D#',
        octave: 5,
        file: 'Samples/Violas/violas-sus-d#5.wav'
    }, {
        note: 'F#',
        octave: 4,
        file: 'Samples/Violas/violas-sus-f#4.wav'
    }, {
        note: 'F#',
        octave: 5,
        file: 'Samples/Violas/violas-sus-f#5.wav'
    }];

    Samples['Violin'] = [{
        note: 'A#',
        octave: 3,
        file: 'Samples/Violin/violin-a#3.wav'
    }, {
        note: 'A#',
        octave: 4,
        file: 'Samples/Violin/violin-a#4.wav'
    }, {
        note: 'A#',
        octave: 5,
        file: 'Samples/Violin/violin-a#5.wav'
    }, {
        note: 'A#',
        octave: 6,
        file: 'Samples/Violin/violin-a#6.wav'
    }, {
        note: 'C#',
        octave: 4,
        file: 'Samples/Violin/violin-c#4.wav'
    }, {
        note: 'C#',
        octave: 5,
        file: 'Samples/Violin/violin-c#5.wav'
    }, {
        note: 'C#',
        octave: 6,
        file: 'Samples/Violin/violin-c#6.wav'
    }, {
        note: 'C#',
        octave: 7,
        file: 'Samples/Violin/violin-c#7.wav'
    }, {
        note: 'E',
        octave: 4,
        file: 'Samples/Violin/violin-e4.wav'
    }, {
        note: 'E',
        octave: 5,
        file: 'Samples/Violin/violin-e5.wav'
    }, {
        note: 'E',
        octave: 6,
        file: 'Samples/Violin/violin-e6.wav'
    }, {
        note: 'G',
        octave: 3,
        file: 'Samples/Violin/violin-g3.wav'
    }, {
        note: 'G',
        octave: 4,
        file: 'Samples/Violin/violin-g4.wav'
    }, {
        note: 'G',
        octave: 5,
        file: 'Samples/Violin/violin-g5.wav'
    }, {
        note: 'G',
        octave: 6,
        file: 'Samples/Violin/violin-g6.wav'
    }];

    Samples['Flutes'] = [{
        note: 'A',
        octave: 4,
        file: 'Samples/Flutes/flutes-stc-rr1-a4.wav'
    }, {
        note: 'A',
        octave: 5,
        file: 'Samples/Flutes/flutes-stc-rr1-a5.wav'
    }, {
        note: 'C',
        octave: 4,
        file: 'Samples/Flutes/flutes-stc-rr1-c4.wav'
    }, {
        note: 'C',
        octave: 5,
        file: 'Samples/Flutes/flutes-stc-rr1-c5.wav'
    }, {
        note: 'D#',
        octave: 4,
        file: 'Samples/Flutes/flutes-stc-rr1-d#4.wav'
    }, {
        note: 'D#',
        octave: 5,
        file: 'Samples/Flutes/flutes-stc-rr1-d#5.wav'
    }, {
        note: 'F#',
        octave: 4,
        file: 'Samples/Flutes/flutes-stc-rr1-f#4.wav'
    }, {
        note: 'F#',
        octave: 5,
        file: 'Samples/Flutes/flutes-stc-rr1-f#5.wav'
    }];

    Samples['Harp'] = [{
        note: 'A',
        octave: 4,
        file: 'Samples/Harp/harp-a4.wav'
    }, {
        note: 'A',
        octave: 5,
        file: 'Samples/Harp/harp-a5.wav'
    }, {
        note: 'A',
        octave: 6,
        file: 'Samples/Harp/harp-a6.wav'
    }, {
        note: 'C',
        octave: 4,
        file: 'Samples/Harp/harp-c4.wav'
    }, {
        note: 'C',
        octave: 5,
        file: 'Samples/Harp/harp-c5.wav'
    }, {
        note: 'C',
        octave: 6,
        file: 'Samples/Harp/harp-c6.wav'
    }, {
        note: 'D#',
        octave: 4,
        file: 'Samples/Harp/harp-d#4.wav'
    }, {
        note: 'D#',
        octave: 5,
        file: 'Samples/Harp/harp-d#5.wav'
    }, {
        note: 'D#',
        octave: 6,
        file: 'Samples/Harp/harp-d#6.wav'
    }, {
        note: 'F#',
        octave: 4,
        file: 'Samples/Harp/harp-f#4.wav'
    }, {
        note: 'F#',
        octave: 5,
        file: 'Samples/Harp/harp-f#5.wav'
    }, {
        note: 'F#',
        octave: 6,
        file: 'Samples/Harp/harp-f#6.wav'
    }];

    Samples['Grand Piano'] = [{
        note: 'A',
        octave: 4,
        file: 'Samples/Grand Piano/piano-f-a4.wav'
    }, {
        note: 'A',
        octave: 5,
        file: 'Samples/Grand Piano/piano-f-a5.wav'
    }, {
        note: 'A',
        octave: 6,
        file: 'Samples/Grand Piano/piano-f-a6.wav'
    }, {
        note: 'C',
        octave: 4,
        file: 'Samples/Grand Piano/piano-f-c4.wav'
    }, {
        note: 'C',
        octave: 5,
        file: 'Samples/Grand Piano/piano-f-c5.wav'
    }, {
        note: 'C',
        octave: 6,
        file: 'Samples/Grand Piano/piano-f-c6.wav'
    }, {
        note: 'D#',
        octave: 4,
        file: 'Samples/Grand Piano/piano-f-d#4.wav'
    }, {
        note: 'D#',
        octave: 5,
        file: 'Samples/Grand Piano/piano-f-d#5.wav'
    }, {
        note: 'D#',
        octave: 6,
        file: 'Samples/Grand Piano/piano-f-d#6.wav'
    }, {
        note: 'F#',
        octave: 4,
        file: 'Samples/Grand Piano/piano-f-f#4.wav'
    }, {
        note: 'F#',
        octave: 5,
        file: 'Samples/Grand Piano/piano-f-f#5.wav'
    }, {
        note: 'F#',
        octave: 6,
        file: 'Samples/Grand Piano/piano-f-f#6.wav'
    }];

    Samples['Oboe'] = [{
        note: 'A',
        octave: 3,
        file: 'Samples/Oboe/oboe-a#3.wav'
    }, {
        note: 'A',
        octave: 3,
        file: 'Samples/Oboe/oboe-a#4.wav'
    }, {
        note: 'A',
        octave: 3,
        file: 'Samples/Oboe/oboe-a#5.wav'
    }, {
        note: 'A',
        octave: 3,
        file: 'Samples/Oboe/oboe-a#6.wav'
    }, {
        note: 'C#',
        octave: 3,
        file: 'Samples/Oboe/oboe-c#4.wav'
    }, {
        note: 'C#',
        octave: 3,
        file: 'Samples/Oboe/oboe-c#5.wav'
    }, {
        note: 'C#',
        octave: 3,
        file: 'Samples/Oboe/oboe-c6.wav'
    }, {
        note: 'E',
        octave: 3,
        file: 'Samples/Oboe/oboe-e4.wav'
    }, {
        note: 'E',
        octave: 3,
        file: 'Samples/Oboe/oboe-e5.wav'
    }, {
        note: 'G',
        octave: 3,
        file: 'Samples/Oboe/oboe-g4.wav'
    }, {
        note: 'G',
        octave: 3,
        file: 'Samples/Oboe/oboe-g5.wav'
    }];

    Samples['Chimes'] = [{
        note: 'A',
        octave: 3,
        file: 'Samples/Percussion/chimes-a3.wav'
    }, {
        note: 'A',
        octave: 4,
        file: 'Samples/Percussion/chimes-a4.wav'
    }, {
        note: 'A',
        octave: 5,
        file: 'Samples/Percussion/chimes-a5.wav'
    }, {
        note: 'C',
        octave: 3,
        file: 'Samples/Percussion/chimes-c3.wav'
    }, {
        note: 'C',
        octave: 4,
        file: 'Samples/Percussion/chimes-c4.wav'
    }, {
        note: 'C',
        octave: 5,
        file: 'Samples/Percussion/chimes-c5.wav'
    }, {
        note: 'C',
        octave: 6,
        file: 'Samples/Percussion/chimes-c6.wav'
    }, {
        note: 'D#',
        octave: 3,
        file: 'Samples/Percussion/chimes-d#3.wav'
    }, {
        note: 'D#',
        octave: 4,
        file: 'Samples/Percussion/chimes-d#4.wav'
    }, {
        note: 'D#',
        octave: 5,
        file: 'Samples/Percussion/chimes-d#5.wav'
    }, {
        note: 'F#',
        octave: 3,
        file: 'Samples/Percussion/chimes-f#3.wav'
    }, {
        note: 'F#',
        octave: 4,
        file: 'Samples/Percussion/chimes-f#4.wav'
    }, {
        note: 'F#',
        octave: 5,
        file: 'Samples/Percussion/chimes-f#5.wav'
    }];

    Samples['GlockenSpiel'] = [{
        note: 'A',
        octave: 3,
        file: 'Samples/Percussion/glockenspiel-a3.wav'
    }, {
        note: 'A',
        octave: 4,
        file: 'Samples/Percussion/glockenspiel-a4.wav'
    }, {
        note: 'A',
        octave: 5,
        file: 'Samples/Percussion/glockenspiel-a5.wav'
    }, {
        note: 'C',
        octave: 3,
        file: 'Samples/Percussion/glockenspiel-c3.wav'
    }, {
        note: 'C',
        octave: 4,
        file: 'Samples/Percussion/glockenspiel-c4.wav'
    }, {
        note: 'C',
        octave: 5,
        file: 'Samples/Percussion/glockenspiel-c5.wav'
    }, {
        note: 'C',
        octave: 6,
        file: 'Samples/Percussion/glockenspiel-c6.wav'
    }, {
        note: 'D#',
        octave: 3,
        file: 'Samples/Percussion/glockenspiel-d#3.wav'
    }, {
        note: 'D#',
        octave: 4,
        file: 'Samples/Percussion/glockenspiel-d#4.wav'
    }, {
        note: 'D#',
        octave: 5,
        file: 'Samples/Percussion/glockenspiel-d#5.wav'
    }, {
        note: 'F#',
        octave: 3,
        file: 'Samples/Percussion/glockenspiel-f#3.wav'
    }, {
        note: 'F#',
        octave: 4,
        file: 'Samples/Percussion/glockenspiel-f#4.wav'
    }, {
        note: 'F#',
        octave: 5,
        file: 'Samples/Percussion/glockenspiel-f#5.wav'
    }];

    return Samples;

}));