'use strict';
const canvas = window.canvas = document.getElementById("drawing");
const video = document.querySelector('video');


canvas.width= 500;
canvas.height= 500;

function drawOn() {
    canvas.width = video.videowidth;
    canvas.height = video.videoheight;
    canvas.getContext("2d").drawImage(video , 0, 0, canvas.width, canvas.height);
}