document.getElementById("idLogicV").innerHTML = "Logic level version: 2017.11.01.0"

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

context.beginPath();
context.moveTo(10, 10);
context.lineTo(100, 200);
context.lineTo(200, 100);
context.stroke();
