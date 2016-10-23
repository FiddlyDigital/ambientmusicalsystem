/* global angular */
(function() {
    'use strict';

    angular.module('app').
        factory('MusicSystemImpulses', MusicSystemImpulses);

    function MusicSystemImpulses() {
        var Impulses = [{
            name: 'Airport Terminal',
            file: 'assets/impulse_response/AirportTerminal.wav'
        }, {
            name: 'Castle Thunder',
            file: 'assets/impulse_response/CastleThunder.wav'
        },{
            name: 'Giant Cave',
            file: 'assets/impulse_response/GiantCave.wav'
        }, {
            name: 'Hangar',
            file: 'assets/impulse_response/Hangar.wav'
        }, {
            name: 'Outdoor Blastoff',
            file: 'assets/impulse_response/OutdoorBlastoff.wav'
        }, {
            name: 'Plate Large',
            file: 'assets/impulse_response/PlateLarge.wav'
        }, {
            name: 'Plate Medium',
            file: 'assets/impulse_response/PlateMedium.wav'
        }, {
            name: 'Plate Small',
            file: 'assets/impulse_response/PlateSmall.wav'
        }, {
            name: 'Plate Super Dry',
            file: 'assets/impulse_response/PlateSuperDry.wav'
        }, {
            name: 'Prime Long',
            file: 'assets/impulse_response/PrimeLong.wav'
        }, {
            name: 'Prime Medium',
            file: 'assets/impulse_response/PrimeMed.wav'
        }, {
            name: 'Prime Short',
            file: 'assets/impulse_response/PrimeShort.wav'
        }, {
            name: 'Prime Extra-long',
            file: 'assets/impulse_response/PrimeXtraLong.wav'
        }, {
            name: 'Room Concert Hall',
            file: 'assets/impulse_response/RoomConcertHall.wav'
        }, {
            name: 'Room Huge',
            file: 'assets/impulse_response/RoomHuge.wav'
        }, {
            name: 'Room Large',
            file: 'assets/impulse_response/RoomLarge.wav'
        }, {
            name: 'Room Medium',
            file: 'assets/impulse_response/RoomMedium.wav'
        }, {
            name: 'Room Pool',
            file: 'assets/impulse_response/RoomPool.wav'
        }];
    
        return Impulses;    
    }
})();