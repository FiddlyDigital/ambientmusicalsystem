(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define([], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory();
    } else {
        // Browser Globals (root is window)
        root.MusicSystemVisualiser = factory();
    }
}(this, function() {
    'use strict';

    var VISUALISER_GREEN = 'rgb(38, 127, 57)';    
    var lineCanvas;
    var lineCanvasCtx;
    var barCanvas;
    var barCanvasCtx;
    var analyser;
    var byteTimeArray;
    var byteFreqArray;

    function drawLineFrame(byteTimeArray) {
        lineCanvasCtx.clearRect(0, 0, lineCanvas.width, lineCanvas.height);

        lineCanvasCtx.lineWidth = 3;
        lineCanvasCtx.strokeStyle = VISUALISER_GREEN;
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

    function drawBarFrame(byteFreqArray) {
        barCanvasCtx.clearRect(0, 0, barCanvas.width, barCanvas.height);

        for (var i = 0; i < analyser.frequencyBinCount; i++) {
            var value = byteFreqArray[i];
            var percent = value / 256;
            var height = barCanvas.height * percent;
            var offset = barCanvas.height - height - 1;
            var barWidth = barCanvas.width / analyser.frequencyBinCount;
            var hue = i / analyser.frequencyBinCount * 360;
            barCanvasCtx.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
            barCanvasCtx.fillRect(i * barWidth, offset, barWidth, height);
        }
    }

    function drawFrame() {
        analyser.getByteTimeDomainData(byteTimeArray);
        drawLineFrame(byteTimeArray);

        analyser.getByteFrequencyData(byteFreqArray)
        drawBarFrame(byteFreqArray);

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

            // global
            lineCanvasCtx = lineCanvas.getContext('2d');
            lineCanvasCtx.clearRect(0, 0, lineCanvas.width, lineCanvas.height);
        }

        barCanvas = document.getElementById('barCanvas');
        if(barCanvas){
            barCanvas.width = canvasWidth;
            barCanvas.height = canvasHeight;

            barCanvasCtx = barCanvas.getContext('2d');
            barCanvasCtx.clearRect(0, 0, barCanvas.width, barCanvas.height);
        }

        drawFrame();
    }

    return {
        start : startVisualisation
    };
}));