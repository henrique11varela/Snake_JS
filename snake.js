class Snake {
    constructor() {
        this.body = [];
        this.direction = -1;
        this.speed = 10;
        this.score = 0;
    }
    draw(context) {
        this.body.forEach(element => {
            element.draw(context);
        });
    }

}