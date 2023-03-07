class Pixel {
    constructor(x, y, snake, color) {
        this.Snake = snake;
        this.X = x;
        this.Y = y;
        this.color = color
    }
    
    draw(context) {
        context.fillStyle = this.color;
        context.fillRect(this.X * elements.canvas.width / this.Snake.resolution, this.Y * elements.canvas.height / this.Snake.resolution, elements.canvas.width / snake.resolution, elements.canvas.height / snake.resolution);
    }
}