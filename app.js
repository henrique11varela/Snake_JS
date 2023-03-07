const elements = {
    canvas: document.getElementById("canvas"),
    rect: this.canvas.getBoundingClientRect(),
    ctx: this.canvas.getContext("2d"),
    buttonUp: document.getElementById("btn1"),
    buttonLeft: document.getElementById("btn2"),
    buttonRight: document.getElementById("btn3"),
    buttonDown: document.getElementById("btn4")
}



console.log(elements.canvas);
