/* global angular */
(function() {
    'use strict';

    angular.module('app').
        factory('MusicSystemSamples', SamplesIndex);

    function SamplesIndex() {
        var Samples = {};

        Samples['1st-violins-piz-rr1'] = [{
            file: '1st Violins/1st-violins-piz-rr1-a#3.wav',
            note: 'A#',
            octave: 3
        }, {
            file: '1st Violins/1st-violins-piz-rr1-a#4.wav',
            note: 'A#',
            octave: 4
        }, {
            file: '1st Violins/1st-violins-piz-rr1-a#5.wav',
            note: 'A#',
            octave: 5
        }, {
            file: '1st Violins/1st-violins-piz-rr1-a#6.wav',
            note: 'A#',
            octave: 6
        }, {
            file: '1st Violins/1st-violins-piz-rr1-c#4.wav',
            note: 'C#',
            octave: 4
        }, {
            file: '1st Violins/1st-violins-piz-rr1-c#5.wav',
            note: 'C#',
            octave: 5
        }, {
            file: '1st Violins/1st-violins-piz-rr1-c#6.wav',
            note: 'C#',
            octave: 6
        }, {
            file: '1st Violins/1st-violins-piz-rr1-e4.wav',
            note: 'E',
            octave: 4
        }, {
            file: '1st Violins/1st-violins-piz-rr1-e5.wav',
            note: 'E',
            octave: 5
        }, {
            file: '1st Violins/1st-violins-piz-rr1-e6.wav',
            note: 'E',
            octave: 6
        }, {
            file: '1st Violins/1st-violins-piz-rr1-g3.wav',
            note: 'G',
            octave: 3
        }, {
            file: '1st Violins/1st-violins-piz-rr1-g4.wav',
            note: 'G',
            octave: 4
        }, {
            file: '1st Violins/1st-violins-piz-rr1-g5.wav',
            note: 'G',
            octave: 5
        }, {
            file: '1st Violins/1st-violins-piz-rr1-g6.wav',
            note: 'G',
            octave: 6
        }];

        Samples['1st-violins-stc-rr1'] = [{
            file: '1st Violins/1st-violins-stc-rr1-a#3.wav',
            note: 'A#',
            octave: 3
        }, {
            file: '1st Violins/1st-violins-stc-rr1-a#4.wav',
            note: 'A#',
            octave: 4
        }, {
            file: '1st Violins/1st-violins-stc-rr1-a#5.wav',
            note: 'A#',
            octave: 5
        }, {
            file: '1st Violins/1st-violins-stc-rr1-a#6.wav',
            note: 'A#',
            octave: 6
        }, {
            file: '1st Violins/1st-violins-stc-rr1-c#4.wav',
            note: 'C#',
            octave: 4
        }, {
            file: '1st Violins/1st-violins-stc-rr1-c#5.wav',
            note: 'C#',
            octave: 5
        }, {
            file: '1st Violins/1st-violins-stc-rr1-c#6.wav',
            note: 'C#',
            octave: 6
        }, {
            file: '1st Violins/1st-violins-stc-rr1-e4.wav',
            note: 'E',
            octave: 4
        }, {
            file: '1st Violins/1st-violins-stc-rr1-e5.wav',
            note: 'E',
            octave: 5
        }, {
            file: '1st Violins/1st-violins-stc-rr1-e6.wav',
            note: 'E',
            octave: 6
        }, {
            file: '1st Violins/1st-violins-stc-rr1-g3.wav',
            note: 'G',
            octave: 3
        }, {
            file: '1st Violins/1st-violins-stc-rr1-g4.wav',
            note: 'G',
            octave: 4
        }, {
            file: '1st Violins/1st-violins-stc-rr1-g5.wav',
            note: 'G',
            octave: 5
        }, {
            file: '1st Violins/1st-violins-stc-rr1-g6.wav',
            note: 'G',
            octave: 6
        }];

        Samples['1st-violins-sus'] = [{
            file: '1st Violins/1st-violins-sus-a#3.wav',
            note: 'A#',
            octave: 3
        }, {
            file: '1st Violins/1st-violins-sus-a#4.wav',
            note: 'A#',
            octave: 4
        }, {
            file: '1st Violins/1st-violins-sus-a#5.wav',
            note: 'A#',
            octave: 5
        }, {
            file: '1st Violins/1st-violins-sus-a#6.wav',
            note: 'A#',
            octave: 6
        }, {
            file: '1st Violins/1st-violins-sus-c#4.wav',
            note: 'C#',
            octave: 4
        }, {
            file: '1st Violins/1st-violins-sus-c#5.wav',
            note: 'C#',
            octave: 5
        }, {
            file: '1st Violins/1st-violins-sus-c#6.wav',
            note: 'C#',
            octave: 6
        }, {
            file: '1st Violins/1st-violins-sus-e4.wav',
            note: 'E',
            octave: 4
        }, {
            file: '1st Violins/1st-violins-sus-e5.wav',
            note: 'E',
            octave: 5
        }, {
            file: '1st Violins/1st-violins-sus-e6.wav',
            note: 'E',
            octave: 6
        }, {
            file: '1st Violins/1st-violins-sus-g3.wav',
            note: 'G',
            octave: 3
        }, {
            file: '1st Violins/1st-violins-sus-g4.wav',
            note: 'G',
            octave: 4
        }, {
            file: '1st Violins/1st-violins-sus-g5.wav',
            note: 'G',
            octave: 5
        }, {
            file: '1st Violins/1st-violins-sus-g6.wav',
            note: 'G',
            octave: 6
        }];

        Samples['2nd-violins-piz-rr1'] = [{
            file: '2nd Violins/2nd-violins-piz-rr1-a#3.wav',
            note: 'A#',
            octave: 3
        }, {
            file: '2nd Violins/2nd-violins-piz-rr1-a#4.wav',
            note: 'A#',
            octave: 4
        }, {
            file: '2nd Violins/2nd-violins-piz-rr1-a#5.wav',
            note: 'A#',
            octave: 5
        }, {
            file: '2nd Violins/2nd-violins-piz-rr1-a#6.wav',
            note: 'A#',
            octave: 6
        }, {
            file: '2nd Violins/2nd-violins-piz-rr1-c#4.wav',
            note: 'C#',
            octave: 4
        }, {
            file: '2nd Violins/2nd-violins-piz-rr1-c#5.wav',
            note: 'C#',
            octave: 5
        }, {
            file: '2nd Violins/2nd-violins-piz-rr1-c#6.wav',
            note: 'C#',
            octave: 6
        }, {
            file: '2nd Violins/2nd-violins-piz-rr1-e4.wav',
            note: 'E',
            octave: 4
        }, {
            file: '2nd Violins/2nd-violins-piz-rr1-e5.wav',
            note: 'E',
            octave: 5
        }, {
            file: '2nd Violins/2nd-violins-piz-rr1-e6.wav',
            note: 'E',
            octave: 6
        }, {
            file: '2nd Violins/2nd-violins-piz-rr1-g3.wav',
            note: 'G',
            octave: 3
        }, {
            file: '2nd Violins/2nd-violins-piz-rr1-g4.wav',
            note: 'G',
            octave: 4
        }, {
            file: '2nd Violins/2nd-violins-piz-rr1-g5.wav',
            note: 'G',
            octave: 5
        }, {
            file: '2nd Violins/2nd-violins-piz-rr1-g6.wav',
            note: 'G',
            octave: 6
        }];
        
        Samples['2nd-violins-stc-rr1'] = [{
            file: '2nd Violins/2nd-violins-stc-rr1-a#3.wav',
            note: 'A#',
            octave: 3
        }, {
            file: '2nd Violins/2nd-violins-stc-rr1-a#4.wav',
            note: 'A#',
            octave: 4
        }, {
            file: '2nd Violins/2nd-violins-stc-rr1-a#5.wav',
            note: 'A#',
            octave: 5
        }, {
            file: '2nd Violins/2nd-violins-stc-rr1-a#6.wav',
            note: 'A#',
            octave: 6
        }, {
            file: '2nd Violins/2nd-violins-stc-rr1-c#4.wav',
            note: 'C#',
            octave: 4
        }, {
            file: '2nd Violins/2nd-violins-stc-rr1-c#5.wav',
            note: 'C#',
            octave: 5
        }, {
            file: '2nd Violins/2nd-violins-stc-rr1-c#6.wav',
            note: 'C#',
            octave: 6
        }, {
            file: '2nd Violins/2nd-violins-stc-rr1-e4.wav',
            note: 'E',
            octave: 4
        }, {
            file: '2nd Violins/2nd-violins-stc-rr1-e5.wav',
            note: 'E',
            octave: 5
        }, {
            file: '2nd Violins/2nd-violins-stc-rr1-e6.wav',
            note: 'E',
            octave: 6
        }, {
            file: '2nd Violins/2nd-violins-stc-rr1-g3.wav',
            note: 'G',
            octave: 3
        }, {
            file: '2nd Violins/2nd-violins-stc-rr1-g4.wav',
            note: 'G',
            octave: 4
        }, {
            file: '2nd Violins/2nd-violins-stc-rr1-g5.wav',
            note: 'G',
            octave: 5
        }, {
            file: '2nd Violins/2nd-violins-stc-rr1-g6.wav',
            note: 'G',
            octave: 6
        }];

        Samples['2nd-violins-sus'] = [{
            file: '2nd Violins/2nd-violins-sus-a#3.wav',
            note: 'A#',
            octave: 3
        }, {
            file: '2nd Violins/2nd-violins-sus-a#4.wav',
            note: 'A#',
            octave: 4
        }, {
            file: '2nd Violins/2nd-violins-sus-a#5.wav',
            note: 'A#',
            octave: 5
        }, {
            file: '2nd Violins/2nd-violins-sus-a#6.wav',
            note: 'A#',
            octave: 6
        }, {
            file: '2nd Violins/2nd-violins-sus-c#4.wav',
            note: 'C#',
            octave: 4
        }, {
            file: '2nd Violins/2nd-violins-sus-c#5.wav',
            note: 'C#',
            octave: 5
        }, {
            file: '2nd Violins/2nd-violins-sus-c#6.wav',
            note: 'C#',
            octave: 6
        }, {
            file: '2nd Violins/2nd-violins-sus-e4.wav',
            note: 'E',
            octave: 4
        }, {
            file: '2nd Violins/2nd-violins-sus-e5.wav',
            note: 'E',
            octave: 5
        }, {
            file: '2nd Violins/2nd-violins-sus-e6.wav',
            note: 'E',
            octave: 6
        }, {
            file: '2nd Violins/2nd-violins-sus-g3.wav',
            note: 'G',
            octave: 3
        }, {
            file: '2nd Violins/2nd-violins-sus-g4.wav',
            note: 'G',
            octave: 4
        }, {
            file: '2nd Violins/2nd-violins-sus-g5.wav',
            note: 'G',
            octave: 5
        }, {
            file: '2nd Violins/2nd-violins-sus-g6.wav',
            note: 'G',
            octave: 6
        }];

        Samples['alto_flute'] = [{
            file: 'Alto Flute/alto_flute-a#3.wav',
            note: 'A#',
            octave: 3
        }, {
            file: 'Alto Flute/alto_flute-a#4.wav',
            note: 'A#',
            octave: 4
        }, {
            file: 'Alto Flute/alto_flute-a#5.wav',
            note: 'A#',
            octave: 5
        }, {
            file: 'Alto Flute/alto_flute-c#4.wav',
            note: 'C#',
            octave: 4
        }, {
            file: 'Alto Flute/alto_flute-c#5.wav',
            note: 'C#',
            octave: 5
        }, {
            file: 'Alto Flute/alto_flute-c#6.wav',
            note: 'C#',
            octave: 6
        }, {
            file: 'Alto Flute/alto_flute-e4.wav',
            note: 'E',
            octave: 4
        }, {
            file: 'Alto Flute/alto_flute-e5.wav',
            note: 'E',
            octave: 5
        }, {
            file: 'Alto Flute/alto_flute-e6.wav',
            note: 'E',
            octave: 6
        }, {
            file: 'Alto Flute/alto_flute-g3.wav',
            note: 'G',
            octave: 3
        }, {
            file: 'Alto Flute/alto_flute-g4.wav',
            note: 'G',
            octave: 4
        }, {
            file: 'Alto Flute/alto_flute-g5.wav',
            note: 'G',
            octave: 5
        }, {
            file: 'Alto Flute/alto_flute-g6.wav',
            note: 'G',
            octave: 6
        }];

        Samples['bass_clarinet'] = [{
            file: 'Bass Clarinet/bass_clarinet-b2.wav',
            note: 'B',
            octave: 2
        }, {
            file: 'Bass Clarinet/bass_clarinet-b3.wav',
            note: 'B',
            octave: 3
        }, {
            file: 'Bass Clarinet/bass_clarinet-b4.wav',
            note: 'B',
            octave: 4
        }, {
            file: 'Bass Clarinet/bass_clarinet-d2.wav',
            note: 'D',
            octave: 2
        }, {
            file: 'Bass Clarinet/bass_clarinet-d3.wav',
            note: 'D',
            octave: 3
        }, {
            file: 'Bass Clarinet/bass_clarinet-d4.wav',
            note: 'D',
            octave: 4
        }, {
            file: 'Bass Clarinet/bass_clarinet-d5.wav',
            note: 'D',
            octave: 5
        }, {
            file: 'Bass Clarinet/bass_clarinet-f2.wav',
            note: 'F',
            octave: 2
        }, {
            file: 'Bass Clarinet/bass_clarinet-f3.wav',
            note: 'F',
            octave: 3
        }, {
            file: 'Bass Clarinet/bass_clarinet-f4.wav',
            note: 'F',
            octave: 4
        }, {
            file: 'Bass Clarinet/bass_clarinet-g#2.wav',
            note: 'G#',
            octave: 2
        }, {
            file: 'Bass Clarinet/bass_clarinet-g#3.wav',
            note: 'G#',
            octave: 3
        }, {
            file: 'Bass Clarinet/bass_clarinet-g#4.wav',
            note: 'G#',
            octave: 4
        }];

        Samples['bass_trombone'] = [{
            file: 'Bass Trombone/bass_trombone-a#1.wav',
            note: 'A#',
            octave: 1
        }, {
            file: 'Bass Trombone/bass_trombone-a#2.wav',
            note: 'A#',
            octave: 2
        }, {
            file: 'Bass Trombone/bass_trombone-a#3.wav',
            note: 'A#',
            octave: 3
        }, {
            file: 'Bass Trombone/bass_trombone-c#2.wav',
            note: 'C#',
            octave: 2
        }, {
            file: 'Bass Trombone/bass_trombone-c#3.wav',
            note: 'C#',
            octave: 3
        }, {
            file: 'Bass Trombone/bass_trombone-c#4.wav',
            note: 'C#',
            octave: 4
        }, {
            file: 'Bass Trombone/bass_trombone-e1.wav',
            note: 'E',
            octave: 1
        }, {
            file: 'Bass Trombone/bass_trombone-e2.wav',
            note: 'E',
            octave: 2
        }, {
            file: 'Bass Trombone/bass_trombone-e3.wav',
            note: 'E',
            octave: 3
        }, {
            file: 'Bass Trombone/bass_trombone-e4.wav',
            note: 'E',
            octave: 4
        }, {
            file: 'Bass Trombone/bass_trombone-g1.wav',
            note: 'G',
            octave: 1
        }, {
            file: 'Bass Trombone/bass_trombone-g2.wav',
            note: 'G',
            octave: 2
        }, {
            file: 'Bass Trombone/bass_trombone-g3.wav',
            note: 'G',
            octave: 3
        }, {
            file: 'Bass Trombone/bass_trombone-g4.wav',
            note: 'G',
            octave: 4
        }];

        Samples['basses-piz-rr1'] = [{
            file: 'Basses/basses-piz-rr1-a1.wav',
            note: 'A',
            octave: 1
        }, {
            file: 'Basses/basses-piz-rr1-a2.wav',
            note: 'A',
            octave: 2
        }, {
            file: 'Basses/basses-piz-rr1-a3.wav',
            note: 'A',
            octave: 3
        }, {
            file: 'Basses/basses-piz-rr1-c1.wav',
            note: 'C',
            octave: 1
        }, {
            file: 'Basses/basses-piz-rr1-c2.wav',
            note: 'C',
            octave: 2
        }, {
            file: 'Basses/basses-piz-rr1-c3.wav',
            note: 'C',
            octave: 3
        }, {
            file: 'Basses/basses-piz-rr1-c4.wav',
            note: 'C',
            octave: 4
        }, {
            file: 'Basses/basses-piz-rr1-d#1.wav',
            note: 'D#',
            octave: 1
        }, {
            file: 'Basses/basses-piz-rr1-d#2.wav',
            note: 'D#',
            octave: 2
        }, {
            file: 'Basses/basses-piz-rr1-d#3.wav',
            note: 'D#',
            octave: 3
        }, {
            file: 'Basses/basses-piz-rr1-f#1.wav',
            note: 'F#',
            octave: 1
        }, {
            file: 'Basses/basses-piz-rr1-f#2.wav',
            note: 'F#',
            octave: 2
        }];

        Samples['basses-stc-rr1'] = [{
            file: 'Basses/basses-stc-rr1-a1.wav',
            note: 'A',
            octave: 1
        }, {
            file: 'Basses/basses-stc-rr1-a2.wav',
            note: 'A',
            octave: 2
        }, {
            file: 'Basses/basses-stc-rr1-a3.wav',
            note: 'A',
            octave: 3
        }, {
            file: 'Basses/basses-stc-rr1-c1.wav',
            note: 'C',
            octave: 1
        }, {
            file: 'Basses/basses-stc-rr1-c2.wav',
            note: 'C',
            octave: 2
        }, {
            file: 'Basses/basses-stc-rr1-c3.wav',
            note: 'C',
            octave: 3
        }, {
            file: 'Basses/basses-stc-rr1-c4.wav',
            note: 'C',
            octave: 4
        }, {
            file: 'Basses/basses-stc-rr1-d#1.wav',
            note: 'D#',
            octave: 1
        }, {
            file: 'Basses/basses-stc-rr1-d#2.wav',
            note: 'D#',
            octave: 2
        }, {
            file: 'Basses/basses-stc-rr1-d#3.wav',
            note: 'D#',
            octave: 3
        }, {
            file: 'Basses/basses-stc-rr1-f#1.wav',
            note: 'F#',
            octave: 1
        }, {
            file: 'Basses/basses-stc-rr1-f#2.wav',
            note: 'F#',
            octave: 2
        }, {
            file: 'Basses/basses-stc-rr1-f#3.wav',
            note: 'F#',
            octave: 3
        }];

        Samples['basses-sus'] = [{
            file: 'Basses/basses-sus-a1.wav',
            note: 'A',
            octave: 1
        }, {
            file: 'Basses/basses-sus-a2.wav',
            note: 'A',
            octave: 2
        }, {
            file: 'Basses/basses-sus-a3.wav',
            note: 'A',
            octave: 3
        }, {
            file: 'Basses/basses-sus-c1.wav',
            note: 'C',
            octave: 1
        }, {
            file: 'Basses/basses-sus-c2.wav',
            note: 'C',
            octave: 2
        }, {
            file: 'Basses/basses-sus-c3.wav',
            note: 'C',
            octave: 3
        }, {
            file: 'Basses/basses-sus-c4.wav',
            note: 'C',
            octave: 4
        }, {
            file: 'Basses/basses-sus-d#1.wav',
            note: 'D#',
            octave: 1
        }, {
            file: 'Basses/basses-sus-d#2.wav',
            note: 'D#',
            octave: 2
        }, {
            file: 'Basses/basses-sus-d#3.wav',
            note: 'D#',
            octave: 3
        }, {
            file: 'Basses/basses-sus-f#1.wav',
            note: 'F#',
            octave: 1
        }, {
            file: 'Basses/basses-sus-f#2.wav',
            note: 'F#',
            octave: 2
        }, {
            file: 'Basses/basses-sus-f#3.wav',
            note: 'F#',
            octave: 3
        }];

        Samples['Bassoon'] = [{
            file: 'Bassoon/bassoon-a#1.wav',
            note: 'A#',
            octave: 1
        }, {
            file: 'Bassoon/bassoon-a#2.wav',
            note: 'A#',
            octave: 2
        }, {
            file: 'Bassoon/bassoon-a#3.wav',
            note: 'A#',
            octave: 3
        }, {
            file: 'Bassoon/bassoon-a#4.wav',
            note: 'A#',
            octave: 4
        }, {
            file: 'Bassoon/bassoon-c#2.wav',
            note: 'C#',
            octave: 2
        }, {
            file: 'Bassoon/bassoon-c#3.wav',
            note: 'C#',
            octave: 3
        }, {
            file: 'Bassoon/bassoon-c#4.wav',
            note: 'C#',
            octave: 4
        }, {
            file: 'Bassoon/bassoon-c#5.wav',
            note: 'C#',
            octave: 5
        }, {
            file: 'Bassoon/bassoon-e2.wav',
            note: 'E',
            octave: 2
        }, {
            file: 'Bassoon/bassoon-e3.wav',
            note: 'E',
            octave: 3
        }, {
            file: 'Bassoon/bassoon-e4.wav',
            note: 'E',
            octave: 4
        }, {
            file: 'Bassoon/bassoon-g2.wav',
            note: 'G',
            octave: 2
        }, {
            file: 'Bassoon/bassoon-g3.wav',
            note: 'G',
            octave: 3
        }, {
            file: 'Bassoon/bassoon-g4.wav',
            note: 'G',
            octave: 4
        }];

        Samples['bassoons-sus'] = [{
            file: 'Bassoons/bassoons-sus-a#1.wav',
            note: 'A#',
            octave: 1
        }, {
            file: 'Bassoons/bassoons-sus-a#2.wav',
            note: 'A#',
            octave: 2
        }, {
            file: 'Bassoons/bassoons-sus-a#3.wav',
            note: 'A#',
            octave: 3
        }, {
            file: 'Bassoons/bassoons-sus-a#4.wav',
            note: 'A#',
            octave: 4
        }, {
            file: 'Bassoons/bassoons-sus-c#2.wav',
            note: 'C#',
            octave: 2
        }, {
            file: 'Bassoons/bassoons-sus-c#3.wav',
            note: 'C#',
            octave: 3
        }, {
            file: 'Bassoons/bassoons-sus-c#4.wav',
            note: 'C#',
            octave: 4
        }, {
            file: 'Bassoons/bassoons-sus-c#5.wav',
            note: 'C#',
            octave: 5
        }, {
            file: 'Bassoons/bassoons-sus-e2.wav',
            note: 'E',
            octave: 2
        }, {
            file: 'Bassoons/bassoons-sus-e3.wav',
            note: 'E',
            octave: 3
        }, {
            file: 'Bassoons/bassoons-sus-e4.wav',
            note: 'E',
            octave: 4
        }, {
            file: 'Bassoons/bassoons-sus-e5.wav',
            note: 'E',
            octave: 5
        }, {
            file: 'Bassoons/bassoons-sus-g2.wav',
            note: 'G',
            octave: 2
        }, {
            file: 'Bassoons/bassoons-sus-g3.wav',
            note: 'G',
            octave: 3
        }, {
            file: 'Bassoons/bassoons-sus-g4.wav',
            note: 'G',
            octave: 4
        }];

        Samples['celli-piz-rr1'] = [{
            file: 'Celli/celli-piz-rr1-a2.wav',
            note: 'A',
            octave: 2
        }, {
            file: 'Celli/celli-piz-rr1-a3.wav',
            note: 'A',
            octave: 3
        }, {
            file: 'Celli/celli-piz-rr1-a4.wav',
            note: 'A',
            octave: 4
        }, {
            file: 'Celli/celli-piz-rr1-c2.wav',
            note: 'C',
            octave: 2
        }, {
            file: 'Celli/celli-piz-rr1-c3.wav',
            note: 'C',
            octave: 3
        }, {
            file: 'Celli/celli-piz-rr1-c4.wav',
            note: 'C',
            octave: 4
        }, {
            file: 'Celli/celli-piz-rr1-c5.wav',
            note: 'C',
            octave: 5
        }, {
            file: 'Celli/celli-piz-rr1-d#2.wav',
            note: 'D#',
            octave: 2
        }, {
            file: 'Celli/celli-piz-rr1-d#3.wav',
            note: 'D#',
            octave: 3
        }, {
            file: 'Celli/celli-piz-rr1-d#4.wav',
            note: 'D#',
            octave: 4
        }, {
            file: 'Celli/celli-piz-rr1-f#2.wav',
            note: 'F#',
            octave: 2
        }, {
            file: 'Celli/celli-piz-rr1-f#3.wav',
            note: 'F#',
            octave: 3
        }, {
            file: 'Celli/celli-piz-rr1-f#4.wav',
            note: 'F#',
            octave: 4
        }];
        
        Samples['celli-stc-rr1'] = [{
            file: 'Celli/celli-stc-rr1-a2.wav',
            note: 'A',
            octave: 2
        }, {
            file: 'Celli/celli-stc-rr1-a3.wav',
            note: 'A',
            octave: 3
        }, {
            file: 'Celli/celli-stc-rr1-a4.wav',
            note: 'A',
            octave: 4
        }, {
            file: 'Celli/celli-stc-rr1-c2.wav',
            note: 'C',
            octave: 2
        }, {
            file: 'Celli/celli-stc-rr1-c3.wav',
            note: 'C',
            octave: 3
        }, {
            file: 'Celli/celli-stc-rr1-c4.wav',
            note: 'C',
            octave: 4
        }, {
            file: 'Celli/celli-stc-rr1-c5.wav',
            note: 'C',
            octave: 5
        }, {
            file: 'Celli/celli-stc-rr1-d#2.wav',
            note: 'D#',
            octave: 2
        }, {
            file: 'Celli/celli-stc-rr1-d#3.wav',
            note: 'D#',
            octave: 3
        }, {
            file: 'Celli/celli-stc-rr1-d#4.wav',
            note: 'D#',
            octave: 4
        }, {
            file: 'Celli/celli-stc-rr1-f#2.wav',
            note: 'F#',
            octave: 2
        }, {
            file: 'Celli/celli-stc-rr1-f#3.wav',
            note: 'F#',
            octave: 3
        }, {
            file: 'Celli/celli-stc-rr1-f#4.wav',
            note: 'F#',
            octave: 4
        }];

        Samples['celli-sus'] = [{
            file: 'Celli/celli-sus-a2.wav',
            note: 'A',
            octave: 2
        }, {
            file: 'Celli/celli-sus-a3.wav',
            note: 'A',
            octave: 3
        }, {
            file: 'Celli/celli-sus-a4.wav',
            note: 'A',
            octave: 4
        }, {
            file: 'Celli/celli-sus-c2.wav',
            note: 'C',
            octave: 2
        }, {
            file: 'Celli/celli-sus-c3.wav',
            note: 'C',
            octave: 3
        }, {
            file: 'Celli/celli-sus-c4.wav',
            note: 'C',
            octave: 4
        }, {
            file: 'Celli/celli-sus-c5.wav',
            note: 'C',
            octave: 5
        }, {
            file: 'Celli/celli-sus-d#2.wav',
            note: 'D#',
            octave: 2
        }, {
            file: 'Celli/celli-sus-d#3.wav',
            note: 'D#',
            octave: 3
        }, {
            file: 'Celli/celli-sus-d#4.wav',
            note: 'D#',
            octave: 4
        }, {
            file: 'Celli/celli-sus-f#2.wav',
            note: 'F#',
            octave: 2
        }, {
            file: 'Celli/celli-sus-f#3.wav',
            note: 'F#',
            octave: 3
        }, {
            file: 'Celli/celli-sus-f#4.wav',
            note: 'F#',
            octave: 4
        }];

        Samples['cello'] = [{
            file: 'Cello/cello-a2.wav',
            note: 'A',
            octave: 2
        }, {
            file: 'Cello/cello-a3.wav',
            note: 'A',
            octave: 3
        }, {
            file: 'Cello/cello-a4.wav',
            note: 'A',
            octave: 4
        }, {
            file: 'Cello/cello-a5.wav',
            note: 'A',
            octave: 5
        }, {
            file: 'Cello/cello-c2.wav',
            note: 'C',
            octave: 2
        }, {
            file: 'Cello/cello-c3.wav',
            note: 'C',
            octave: 3
        }, {
            file: 'Cello/cello-c4.wav',
            note: 'C',
            octave: 4
        }, {
            file: 'Cello/cello-c5.wav',
            note: 'C',
            octave: 5
        }, {
            file: 'Cello/cello-d#2.wav',
            note: 'D#',
            octave: 2
        }, {
            file: 'Cello/cello-d#3.wav',
            note: 'D#',
            octave: 3
        }, {
            file: 'Cello/cello-d#4.wav',
            note: 'D#',
            octave: 4
        }, {
            file: 'Cello/cello-d#5.wav',
            note: 'D#',
            octave: 5
        }, {
            file: 'Cello/cello-f#2.wav',
            note: 'F#',
            octave: 2
        }, {
            file: 'Cello/cello-f#3.wav',
            note: 'F#',
            octave: 3
        }, {
            file: 'Cello/cello-f#4.wav',
            note: 'F#',
            octave: 4
        }, {
            file: 'Cello/cello-f#5.wav',
            note: 'F#',
            octave: 5
        }];

        Samples['clarinet'] = [{
            file: 'Clarinet/clarinet-b3.wav',
            note: 'B',
            octave: 3
        }, {
            file: 'Clarinet/clarinet-b4.wav',
            note: 'B',
            octave: 4
        }, {
            file: 'Clarinet/clarinet-b5.wav',
            note: 'B',
            octave: 5
        }, {
            file: 'Clarinet/clarinet-d3.wav',
            note: 'D',
            octave: 3
        }, {
            file: 'Clarinet/clarinet-d4.wav',
            note: 'D',
            octave: 4
        }, {
            file: 'Clarinet/clarinet-d5.wav',
            note: 'D',
            octave: 5
        }, {
            file: 'Clarinet/clarinet-d6.wav',
            note: 'D',
            octave: 6
        }, {
            file: 'Clarinet/clarinet-f3.wav',
            note: 'F',
            octave: 3
        }, {
            file: 'Clarinet/clarinet-f4.wav',
            note: 'F',
            octave: 4
        }, {
            file: 'Clarinet/clarinet-f5.wav',
            note: 'F',
            octave: 5
        }, {
            file: 'Clarinet/clarinet-g#3.wav',
            note: 'G#',
            octave: 3
        }, {
            file: 'Clarinet/clarinet-g#4.wav',
            note: 'G#',
            octave: 4
        }, {
            file: 'Clarinet/clarinet-g#5.wav',
            note: 'G#',
            octave: 5
        }];

        Samples['clarinets-sus'] = [{
            file: 'Clarinets/clarinets-sus-b3.wav',
            note: 'B',
            octave: 3
        }, {
            file: 'Clarinets/clarinets-sus-b4.wav',
            note: 'B',
            octave: 4
        }, {
            file: 'Clarinets/clarinets-sus-b5.wav',
            note: 'B',
            octave: 5
        }, {
            file: 'Clarinets/clarinets-sus-d3.wav',
            note: 'D',
            octave: 3
        }, {
            file: 'Clarinets/clarinets-sus-d4.wav',
            note: 'D',
            octave: 4
        }, {
            file: 'Clarinets/clarinets-sus-d5.wav',
            note: 'D',
            octave: 5
        }, {
            file: 'Clarinets/clarinets-sus-d6.wav',
            note: 'D',
            octave: 6
        }, {
            file: 'Clarinets/clarinets-sus-f3.wav',
            note: 'F',
            octave: 3
        }, {
            file: 'Clarinets/clarinets-sus-f4.wav',
            note: 'F',
            octave: 4
        }, {
            file: 'Clarinets/clarinets-sus-f5.wav',
            note: 'F',
            octave: 5
        }, {
            file: 'Clarinets/clarinets-sus-g#3.wav',
            note: 'G#',
            octave: 3
        }, {
            file: 'Clarinets/clarinets-sus-g#4.wav',
            note: 'G#',
            octave: 4
        }, {
            file: 'Clarinets/clarinets-sus-g#5.wav',
            note: 'G#',
            octave: 5
        }];

        Samples['contrabassoon'] = [{
            file: 'Contrabassoon/contrabassoon-a#0.wav',
            note: 'A#',
            octave: 0
        }, {
            file: 'Contrabassoon/contrabassoon-a#1.wav',
            note: 'A#',
            octave: 1
        }, {
            file: 'Contrabassoon/contrabassoon-a#2.wav',
            note: 'A#',
            octave: 2
        }, {
            file: 'Contrabassoon/contrabassoon-a#3.wav',
            note: 'A#',
            octave: 3
        }, {
            file: 'Contrabassoon/contrabassoon-c#1.wav',
            note: 'C#',
            octave: 1
        }, {
            file: 'Contrabassoon/contrabassoon-c#2.wav',
            note: 'C#',
            octave: 2
        }, {
            file: 'Contrabassoon/contrabassoon-c#3.wav',
            note: 'C#',
            octave: 3
        }, {
            file: 'Contrabassoon/contrabassoon-e1.wav',
            note: 'E',
            octave: 1
        }, {
            file: 'Contrabassoon/contrabassoon-e2.wav',
            note: 'E',
            octave: 2
        }, {
            file: 'Contrabassoon/contrabassoon-e3.wav',
            note: 'E',
            octave: 3
        }, {
            file: 'Contrabassoon/contrabassoon-g1.wav',
            note: 'G',
            octave: 1
        }, {
            file: 'Contrabassoon/contrabassoon-g2.wav',
            note: 'G',
            octave: 2
        }, {
            file: 'Contrabassoon/contrabassoon-g3.wav',
            note: 'G',
            octave: 3
        }];

        Samples['cor_anglais'] = [{
            file: 'Cor Anglais/cor_anglais-b3.wav',
            note: 'B',
            octave: 3
        }, {
            file: 'Cor Anglais/cor_anglais-b4.wav',
            note: 'B',
            octave: 4
        }, {
            file: 'Cor Anglais/cor_anglais-d4.wav',
            note: 'D',
            octave: 4
        }, {
            file: 'Cor Anglais/cor_anglais-d5.wav',
            note: 'D',
            octave: 5
        }, {
            file: 'Cor Anglais/cor_anglais-f3.wav',
            note: 'F',
            octave: 3
        }, {
            file: 'Cor Anglais/cor_anglais-f4.wav',
            note: 'F',
            octave: 4
        }, {
            file: 'Cor Anglais/cor_anglais-f5.wav',
            note: 'F',
            octave: 5
        }, {
            file: 'Cor Anglais/cor_anglais-g#3.wav',
            note: 'G#',
            octave: 3
        }, {
            file: 'Cor Anglais/cor_anglais-g#4.wav',
            note: 'G#',
            octave: 4
        }];

        Samples['flute'] = [{
            file: 'Flute/flute-a3.wav',
            note: 'A',
            octave: 3
        }, {
            file: 'Flute/flute-a4.wav',
            note: 'A',
            octave: 4
        }, {
            file: 'Flute/flute-a5.wav',
            note: 'A',
            octave: 5
        }, {
            file: 'Flute/flute-c3.wav',
            note: 'C',
            octave: 3
        }, {
            file: 'Flute/flute-c4.wav',
            note: 'C',
            octave: 4
        }, {
            file: 'Flute/flute-c5.wav',
            note: 'C',
            octave: 5
        }, {
            file: 'Flute/flute-c6.wav',
            note: 'C',
            octave: 6
        }, {
            file: 'Flute/flute-d#3.wav',
            note: 'D#',
            octave: 3
        }, {
            file: 'Flute/flute-d#4.wav',
            note: 'D#',
            octave: 4
        }, {
            file: 'Flute/flute-d#5.wav',
            note: 'D#',
            octave: 5
        }, {
            file: 'Flute/flute-f#3.wav',
            note: 'F#',
            octave: 3
        }, {
            file: 'Flute/flute-f#4.wav',
            note: 'F#',
            octave: 4
        }, {
            file: 'Flute/flute-f#5.wav',
            note: 'F#',
            octave: 5
        }];

        Samples['flutes-stc-rr1'] = [{
            file: 'Flutes/flutes-stc-rr1-a3.wav',
            note: 'A',
            octave: 3
        }, {
            file: 'Flutes/flutes-stc-rr1-a4.wav',
            note: 'A',
            octave: 4
        }, {
            file: 'Flutes/flutes-stc-rr1-a5.wav',
            note: 'A',
            octave: 5
        }, {
            file: 'Flutes/flutes-stc-rr1-c3.wav',
            note: 'C',
            octave: 3
        }, {
            file: 'Flutes/flutes-stc-rr1-c4.wav',
            note: 'C',
            octave: 4
        }, {
            file: 'Flutes/flutes-stc-rr1-c5.wav',
            note: 'C',
            octave: 5
        }, {
            file: 'Flutes/flutes-stc-rr1-d#3.wav',
            note: 'D#',
            octave: 3
        }, {
            file: 'Flutes/flutes-stc-rr1-d#4.wav',
            note: 'D#',
            octave: 4
        }, {
            file: 'Flutes/flutes-stc-rr1-d#5.wav',
            note: 'D#',
            octave: 5
        }, {
            file: 'Flutes/flutes-stc-rr1-f#3.wav',
            note: 'F#',
            octave: 3
        }, {
            file: 'Flutes/flutes-stc-rr1-f#4.wav',
            note: 'F#',
            octave: 4
        }, {
            file: 'Flutes/flutes-stc-rr1-f#5.wav',
            note: 'F#',
            octave: 5
        }];

        Samples['flutes-sus'] = [{
            file: 'Flutes/flutes-sus-a3.wav',
            note: 'A',
            octave: 3
        }, {
            file: 'Flutes/flutes-sus-a4.wav',
            note: 'A',
            octave: 4
        }, {
            file: 'Flutes/flutes-sus-a5.wav',
            note: 'A',
            octave: 5
        }, {
            file: 'Flutes/flutes-sus-c3.wav',
            note: 'C',
            octave: 3
        }, {
            file: 'Flutes/flutes-sus-c4.wav',
            note: 'C',
            octave: 4
        }, {
            file: 'Flutes/flutes-sus-c5.wav',
            note: 'C',
            octave: 5
        }, {
            file: 'Flutes/flutes-sus-d#3.wav',
            note: 'D#',
            octave: 3
        }, {
            file: 'Flutes/flutes-sus-d#4.wav',
            note: 'D#',
            octave: 4
        }, {
            file: 'Flutes/flutes-sus-d#5.wav',
            note: 'D#',
            octave: 5
        }, {
            file: 'Flutes/flutes-sus-f#3.wav',
            note: 'F#',
            octave: 3
        }, {
            file: 'Flutes/flutes-sus-f#4.wav',
            note: 'F#',
            octave: 4
        }, {
            file: 'Flutes/flutes-sus-f#5.wav',
            note: 'F#',
            octave: 5
        }];

        Samples['piano-f'] = [{
            file: 'Grand Piano/piano-f-a1.wav',
            note: 'A',
            octave: 1
        }, {
            file: 'Grand Piano/piano-f-a2.wav',
            note: 'A',
            octave: 2
        }, {
            file: 'Grand Piano/piano-f-a3.wav',
            note: 'A',
            octave: 3
        }, {
            file: 'Grand Piano/piano-f-a4.wav',
            note: 'A',
            octave: 4
        }, {
            file: 'Grand Piano/piano-f-a5.wav',
            note: 'A',
            octave: 5
        }, {
            file: 'Grand Piano/piano-f-a6.wav',
            note: 'A',
            octave: 6
        }, {
            file: 'Grand Piano/piano-f-a7.wav',
            note: 'A',
            octave: 7
        }, {
            file: 'Grand Piano/piano-f-c1.wav',
            note: 'C',
            octave: 1
        }, {
            file: 'Grand Piano/piano-f-c2.wav',
            note: 'C',
            octave: 2
        }, {
            file: 'Grand Piano/piano-f-c3.wav',
            note: 'C',
            octave: 3
        }, {
            file: 'Grand Piano/piano-f-c4.wav',
            note: 'C',
            octave: 4
        }, {
            file: 'Grand Piano/piano-f-c5.wav',
            note: 'C',
            octave: 5
        }, {
            file: 'Grand Piano/piano-f-c6.wav',
            note: 'C',
            octave: 6
        }, {
            file: 'Grand Piano/piano-f-c7.wav',
            note: 'C',
            octave: 7
        }, {
            file: 'Grand Piano/piano-f-c8.wav',
            note: 'C',
            octave: 8
        }, {
            file: 'Grand Piano/piano-f-d#1.wav',
            note: 'D#',
            octave: 1
        }, {
            file: 'Grand Piano/piano-f-d#2.wav',
            note: 'D#',
            octave: 2
        }, {
            file: 'Grand Piano/piano-f-d#3.wav',
            note: 'D#',
            octave: 3
        }, {
            file: 'Grand Piano/piano-f-d#4.wav',
            note: 'D#',
            octave: 4
        }, {
            file: 'Grand Piano/piano-f-d#5.wav',
            note: 'D#',
            octave: 5
        }, {
            file: 'Grand Piano/piano-f-d#6.wav',
            note: 'D#',
            octave: 6
        }, {
            file: 'Grand Piano/piano-f-d#7.wav',
            note: 'D#',
            octave: 7
        }, {
            file: 'Grand Piano/piano-f-f#1.wav',
            note: 'F#',
            octave: 1
        }, {
            file: 'Grand Piano/piano-f-f#2.wav',
            note: 'F#',
            octave: 2
        }, {
            file: 'Grand Piano/piano-f-f#3.wav',
            note: 'F#',
            octave: 3
        }, {
            file: 'Grand Piano/piano-f-f#4.wav',
            note: 'F#',
            octave: 4
        }, {
            file: 'Grand Piano/piano-f-f#5.wav',
            note: 'F#',
            octave: 5
        }, {
            file: 'Grand Piano/piano-f-f#6.wav',
            note: 'F#',
            octave: 6
        }, {
            file: 'Grand Piano/piano-f-f#7.wav',
            note: 'F#',
            octave: 7
        }];

        Samples['piano-p'] = [{
            file: 'Grand Piano/piano-p-a1.wav',
            note: 'A',
            octave: 1
        }, {
            file: 'Grand Piano/piano-p-a2.wav',
            note: 'A',
            octave: 2
        }, {
            file: 'Grand Piano/piano-p-a3.wav',
            note: 'A',
            octave: 3
        }, {
            file: 'Grand Piano/piano-p-a4.wav',
            note: 'A',
            octave: 4
        }, {
            file: 'Grand Piano/piano-p-a5.wav',
            note: 'A',
            octave: 5
        }, {
            file: 'Grand Piano/piano-p-a6.wav',
            note: 'A',
            octave: 6
        }, {
            file: 'Grand Piano/piano-p-a7.wav',
            note: 'A',
            octave: 7
        }, {
            file: 'Grand Piano/piano-p-c1.wav',
            note: 'C',
            octave: 1
        }, {
            file: 'Grand Piano/piano-p-c2.wav',
            note: 'C',
            octave: 2
        }, {
            file: 'Grand Piano/piano-p-c3.wav',
            note: 'C',
            octave: 3
        }, {
            file: 'Grand Piano/piano-p-c4.wav',
            note: 'C',
            octave: 4
        }, {
            file: 'Grand Piano/piano-p-c5.wav',
            note: 'C',
            octave: 5
        }, {
            file: 'Grand Piano/piano-p-c6.wav',
            note: 'C',
            octave: 6
        }, {
            file: 'Grand Piano/piano-p-c7.wav',
            note: 'C',
            octave: 7
        }, {
            file: 'Grand Piano/piano-p-c8.wav',
            note: 'C',
            octave: 8
        }, {
            file: 'Grand Piano/piano-p-d#1.wav',
            note: 'D#',
            octave: 1
        }, {
            file: 'Grand Piano/piano-p-d#2.wav',
            note: 'D#',
            octave: 2
        }, {
            file: 'Grand Piano/piano-p-d#3.wav',
            note: 'D#',
            octave: 3
        }, {
            file: 'Grand Piano/piano-p-d#4.wav',
            note: 'D#',
            octave: 4
        }, {
            file: 'Grand Piano/piano-p-d#5.wav',
            note: 'D#',
            octave: 5
        }, {
            file: 'Grand Piano/piano-p-d#6.wav',
            note: 'D#',
            octave: 6
        }, {
            file: 'Grand Piano/piano-p-d#7.wav',
            note: 'D#',
            octave: 7
        }, {
            file: 'Grand Piano/piano-p-f#1.wav',
            note: 'F#',
            octave: 1
        }, {
            file: 'Grand Piano/piano-p-f#2.wav',
            note: 'F#',
            octave: 2
        }, {
            file: 'Grand Piano/piano-p-f#3.wav',
            note: 'F#',
            octave: 3
        }, {
            file: 'Grand Piano/piano-p-f#4.wav',
            note: 'F#',
            octave: 4
        }, {
            file: 'Grand Piano/piano-p-f#5.wav',
            note: 'F#',
            octave: 5
        }, {
            file: 'Grand Piano/piano-p-f#6.wav',
            note: 'F#',
            octave: 6
        }, {
            file: 'Grand Piano/piano-p-f#7.wav',
            note: 'F#',
            octave: 7
        }];

        Samples['harp'] = [{
            file: 'Harp/harp-a2.wav',
            note: 'A',
            octave: 2
        }, {
            file: 'Harp/harp-a3.wav',
            note: 'A',
            octave: 3
        }, {
            file: 'Harp/harp-a4.wav',
            note: 'A',
            octave: 4
        }, {
            file: 'Harp/harp-a5.wav',
            note: 'A',
            octave: 5
        }, {
            file: 'Harp/harp-a6.wav',
            note: 'A',
            octave: 6
        }, {
            file: 'Harp/harp-c2.wav',
            note: 'C',
            octave: 2
        }, {
            file: 'Harp/harp-c3.wav',
            note: 'C',
            octave: 3
        }, {
            file: 'Harp/harp-c4.wav',
            note: 'C',
            octave: 4
        }, {
            file: 'Harp/harp-c5.wav',
            note: 'C',
            octave: 5
        }, {
            file: 'Harp/harp-c6.wav',
            note: 'C',
            octave: 6
        }, {
            file: 'Harp/harp-c7.wav',
            note: 'C',
            octave: 7
        }, {
            file: 'Harp/harp-d#2.wav',
            note: 'D#',
            octave: 2
        }, {
            file: 'Harp/harp-d#3.wav',
            note: 'D#',
            octave: 3
        }, {
            file: 'Harp/harp-d#4.wav',
            note: 'D#',
            octave: 4
        }, {
            file: 'Harp/harp-d#5.wav',
            note: 'D#',
            octave: 5
        }, {
            file: 'Harp/harp-d#6.wav',
            note: 'D#',
            octave: 6
        }, {
            file: 'Harp/harp-f#2.wav',
            note: 'F#',
            octave: 2
        }, {
            file: 'Harp/harp-f#3.wav',
            note: 'F#',
            octave: 3
        }, {
            file: 'Harp/harp-f#4.wav',
            note: 'F#',
            octave: 4
        }, {
            file: 'Harp/harp-f#5.wav',
            note: 'F#',
            octave: 5
        }, {
            file: 'Harp/harp-f#6.wav',
            note: 'F#',
            octave: 6
        }];

        Samples['horn'] = [{
            file: 'Horn/horn-a#2.wav',
            note: 'A#',
            octave: 2
        }, {
            file: 'Horn/horn-a#3.wav',
            note: 'A#',
            octave: 3
        }, {
            file: 'Horn/horn-a#4.wav',
            note: 'A#',
            octave: 4
        }, {
            file: 'Horn/horn-c#3.wav',
            note: 'C#',
            octave: 3
        }, {
            file: 'Horn/horn-c#4.wav',
            note: 'C#',
            octave: 4
        }, {
            file: 'Horn/horn-c#5.wav',
            note: 'C#',
            octave: 5
        }, {
            file: 'Horn/horn-e2.wav',
            note: 'E',
            octave: 2
        }, {
            file: 'Horn/horn-e3.wav',
            note: 'E',
            octave: 3
        }, {
            file: 'Horn/horn-e4.wav',
            note: 'E',
            octave: 4
        }, {
            file: 'Horn/horn-e5.wav',
            note: 'E',
            octave: 5
        }, {
            file: 'Horn/horn-g2.wav',
            note: 'G',
            octave: 2
        }, {
            file: 'Horn/horn-g3.wav',
            note: 'G',
            octave: 3
        }, {
            file: 'Horn/horn-g4.wav',
            note: 'G',
            octave: 4
        }];

        Samples['horns-stc-rr1'] = [{
            file: 'Horns/horns-stc-rr1-a#2.wav',
            note: 'A#',
            octave: 2
        }, {
            file: 'Horns/horns-stc-rr1-a#3.wav',
            note: 'A#',
            octave: 3
        }, {
            file: 'Horns/horns-stc-rr1-a#4.wav',
            note: 'A#',
            octave: 4
        }, {
            file: 'Horns/horns-stc-rr1-c#3.wav',
            note: 'C#',
            octave: 3
        }, {
            file: 'Horns/horns-stc-rr1-c#4.wav',
            note: 'C#',
            octave: 4
        }, {
            file: 'Horns/horns-stc-rr1-e2.wav',
            note: 'E',
            octave: 2
        }, {
            file: 'Horns/horns-stc-rr1-e3.wav',
            note: 'E',
            octave: 3
        }, {
            file: 'Horns/horns-stc-rr1-e4.wav',
            note: 'E',
            octave: 4
        }, {
            file: 'Horns/horns-stc-rr1-g2.wav',
            note: 'G',
            octave: 2
        }, {
            file: 'Horns/horns-stc-rr1-g3.wav',
            note: 'G',
            octave: 3
        }, {
            file: 'Horns/horns-stc-rr1-g4.wav',
            note: 'G',
            octave: 4
        }];

        Samples['horns-sus'] = [{
            file: 'Horns/horns-sus-a#2.wav',
            note: 'A#',
            octave: 2
        }, {
            file: 'Horns/horns-sus-a#3.wav',
            note: 'A#',
            octave: 3
        }, {
            file: 'Horns/horns-sus-a#4.wav',
            note: 'A#',
            octave: 4
        }, {
            file: 'Horns/horns-sus-c#3.wav',
            note: 'C#',
            octave: 3
        }, {
            file: 'Horns/horns-sus-c#4.wav',
            note: 'C#',
            octave: 4
        }, {
            file: 'Horns/horns-sus-e2.wav',
            note: 'E',
            octave: 2
        }, {
            file: 'Horns/horns-sus-e3.wav',
            note: 'E',
            octave: 3
        }, {
            file: 'Horns/horns-sus-e4.wav',
            note: 'E',
            octave: 4
        }, {
            file: 'Horns/horns-sus-g2.wav',
            note: 'G',
            octave: 2
        }, {
            file: 'Horns/horns-sus-g3.wav',
            note: 'G',
            octave: 3
        }, {
            file: 'Horns/horns-sus-g4.wav',
            note: 'G',
            octave: 4
        }];

        Samples['oboe'] = [{
            file: 'Oboe/oboe-a#3.wav',
            note: 'A#',
            octave: 3
        }, {
            file: 'Oboe/oboe-a#4.wav',
            note: 'A#',
            octave: 4
        }, {
            file: 'Oboe/oboe-a#5.wav',
            note: 'A#',
            octave: 5
        }, {
            file: 'Oboe/oboe-c#4.wav',
            note: 'C#',
            octave: 4
        }, {
            file: 'Oboe/oboe-c#5.wav',
            note: 'C#',
            octave: 5
        }, {
            file: 'Oboe/oboe-c6.wav',
            note: 'C',
            octave: 6
        }, {
            file: 'Oboe/oboe-e4.wav',
            note: 'E',
            octave: 4
        }, {
            file: 'Oboe/oboe-e5.wav',
            note: 'E',
            octave: 5
        }, {
            file: 'Oboe/oboe-g4.wav',
            note: 'G',
            octave: 4
        }, {
            file: 'Oboe/oboe-g5.wav',
            note: 'G',
            octave: 5
        }];

        Samples['oboes-sus'] = [{
            file: 'Oboes/oboes-sus-a#3.wav',
            note: 'A#',
            octave: 3
        }, {
            file: 'Oboes/oboes-sus-a#4.wav',
            note: 'A#',
            octave: 4
        }, {
            file: 'Oboes/oboes-sus-a#5.wav',
            note: 'A#',
            octave: 5
        }, {
            file: 'Oboes/oboes-sus-c#4.wav',
            note: 'C#',
            octave: 4
        }, {
            file: 'Oboes/oboes-sus-c#5.wav',
            note: 'C#',
            octave: 5
        }, {
            file: 'Oboes/oboes-sus-c#6.wav',
            note: 'C#',
            octave: 6
        }, {
            file: 'Oboes/oboes-sus-e4.wav',
            note: 'E',
            octave: 4
        }, {
            file: 'Oboes/oboes-sus-e5.wav',
            note: 'E',
            octave: 5
        }, {
            file: 'Oboes/oboes-sus-e6.wav',
            note: 'E',
            octave: 6
        }, {
            file: 'Oboes/oboes-sus-g4.wav',
            note: 'G',
            octave: 4
        }, {
            file: 'Oboes/oboes-sus-g5.wav',
            note: 'G',
            octave: 5
        }];

        Samples['chimes'] = [{
            file: 'Percussion/chimes-a3.wav',
            note: 'A',
            octave: 3
        }, {
            file: 'Percussion/chimes-a4.wav',
            note: 'A',
            octave: 4
        }, {
            file: 'Percussion/chimes-a5.wav',
            note: 'A',
            octave: 5
        }, {
            file: 'Percussion/chimes-c3.wav',
            note: 'C',
            octave: 3
        }, {
            file: 'Percussion/chimes-c4.wav',
            note: 'C',
            octave: 4
        }, {
            file: 'Percussion/chimes-c5.wav',
            note: 'C',
            octave: 5
        }, {
            file: 'Percussion/chimes-c6.wav',
            note: 'C',
            octave: 6
        }, {
            file: 'Percussion/chimes-d#3.wav',
            note: 'D#',
            octave: 3
        }, {
            file: 'Percussion/chimes-d#4.wav',
            note: 'D#',
            octave: 4
        }, {
            file: 'Percussion/chimes-d#5.wav',
            note: 'D#',
            octave: 5
        }, {
            file: 'Percussion/chimes-f#3.wav',
            note: 'F#',
            octave: 3
        }, {
            file: 'Percussion/chimes-f#4.wav',
            note: 'F#',
            octave: 4
        }, {
            file: 'Percussion/chimes-f#5.wav',
            note: 'F#',
            octave: 5
        }];

        Samples['glockenspiel'] = [{
            file: 'Percussion/glockenspiel-a3.wav',
            note: 'A',
            octave: 3
        }, {
            file: 'Percussion/glockenspiel-a4.wav',
            note: 'A',
            octave: 4
        }, {
            file: 'Percussion/glockenspiel-a5.wav',
            note: 'A',
            octave: 5
        }, {
            file: 'Percussion/glockenspiel-c3.wav',
            note: 'C',
            octave: 3
        }, {
            file: 'Percussion/glockenspiel-c4.wav',
            note: 'C',
            octave: 4
        }, {
            file: 'Percussion/glockenspiel-c5.wav',
            note: 'C',
            octave: 5
        }, {
            file: 'Percussion/glockenspiel-c6.wav',
            note: 'C',
            octave: 6
        }, {
            file: 'Percussion/glockenspiel-d#3.wav',
            note: 'D#',
            octave: 3
        }, {
            file: 'Percussion/glockenspiel-d#4.wav',
            note: 'D#',
            octave: 4
        }, {
            file: 'Percussion/glockenspiel-d#5.wav',
            note: 'D#',
            octave: 5
        }, {
            file: 'Percussion/glockenspiel-f#3.wav',
            note: 'F#',
            octave: 3
        }, {
            file: 'Percussion/glockenspiel-f#4.wav',
            note: 'F#',
            octave: 4
        }, {
            file: 'Percussion/glockenspiel-f#5.wav',
            note: 'F#',
            octave: 5
        }];

        Samples['xylophone'] = [{
            file: 'Percussion/Xylophone-a#2.wav',
            note: 'A#',
            octave: 2
        }, {
            file: 'Percussion/Xylophone-a#3.wav',
            note: 'A#',
            octave: 3
        }, {
            file: 'Percussion/Xylophone-a#4.wav',
            note: 'A#',
            octave: 4
        }, {
            file: 'Percussion/Xylophone-a#5.wav',
            note: 'A#',
            octave: 5
        }, {
            file: 'Percussion/Xylophone-c#3.wav',
            note: 'C#',
            octave: 3
        }, {
            file: 'Percussion/Xylophone-c#4.wav',
            note: 'C#',
            octave: 4
        }, {
            file: 'Percussion/Xylophone-c#5.wav',
            note: 'C#',
            octave: 5
        }, {
            file: 'Percussion/Xylophone-e3.wav',
            note: 'E',
            octave: 3
        }, {
            file: 'Percussion/Xylophone-e4.wav',
            note: 'E',
            octave: 4
        }, {
            file: 'Percussion/Xylophone-e5.wav',
            note: 'E',
            octave: 5
        }, {
            file: 'Percussion/Xylophone-g2.wav',
            note: 'G',
            octave: 2
        }, {
            file: 'Percussion/Xylophone-g3.wav',
            note: 'G',
            octave: 3
        }, {
            file: 'Percussion/Xylophone-g4.wav',
            note: 'G',
            octave: 4
        }, {
            file: 'Percussion/Xylophone-g5.wav',
            note: 'G',
            octave: 5
        }];

        Samples['piccolo'] = [{
            file: 'Piccolo/piccolo-a4.wav',
            note: 'A',
            octave: 4
        }, {
            file: 'Piccolo/piccolo-a5.wav',
            note: 'A',
            octave: 5
        }, {
            file: 'Piccolo/piccolo-c4.wav',
            note: 'C',
            octave: 4
        }, {
            file: 'Piccolo/piccolo-c5.wav',
            note: 'C',
            octave: 5
        }, {
            file: 'Piccolo/piccolo-c6.wav',
            note: 'C',
            octave: 6
        }, {
            file: 'Piccolo/piccolo-d#4.wav',
            note: 'D#',
            octave: 4
        }, {
            file: 'Piccolo/piccolo-d#5.wav',
            note: 'D#',
            octave: 5
        }, {
            file: 'Piccolo/piccolo-d#6.wav',
            note: 'D#',
            octave: 6
        }, {
            file: 'Piccolo/piccolo-f#4.wav',
            note: 'F#',
            octave: 4
        }, {
            file: 'Piccolo/piccolo-f#5.wav',
            note: 'F#',
            octave: 5
        }, {
            file: 'Piccolo/piccolo-f#6.wav',
            note: 'F#',
            octave: 6
        }];

        Samples['tenor_trombone'] = [{
            file: 'Tenor Trombone/tenor_trombone-a#2.wav',
            note: 'A#',
            octave: 2
        }, {
            file: 'Tenor Trombone/tenor_trombone-a#3.wav',
            note: 'A#',
            octave: 3
        }, {
            file: 'Tenor Trombone/tenor_trombone-a#4.wav',
            note: 'A#',
            octave: 4
        }, {
            file: 'Tenor Trombone/tenor_trombone-c#3.wav',
            note: 'C#',
            octave: 3
        }, {
            file: 'Tenor Trombone/tenor_trombone-c#4.wav',
            note: 'C#',
            octave: 4
        }, {
            file: 'Tenor Trombone/tenor_trombone-e2.wav',
            note: 'E',
            octave: 2
        }, {
            file: 'Tenor Trombone/tenor_trombone-e3.wav',
            note: 'E',
            octave: 3
        }, {
            file: 'Tenor Trombone/tenor_trombone-e4.wav',
            note: 'E',
            octave: 4
        }, {
            file: 'Tenor Trombone/tenor_trombone-g2.wav',
            note: 'G',
            octave: 2
        }, {
            file: 'Tenor Trombone/tenor_trombone-g3.wav',
            note: 'G',
            octave: 3
        }, {
            file: 'Tenor Trombone/tenor_trombone-g4.wav',
            note: 'G',
            octave: 4
        }];

        Samples['trombones-stc-rr1'] = [{
            file: 'Trombones/trombones-stc-rr1-a#2.wav',
            note: 'A#',
            octave: 2
        }, {
            file: 'Trombones/trombones-stc-rr1-a#3.wav',
            note: 'A#',
            octave: 3
        }, {
            file: 'Trombones/trombones-stc-rr1-a#4.wav',
            note: 'A#',
            octave: 4
        }, {
            file: 'Trombones/trombones-stc-rr1-c#3.wav',
            note: 'C#',
            octave: 3
        }, {
            file: 'Trombones/trombones-stc-rr1-c#4.wav',
            note: 'C#',
            octave: 4
        }, {
            file: 'Trombones/trombones-stc-rr1-c#5.wav',
            note: 'C#',
            octave: 5
        }, {
            file: 'Trombones/trombones-stc-rr1-e2.wav',
            note: 'E',
            octave: 2
        }, {
            file: 'Trombones/trombones-stc-rr1-e3.wav',
            note: 'E',
            octave: 3
        }, {
            file: 'Trombones/trombones-stc-rr1-e4.wav',
            note: 'E',
            octave: 4
        }, {
            file: 'Trombones/trombones-stc-rr1-e5.wav',
            note: 'E',
            octave: 5
        }, {
            file: 'Trombones/trombones-stc-rr1-g2.wav',
            note: 'G',
            octave: 2
        }, {
            file: 'Trombones/trombones-stc-rr1-g3.wav',
            note: 'G',
            octave: 3
        }, {
            file: 'Trombones/trombones-stc-rr1-g4.wav',
            note: 'G',
            octave: 4
        }];

        Samples['trombones-sus'] = [{
            file: 'Trombones/trombones-sus-a#2.wav',
            note: 'A#',
            octave: 2
        }, {
            file: 'Trombones/trombones-sus-a#3.wav',
            note: 'A#',
            octave: 3
        }, {
            file: 'Trombones/trombones-sus-a#4.wav',
            note: 'A#',
            octave: 4
        }, {
            file: 'Trombones/trombones-sus-c#3.wav',
            note: 'C#',
            octave: 3
        }, {
            file: 'Trombones/trombones-sus-c#4.wav',
            note: 'C#',
            octave: 4
        }, {
            file: 'Trombones/trombones-sus-c#5.wav',
            note: 'C#',
            octave: 5
        }, {
            file: 'Trombones/trombones-sus-e2.wav',
            note: 'E',
            octave: 2
        }, {
            file: 'Trombones/trombones-sus-e3.wav',
            note: 'E',
            octave: 3
        }, {
            file: 'Trombones/trombones-sus-e4.wav',
            note: 'E',
            octave: 4
        }, {
            file: 'Trombones/trombones-sus-e5.wav',
            note: 'E',
            octave: 5
        }, {
            file: 'Trombones/trombones-sus-g2.wav',
            note: 'G',
            octave: 2
        }, {
            file: 'Trombones/trombones-sus-g3.wav',
            note: 'G',
            octave: 3
        }, {
            file: 'Trombones/trombones-sus-g4.wav',
            note: 'G',
            octave: 4
        }];

        Samples['trumpet'] = [{
            file: 'Trumpet/trumpet-a#3.wav',
            note: 'A#',
            octave: 3
        }, {
            file: 'Trumpet/trumpet-a#4.wav',
            note: 'A#',
            octave: 4
        }, {
            file: 'Trumpet/trumpet-a#5.wav',
            note: 'A#',
            octave: 5
        }, {
            file: 'Trumpet/trumpet-c#4.wav',
            note: 'C#',
            octave: 4
        }, {
            file: 'Trumpet/trumpet-c#5.wav',
            note: 'C#',
            octave: 5
        }, {
            file: 'Trumpet/trumpet-c#6.wav',
            note: 'C#',
            octave: 6
        }, {
            file: 'Trumpet/trumpet-e3.wav',
            note: 'E',
            octave: 3
        }, {
            file: 'Trumpet/trumpet-e4.wav',
            note: 'E',
            octave: 4
        }, {
            file: 'Trumpet/trumpet-e5.wav',
            note: 'E',
            octave: 5
        }, {
            file: 'Trumpet/trumpet-e6.wav',
            note: 'E',
            octave: 6
        }, {
            file: 'Trumpet/trumpet-g3.wav',
            note: 'G',
            octave: 3
        }, {
            file: 'Trumpet/trumpet-g4.wav',
            note: 'G',
            octave: 4
        }, {
            file: 'Trumpet/trumpet-g5.wav',
            note: 'G',
            octave: 5
        }];

        Samples['trumpets-stc-rr1'] = [{
            file: 'Trumpets/trumpets-stc-rr1-a#3.wav',
            note: 'A#',
            octave: 3
        }, {
            file: 'Trumpets/trumpets-stc-rr1-a#4.wav',
            note: 'A#',
            octave: 4
        }, {
            file: 'Trumpets/trumpets-stc-rr1-a#5.wav',
            note: 'A#',
            octave: 5
        }, {
            file: 'Trumpets/trumpets-stc-rr1-c#4.wav',
            note: 'C#',
            octave: 4
        }, {
            file: 'Trumpets/trumpets-stc-rr1-c#5.wav',
            note: 'C#',
            octave: 5
        }, {
            file: 'Trumpets/trumpets-stc-rr1-c#6.wav',
            note: 'C#',
            octave: 6
        }, {
            file: 'Trumpets/trumpets-stc-rr1-e3.wav',
            note: 'E',
            octave: 3
        }, {
            file: 'Trumpets/trumpets-stc-rr1-e4.wav',
            note: 'E',
            octave: 4
        }, {
            file: 'Trumpets/trumpets-stc-rr1-e5.wav',
            note: 'E',
            octave: 5
        }, {
            file: 'Trumpets/trumpets-stc-rr1-e6.wav',
            note: 'E',
            octave: 6
        }, {
            file: 'Trumpets/trumpets-stc-rr1-g3.wav',
            note: 'G',
            octave: 3
        }, {
            file: 'Trumpets/trumpets-stc-rr1-g4.wav',
            note: 'G',
            octave: 4
        }, {
            file: 'Trumpets/trumpets-stc-rr1-g5.wav',
            note: 'G',
            octave: 5
        }];

        Samples['trumpets-sus'] = [{
            file: 'Trumpets/trumpets-sus-a#3.wav',
            note: 'A#',
            octave: 3
        }, {
            file: 'Trumpets/trumpets-sus-a#4.wav',
            note: 'A#',
            octave: 4
        }, {
            file: 'Trumpets/trumpets-sus-a#5.wav',
            note: 'A#',
            octave: 5
        }, {
            file: 'Trumpets/trumpets-sus-c#4.wav',
            note: 'C#',
            octave: 4
        }, {
            file: 'Trumpets/trumpets-sus-c#5.wav',
            note: 'C#',
            octave: 5
        }, {
            file: 'Trumpets/trumpets-sus-c#6.wav',
            note: 'C#',
            octave: 6
        }, {
            file: 'Trumpets/trumpets-sus-e3.wav',
            note: 'E',
            octave: 3
        }, {
            file: 'Trumpets/trumpets-sus-e4.wav',
            note: 'E',
            octave: 4
        }, {
            file: 'Trumpets/trumpets-sus-e5.wav',
            note: 'E',
            octave: 5
        }, {
            file: 'Trumpets/trumpets-sus-e6.wav',
            note: 'E',
            octave: 6
        }, {
            file: 'Trumpets/trumpets-sus-g3.wav',
            note: 'G',
            octave: 3
        }, {
            file: 'Trumpets/trumpets-sus-g4.wav',
            note: 'G',
            octave: 4
        }, {
            file: 'Trumpets/trumpets-sus-g5.wav',
            note: 'G',
            octave: 5
        }];

        Samples['tuba-stc-rr1'] = [{
            file: 'Tuba/tuba-stc-rr1-a#1.wav',
            note: 'A#',
            octave: 1
        }, {
            file: 'Tuba/tuba-stc-rr1-a#2.wav',
            note: 'A#',
            octave: 2
        }, {
            file: 'Tuba/tuba-stc-rr1-a#3.wav',
            note: 'A#',
            octave: 3
        }, {
            file: 'Tuba/tuba-stc-rr1-c#2.wav',
            note: 'C#',
            octave: 2
        }, {
            file: 'Tuba/tuba-stc-rr1-c#3.wav',
            note: 'C#',
            octave: 3
        }, {
            file: 'Tuba/tuba-stc-rr1-c#4.wav',
            note: 'C#',
            octave: 4
        }, {
            file: 'Tuba/tuba-stc-rr1-e1.wav',
            note: 'E',
            octave: 1
        }, {
            file: 'Tuba/tuba-stc-rr1-e2.wav',
            note: 'E',
            octave: 2
        }, {
            file: 'Tuba/tuba-stc-rr1-e3.wav',
            note: 'E',
            octave: 3
        }, {
            file: 'Tuba/tuba-stc-rr1-g1.wav',
            note: 'G',
            octave: 1
        }, {
            file: 'Tuba/tuba-stc-rr1-g2.wav',
            note: 'G',
            octave: 2
        }, {
            file: 'Tuba/tuba-stc-rr1-g3.wav',
            note: 'G',
            octave: 3
        }];

        Samples['tuba-sus'] = [{
            file: 'Tuba/tuba-sus-a#1.wav',
            note: 'A#',
            octave: 1
        }, {
            file: 'Tuba/tuba-sus-a#2.wav',
            note: 'A#',
            octave: 2
        }, {
            file: 'Tuba/tuba-sus-a#3.wav',
            note: 'A#',
            octave: 3
        }, {
            file: 'Tuba/tuba-sus-c#2.wav',
            note: 'C#',
            octave: 2
        }, {
            file: 'Tuba/tuba-sus-c#3.wav',
            note: 'C#',
            octave: 3
        }, {
            file: 'Tuba/tuba-sus-c#4.wav',
            note: 'C#',
            octave: 4
        }, {
            file: 'Tuba/tuba-sus-e1.wav',
            note: 'E',
            octave: 1
        }, {
            file: 'Tuba/tuba-sus-e2.wav',
            note: 'E',
            octave: 2
        }, {
            file: 'Tuba/tuba-sus-e3.wav',
            note: 'E',
            octave: 3
        }, {
            file: 'Tuba/tuba-sus-g1.wav',
            note: 'G',
            octave: 1
        }, {
            file: 'Tuba/tuba-sus-g2.wav',
            note: 'G',
            octave: 2
        }, {
            file: 'Tuba/tuba-sus-g3.wav',
            note: 'G',
            octave: 3
        }];

        Samples['violas-piz-rr1'] = [{
            file: 'Violas/violas-piz-rr1-a3.wav',
            note: 'A',
            octave: 3
        }, {
            file: 'Violas/violas-piz-rr1-a4.wav',
            note: 'A',
            octave: 4
        }, {
            file: 'Violas/violas-piz-rr1-a5.wav',
            note: 'A',
            octave: 5
        }, {
            file: 'Violas/violas-piz-rr1-c3.wav',
            note: 'C',
            octave: 3
        }, {
            file: 'Violas/violas-piz-rr1-c4.wav',
            note: 'C',
            octave: 4
        }, {
            file: 'Violas/violas-piz-rr1-c5.wav',
            note: 'C',
            octave: 5
        }, {
            file: 'Violas/violas-piz-rr1-c6.wav',
            note: 'C',
            octave: 6
        }, {
            file: 'Violas/violas-piz-rr1-d#3.wav',
            note: 'D#',
            octave: 3
        }, {
            file: 'Violas/violas-piz-rr1-d#4.wav',
            note: 'D#',
            octave: 4
        }, {
            file: 'Violas/violas-piz-rr1-d#5.wav',
            note: 'D#',
            octave: 5
        }, {
            file: 'Violas/violas-piz-rr1-f#3.wav',
            note: 'F#',
            octave: 3
        }, {
            file: 'Violas/violas-piz-rr1-f#4.wav',
            note: 'F#',
            octave: 4
        }, {
            file: 'Violas/violas-piz-rr1-f#5.wav',
            note: 'F#',
            octave: 5
        }];

        Samples['violas-sus'] = [{
            file: 'Violas/violas-sus-a3.wav',
            note: 'A',
            octave: 3
        }, {
            file: 'Violas/violas-sus-a4.wav',
            note: 'A',
            octave: 4
        }, {
            file: 'Violas/violas-sus-a5.wav',
            note: 'A',
            octave: 5
        }, {
            file: 'Violas/violas-sus-c3.wav',
            note: 'C',
            octave: 3
        }, {
            file: 'Violas/violas-sus-c4.wav',
            note: 'C',
            octave: 4
        }, {
            file: 'Violas/violas-sus-c5.wav',
            note: 'C',
            octave: 5
        }, {
            file: 'Violas/violas-sus-c6.wav',
            note: 'C',
            octave: 6
        }, {
            file: 'Violas/violas-sus-d#3.wav',
            note: 'D#',
            octave: 3
        }, {
            file: 'Violas/violas-sus-d#4.wav',
            note: 'D#',
            octave: 4
        }, {
            file: 'Violas/violas-sus-d#5.wav',
            note: 'D#',
            octave: 5
        }, {
            file: 'Violas/violas-sus-f#3.wav',
            note: 'F#',
            octave: 3
        }, {
            file: 'Violas/violas-sus-f#4.wav',
            note: 'F#',
            octave: 4
        }, {
            file: 'Violas/violas-sus-f#5.wav',
            note: 'F#',
            octave: 5
        }];

        Samples['violin'] = [{
            file: 'Violin/violin-a#3.wav',
            note: 'A#',
            octave: 3
        }, {
            file: 'Violin/violin-a#4.wav',
            note: 'A#',
            octave: 4
        }, {
            file: 'Violin/violin-a#5.wav',
            note: 'A#',
            octave: 5
        }, {
            file: 'Violin/violin-a#6.wav',
            note: 'A#',
            octave: 6
        }, {
            file: 'Violin/violin-c#4.wav',
            note: 'C#',
            octave: 4
        }, {
            file: 'Violin/violin-c#5.wav',
            note: 'C#',
            octave: 5
        }, {
            file: 'Violin/violin-c#6.wav',
            note: 'C#',
            octave: 6
        }, {
            file: 'Violin/violin-c#7.wav'
        }, {
            file: 'Violin/violin-e4.wav',
            note: 'E',
            octave: 4
        }, {
            file: 'Violin/violin-e5.wav',
            note: 'E',
            octave: 5
        }, {
            file: 'Violin/violin-e6.wav',
            note: 'E',
            octave: 6
        }, {
            file: 'Violin/violin-g3.wav',
            note: 'G',
            octave: 3
        }, {
            file: 'Violin/violin-g4.wav',
            note: 'G',
            octave: 4
        }, {
            file: 'Violin/violin-g5.wav',
            note: 'G',
            octave: 5
        }, {
            file: 'Violin/violin-g6.wav',
            note: 'G',
            octave: 6
        }];

        return Samples;
    }

})();