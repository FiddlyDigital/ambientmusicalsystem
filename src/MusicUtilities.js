(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define([], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory();
    } else {
        // Browser Globals (root is window)
        root.MusicUtilities = factory();
    }
}(this, function() {
    'use strict';

    var OCTAVE = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    var MODES = ['Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian'];

    function travelForwardThroughOctaves(note, steps) {
        var sharpNote = flatToSharp(note);
        var noteIdx = OCTAVE.indexOf(sharpNote);

        if (noteIdx > -1) {
            noteIdx += steps;

            if (noteIdx >= OCTAVE.length) {
                noteIdx = noteIdx - OCTAVE.length;
            }

            return OCTAVE[noteIdx];
        }
    }

    function travelBackwardThroughOctaves(note, steps) {
        var sharpNote = flatToSharp(note);
        var noteIdx = OCTAVE.indexOf(sharpNote);

        if (noteIdx > -1) {
            noteIdx -= steps;

            if (noteIdx < 0) {
                noteIdx = OCTAVE.length + noteIdx; // nodeIdx will be negative here
            }

            return OCTAVE[noteIdx];
        }
    }

    function getFifthOfNote(note) {
        return travelForwardThroughOctaves(note, 7);
    }

    function getFourthOfNote(note) {
        return travelForwardThroughOctaves(note, 5);
    }

    function getMinorKeyOfNote(note) {
        return travelBackwardThroughOctaves(note, 3);
    }

    function getNextHalfStep(note) {
        return travelForwardThroughOctaves(note, 1);
    }

    function getNextWholeStep(note) {
        return travelForwardThroughOctaves(note, 2);
    }

    function getPrevHalfStep(note) {
        return travelBackwardThroughOctaves(note, 1);
    }

    function getPrevWholeStep(note) {
        return travelBackwardThroughOctaves(note, 2);
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

    function getNotesInMode(baseNote, mode){
        var pattern = '';
        switch(mode){
            case 'Ionian':
                pattern = 'FFHFFFH';
                break;
            case 'Dorian':
                pattern = 'FHFFFHF';
                break;
            case 'Phrygian':
                pattern = 'HFFFHFF';
                break;
            case 'Lydian':
                pattern = 'FFFHFFH';
                break;
            case 'Mixolydian':
                pattern = 'FFHFFHF';
                break;
            case 'Aeolian':
                pattern = 'FHFFHFF';
                break;
            case 'Locrian':
                pattern = 'HFFHFFF';
                break;            
        }

        return getNotesFromSteps(baseNote, pattern);
    }

    function getNotesFromSteps(baseNote, stepPattern){
        // (F)ull / (H)alf
        var notes = [baseNote];
        var placeHolder = baseNote;

        for(var i = 0; i< stepPattern.length; i++){
            switch(stepPattern.charAt(i)){
                case 'F':
                    placeHolder = getNextWholeStep(placeHolder);
                    break;
                case 'H':
                    placeHolder = getNextHalfStep(placeHolder);
                    break;
            }

            notes.push(placeHolder);
        }

        return notes;
    }

    return {
        flatToSharp: flatToSharp,
        getFifthOfNote: getFifthOfNote,
        getFourthOfNote: getFourthOfNote,
        getMinorKeyOfNote: getMinorKeyOfNote,
        getNextHalfStep: getNextHalfStep,
        getNextWholeStep: getNextWholeStep,
        getNoteDistance: getNoteDistance,
        getNotesInMode : getNotesInMode,
        getNoteValue: noteValue,
        getPrevHalfStep: getPrevHalfStep,
        getPrevWholeStep: getPrevWholeStep,
        octaves: OCTAVE,
        modes: MODES
    }
}));