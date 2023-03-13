const elements = {
    canvas: document.getElementById("canvas"),
    rect: this.canvas.getBoundingClientRect(),
    ctx: this.canvas.getContext("2d"),
    buttonUp: document.getElementById("btn1"),
    buttonLeft: document.getElementById("btn2"),
    buttonRight: document.getElementById("btn3"),
    buttonDown: document.getElementById("btn4")
}

elements.canvas.width = elements.rect.width;
elements.canvas.height = elements.rect.height;
let framerate = 5;
let nextFrame = 1000 / framerate;
let snake = new Snake(20, "rgb(0, 255, 0)", "rgb(255, 0, 0)");
snake.draw(elements.ctx);

//KEYBOARD
window.addEventListener("keydown", (event) => {
    if ((event.key === "w" || event.key === "ArrowUp") && snake.directionOld != "D") {
        snake.direction = "U";
    }
    else if ((event.key === "a" || event.key === "ArrowLeft") && snake.directionOld != "R") {
        snake.direction = "L";
    }
    else if ((event.key === "d" || event.key === "ArrowRight") && snake.directionOld != "L") {
        snake.direction = "R";
    }
    else if ((event.key === "s" || event.key === "ArrowDown") && snake.directionOld != "U") {
        snake.direction = "D";
    }
});

//TOUCH CONTROLS
elements.buttonUp.addEventListener("click", () => {
    if (snake.directionOld != "D") {
        snake.direction = "U";
    }
});
elements.buttonLeft.addEventListener("click", () => {
    if (snake.directionOld != "R") {
        snake.direction = "L";
    }
});
elements.buttonRight.addEventListener("click", () => {
    if (snake.directionOld != "L") {
        snake.direction = "R";
    }
});
elements.buttonDown.addEventListener("click", () => {
    if (snake.directionOld != "U") {
        snake.direction = "D";
    }
});

//DIFICULTY UP
function difficultyUp() {
    framerate++;
    nextFrame = 1000 / framerate;
}

function notify() {
    snake.update(elements.ctx);
    snake.draw(elements.ctx);
}

//LOOP
let lastTime = 0;
let timer = 0;
function animate(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    if (timer >= nextFrame) {
        timer = 0;
        notify();
    } else {
        timer += deltaTime;
    }
    window.requestAnimationFrame(animate);
}

animate(0);
notify();