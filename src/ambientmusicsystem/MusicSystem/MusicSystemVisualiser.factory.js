/* global angular */
(function() {
    'use strict';
    
    angular.module('ambientmusicsystem').
        factory('Visualiser', Visualiser);
    
    function Visualiser() {

        var RT_LINE_COLOR = '#D9DDF6';
        var lineCanvas;
        var lineCanvasCtx;
        var barCanvas;
        var barCanvasCtx;
        var waveformCanvas;
        var waveformCanvasCtx;
        var analyser;
        var byteTimeArray;
        var byteFreqArray;
        var column = 0;
    
        // Used for WaveForm
        var hue = 210;
        var hueMin = hue;
        var hueMax = 220
        var hueDirectionUp = true;
    
        function drawLineFrame(byteTimeArray) {
            lineCanvasCtx.clearRect(0, 0, lineCanvas.width, lineCanvas.height);
    
            lineCanvasCtx.lineWidth = 1;
            lineCanvasCtx.strokeStyle = RT_LINE_COLOR;
            lineCanvasCtx.beginPath();
    
            var sliceWidth = lineCanvas.width * 1.0 / analyser.frequencyBinCount;
            var x = 0;
    
            for (var i = 0; i < analyser.frequencyBinCount; i++) {
                var v = byteTimeArray[i] / 128.0;
                var y = v * lineCanvas.height / 2;
    
                if (i === 0) {
                    lineCanvasCtx.moveTo(x, y);
                } else {
                    lineCanvasCtx.lineTo(x, y);
                }
    
                x += sliceWidth;
            }
    
            lineCanvasCtx.lineTo(lineCanvas.width, lineCanvas.height / 2);
            lineCanvasCtx.stroke();
        }
    
        function drawwaveformFrame(byteTimeArray) {
            var timeVal;
            var minVal = 9999999;
            var maxVal = 0;        
    
            for (var i = 0; i < analyser.frequencyBinCount; i++) {
                timeVal = byteTimeArray[i] / 256;
    
                if(timeVal > maxVal){        
                    maxVal = timeVal;
                }
                if(timeVal < minVal){
                    minVal = timeVal;
                }
            }
    
            var yBottom = waveformCanvas.height - (waveformCanvas.height * minVal) - 1;
            var yTop = waveformCanvas.height - (waveformCanvas.height * maxVal) - 1;
    
            waveformCanvasCtx.fillStyle = 'hsl(' + hue + ', 100%, 60%)';
            waveformCanvasCtx.fillRect(column, yBottom, 1, (yTop - yBottom));
    
            column += 1;
            if(column >= waveformCanvas.width) {
                column = 0;
                waveformCanvasCtx.clearRect(0, 0, waveformCanvas.width, waveformCanvas.height);
            }
    
            if(hueDirectionUp) {
                hue = hue + 0.1;
            }
            else {
                hue = hue - 0.1;
            }
    
            if(hue > hueMax){
                hueDirectionUp = false;
            }
    
            if(hue < hueMin){
                hueDirectionUp = true;
            }
        }
    
        function drawFrame() {
            analyser.getByteTimeDomainData(byteTimeArray);
            //analyser.getByteFrequencyData(byteFreqArray);
    
            drawLineFrame(byteTimeArray);
            drawwaveformFrame(byteTimeArray);
    
            requestAnimationFrame(drawFrame);
        }
    
        function startVisualisation(analyserNode) {
            var canvasHeight = Math.min(window.innerHeight, window.outerHeight);
            var canvasWidth = Math.min(window.innerWidth, window.outerWidth);
            analyser = analyserNode;
            analyser.fftSize = 2048;
            byteTimeArray = new Uint8Array(analyser.frequencyBinCount);
            byteFreqArray = new Uint8Array(analyser.frequencyBinCount);
    
            lineCanvas = document.getElementById('lineCanvas');
            if (lineCanvas) {
                // set our visualiser to take up the whole screen
                lineCanvas.width = canvasWidth;
                lineCanvas.height = canvasHeight;
                lineCanvasCtx = lineCanvas.getContext('2d');
                lineCanvasCtx.clearRect(0, 0, canvasWidth, canvasHeight);
            }
    
            waveformCanvas = document.getElementById('waveformCanvas');
            if (waveformCanvas) {
                waveformCanvas.width = canvasWidth;
                waveformCanvas.height = canvasHeight;
                waveformCanvasCtx = waveformCanvas.getContext('2d');
                waveformCanvasCtx.clearRect(0, 0, canvasWidth, canvasHeight);
            }
    
            drawFrame();
        }
    
        return {
            start: startVisualisation
        };
    }
})();