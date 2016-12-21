/* global angular */
(function() {
    'use strict';

    angular.module('ambientmusicsystem').
        factory('Impulses', ImpulsesIndex);

    function ImpulsesIndex() {
        var Impulses = [{
            name: 'Airport Terminal',
            file: 'impulse_response/AirportTerminal.wav'
        }, {
            name: 'Castle Thunder',
            file: 'impulse_response/CastleThunder.wav'
        },{
            name: 'Giant Cave',
            file: 'impulse_response/GiantCave.wav'
        }, {
            name: 'Hangar',
            file: 'impulse_response/Hangar.wav'
        }, {
            name: 'Outdoor Blastoff',
            file: 'impulse_response/OutdoorBlastoff.wav'
        }, {
            name: 'Plate Large',
            file: 'impulse_response/PlateLarge.wav'
        }, {
            name: 'Plate Medium',
            file: 'impulse_response/PlateMedium.wav'
        }, {
            name: 'Plate Small',
            file: 'impulse_response/PlateSmall.wav'
        }, {
            name: 'Plate Super Dry',
            file: 'impulse_response/PlateSuperDry.wav'
        }, {
            name: 'Prime Long',
            file: 'impulse_response/PrimeLong.wav'
        }, {
            name: 'Prime Medium',
            file: 'impulse_response/PrimeMed.wav'
        }, {
            name: 'Prime Short',
            file: 'impulse_response/PrimeShort.wav'
        }, {
            name: 'Prime Extra-long',
            file: 'impulse_response/PrimeXtraLong.wav'
        }, {
            name: 'Room Concert Hall',
            file: 'impulse_response/RoomConcertHall.wav'
        }, {
            name: 'Room Huge',
            file: 'impulse_response/RoomHuge.wav'
        }, {
            name: 'Room Large',
            file: 'impulse_response/RoomLarge.wav'
        }, {
            name: 'Room Medium',
            file: 'impulse_response/RoomMedium.wav'
        }, {
            name: 'Room Pool',
            file: 'impulse_response/RoomPool.wav'
        }];
    
        return Impulses;    
    }
})();