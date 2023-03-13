// TODO: check food coords with snake
// TODO: snake colisions

class Snake {
    constructor(resolution, snakeColor, foodColor) {
        this.resolution = resolution;
        this.snakeColor = snakeColor;
        this.foodColor = foodColor;
        this.headX = Math.floor(resolution / 2);
        this.headY = Math.floor(resolution / 2);
        this.body = [new Pixel(this.headX, this.headY, this, this.snakeColor), new Pixel(this.headX, this.headY + 1, this, this.snakeColor)];
        this.direction = "U"; // U L R D
        this.directionOld = "U"; // U L R D
        this.speed = 10;
        this.score = 0;
        this.food = new Pixel(Math.floor(Math.random() * this.resolution), Math.floor(Math.random() * this.resolution), this, this.foodColor);
    }

    add() {
        this.body.unshift(new Pixel( this.headX, this.headY, this, this.snakeColor))
    }

    update(context) {
        this.directionOld = this.direction;
        //Direction
        if (this.direction == "U") {
            this.headY--;
        } else if (this.direction == "L") {
            this.headX--;
        } else if (this.direction == "R") {
            this.headX++;
        } else {
            this.headY++;
        }

        //WRAP
        if (this.headY < 0) {
            this.headY = this.resolution - 1;
        } else if (this.headY >= this.resolution) {
            this.headY = 0;
        }
        if (this.headX < 0) {
            this.headX = this.resolution - 1;
        }else if (this.headX >= this.resolution) {
            this.headX = 0;
        }

        // MOVE
        this.add();
        if (this.headX != this.food.X || this.headY != this.food.Y) {
            this.body.pop();
        }
        else {
            this.food = new Pixel(Math.floor(Math.random() * this.resolution), Math.floor(Math.random() * this.resolution), this, this.foodColor);
            /* difficultyUp(); */
            this.score++;
            if (this.score % 5 == 0) {
                difficultyUp();
            }
        }
    }

    draw(context) {
        context.clearRect(0, 0, elements.canvas.width, elements.canvas.height);
        this.body.forEach(element => {
            element.draw(context);
        });
        this.food.draw(context);
    }

    compare(p) {
        this.body.forEach((part) => {
            if (p.X == part.X && p.Y == part.Y) {
                return true;
            }
        });
        return false;
    }
}