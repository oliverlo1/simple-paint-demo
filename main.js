let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

let mouseIsPressed = false;
let mouseX, mouseY, pmouseX, pmouseY;
let size = 5;
let penColor = "black";

requestAnimationFrame(loop);
function loop() {
    // Update Variables

    if (size <= 0) {
        size = 1;
    }

    // circle if mouseIsPressed
    if (mouseIsPressed) {
        ctx.strokeStyle = penColor;
        ctx.lineWidth = size;
        ctx.beginPath();
        ctx.moveTo(pmouseX, pmouseY);
        ctx.lineTo(mouseX, mouseY);
        ctx.stroke();
    }

    requestAnimationFrame(loop);
}

document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("mousemove", mousemoveHandler);
document.addEventListener("keydown", keydownHandler);

function mousedownHandler() {
    mouseIsPressed = true;
}

function mouseupHandler() {
    mouseIsPressed = false;
}

function mousemoveHandler(event) {
    // Save previous mouse x and y
    pmouseX = mouseX;
    pmouseY = mouseY;

    let cnvRect = cnv.getBoundingClientRect();
    mouseX = event.x - cnvRect.left;
    mouseY = event.y - cnvRect.top;
}

function keydownHandler(event) {
    if (event.code == "Space") {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, cnv.width, cnv.height);
        penColor = "black";
    } else if (event.code == "ArrowUp") {
        size += 5;
    } else if (event.code == "ArrowDown") {
        size -= 5;
    } else if (event.code == "Digit1") {
        penColor = "red";
    } else if (event.code == "Digit2") {
        penColor = "green";
    } else if (event.code == "Digit3") {
        penColor = "blue";
    }
}

document.getElementById("red").addEventListener("click", setRed);
document.getElementById("green").addEventListener("click", setGreen);
document.getElementById("blue").addEventListener("click", setBlue);
document.getElementById("color-picker").addEventListener("change", changeColor);

function setRed() {
    penColor = "red";
}

function setGreen() {
    penColor = "green";
}

function setBlue() {
    penColor = "blue";
}

function changeColor() {
    penColor = document.getElementById("color-picker").value;
}