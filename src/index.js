var socket = require('./socket');
var size = 10;
var canvas;

function setup() {

}

function draw() {
  fill(100);  // Set fill to gray
  ellipse(50, 50, size, size);  // Draw gray ellipse using
}

socket.on('size', function (data) {
  size = data;
});

window.setup = setup;
window.draw = draw;