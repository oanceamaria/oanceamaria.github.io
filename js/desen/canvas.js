document.getElementById("idLogicV").innerHTML = "Logic level version: 2017.11.01.2"

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

context.beginPath();
var w = canvas.getAttribute("width");
var h = canvas.getAttribute("height");
context.arc(w / 2, h / 2, 10, 0, 2 * Math.PI);
context.strokeStyle = "red";
context.stroke();
