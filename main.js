let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

let mouseIsPressed = false;
let mouseX, mouseY, pmouseX, pmouseY;
let size = 5;
let penColour = "black";

requestAnimationFrame(loop);
function loop() {
    // Update Variables

    if (size <= 0) {
        size = 1;
    }

    // circle if mouseIsPressed
    if (mouseIsPressed) {
        ctx.strokeStyle = penColour;
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
        penColour = "black";
    } else if (event.code == "ArrowUp") {
        size += 5
    } else if (event.code == "ArrowDown") {
        size -= 5
    } else if (event.code == "Digit1") {
        penColour = "red";
    } else if (event.code == "Digit2") {
        penColour = "green";
    } else if (event.code == "Digit3") {
        penColour = "blue";
    }
}

document.getElementById("red").addEventListener("click", setRed)
document.getElementById("green").addEventListener("click", setGreen)
document.getElementById("blue").addEventListener("click", setBlue)

function setRed() {
    penColour = "red";
}

function setGreen() {
    penColour = "green";
}

function setBlue() {
    penColour = "blue";
}