/* global angular */
(function() {
    'use strict';

    angular.module('ambientmusicsystem').factory('Impulses', ImpulsesIndex);

    function ImpulsesIndex() {
        var Impulses = [{
            name: 'Airport Terminal',
            file: 'ImpulseResponses/AirportTerminal.wav'
        }, {
            name: 'Castle Thunder',
            file: 'ImpulseResponses/CastleThunder.wav'
        },{
            name: 'Giant Cave',
            file: 'ImpulseResponses/GiantCave.wav'
        }, {
            name: 'Hangar',
            file: 'ImpulseResponses/Hangar.wav'
        }, {
            name: 'Outdoor Blastoff',
            file: 'ImpulseResponses/OutdoorBlastoff.wav'
        }, {
            name: 'Plate Large',
            file: 'ImpulseResponses/PlateLarge.wav'
        }, {
            name: 'Plate Medium',
            file: 'ImpulseResponses/PlateMedium.wav'
        }, {
            name: 'Plate Small',
            file: 'ImpulseResponses/PlateSmall.wav'
        }, {
            name: 'Plate Super Dry',
            file: 'ImpulseResponses/PlateSuperDry.wav'
        }, {
            name: 'Prime Long',
            file: 'ImpulseResponses/PrimeLong.wav'
        }, {
            name: 'Prime Medium',
            file: 'ImpulseResponses/PrimeMed.wav'
        }, {
            name: 'Prime Short',
            file: 'ImpulseResponses/PrimeShort.wav'
        }, {
            name: 'Prime Extra-long',
            file: 'ImpulseResponses/PrimeXtraLong.wav'
        }, {
            name: 'Room Concert Hall',
            file: 'ImpulseResponses/RoomConcertHall.wav'
        }, {
            name: 'Room Huge',
            file: 'ImpulseResponses/RoomHuge.wav'
        }, {
            name: 'Room Large',
            file: 'ImpulseResponses/RoomLarge.wav'
        }, {
            name: 'Room Medium',
            file: 'ImpulseResponses/RoomMedium.wav'
        }, {
            name: 'Room Pool',
            file: 'ImpulseResponses/RoomPool.wav'
        }];
    
        return Impulses;    
    }
})();