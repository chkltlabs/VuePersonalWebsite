function Snake(){
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];
    /**
     * Checks to see if Snake has eaten food
     * @param       pos         Position of the Food
     * @returns     {boolean}   True if Snake Head overlaps food
     */
    this.eat = function (pos) {
        let d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1){
            this.total++;
            return true;
        } else {
            return false;
        }
    };

    /**
     * sets the direction of the snake's movement
     * @param x     -1 for left, 1 for right, 0 for neutral
     * @param y     -1 for up, 1 for down, 0 for neutral
     */
    this.dir = function (x, y) {
        this.xspeed = x;
        this.yspeed = y;
    };

    /**
     * Called to reset the game on Game Over
     */
    this.reset = function () {
        this.x = 0;
        this.y = 0;
        this.xspeed = 1;
        this.yspeed = 0;
        this.total = 0;
        this.tail = [];
        food = null;
        pickLocation();
    };

    /**
     * checks for various states that would cause a Game Over, and calls the reset() function.
     */
    this.death = function () {
        for (let i = 0; i < this.tail.length; i++) {
            let pos = this.tail[i];
            let d = dist(this.x, this.y, pos.x, pos.y);
            if (d < 1) {
                this.reset();
            }
        }

        if(this.y === height-scl && this.yspeed === 1 ||
            this.x === width-scl && this.xspeed === 1 ||
            this.y === 0 && this.yspeed === -1 ||
            this.x === 0 && this.xspeed === -1){
            this.reset();
        }
    };

    /**
     * Moves snake head and governs the tail array, is called every frame by the draw() function in sketch.js
     */
    this.update = function () {
        //creating the tail array and filling it with vectors
        if (this.total === this.tail.length) {
            for (let i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i + 1];
            }

        }
        this.tail[this.total - 1] = createVector(this.x, this.y);

        //moving the head of the snake to the next position
        this.x = this.x + this.xspeed * scl;
        this.y = this.y + this.yspeed * scl;
        this.x = constrain(this.x, 0, width-scl);
        this.y = constrain(this.y, 0, height-scl)
    };

    /**
     * Governs the render of the Snake Head and Tail pieces, called every frame by the draw() function in sketch.js
     */
    this.show = function () {
        //drawing the tail from the tail array
        fill(255);
        for (let i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        //drawing the head each frame
        fill(255);
        rect(this.x, this.y, scl, scl);
    };

    /**
     * Utility function for informing whether the snake is moving vertically or horizontally
     * @returns {string}    Will be the string 'vertical' or 'horizontal'
     */
    this.currentDir = function () {
        if(this.xspeed === 0){return 'vertical';}
        if(this.yspeed === 0){return 'horizontal';}
    }

}