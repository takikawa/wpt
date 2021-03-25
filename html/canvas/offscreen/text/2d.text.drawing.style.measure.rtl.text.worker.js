// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.text.drawing.style.measure.rtl.text
// Description:Measurement should follow canvas direction instead text direction
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Measurement should follow canvas direction instead text direction");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

metrics = ctx.measureText('اَلْعَرَبِيَّةُ');
_assert(metrics.actualBoundingBoxLeft < metrics.actualBoundingBoxRight, "metrics.actualBoundingBoxLeft < metrics.actualBoundingBoxRight");

metrics = ctx.measureText('hello');
_assert(metrics.actualBoundingBoxLeft < metrics.actualBoundingBoxRight, "metrics.actualBoundingBoxLeft < metrics.actualBoundingBoxRight");
t.done();

});
done();