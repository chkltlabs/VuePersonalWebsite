let s;
let scl = 20; //Sets the scale of the grid in which both the snake and the food spawn
let food;

/**
 * Required by p5.js, called on page load
 */
function setup(){
    createCanvas(600, 600);
    s = new Snake();
    frameRate(8); //effectively sets the 'pace' of the game, renders (int) frames per second
    pickLocation(); //creates first piece of food
}

/**
 * Required by p5.js, called every frame rendered.
 */
function draw() {
    background(51);

    s.death();
    s.update();
    s.show();

    if(s.eat(food)){
        pickLocation();
    }

    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
}

/**
 * Picks the next location for a food block at random, excluding squares currently occupied by the Tail array of the Snake.
 */
function pickLocation(){
    let cols = floor(width/scl);
    let rows = floor(height/scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
    for (let i = 0; i < s.tail.length; i++) {
        if(food.x === s.tail[i].x && food.y === s.tail[i].y){
            pickLocation();
        }
    }
}

/**
 * Built in function to p5.js, is automatically called on all key press events.
 * keyCode informs which key was pressed, and if the direction is doable without doubling back, calls the dir() function.
 */
function keyPressed(){
    switch (keyCode) {
        case UP_ARROW:
            if(s.currentDir() !== 'vertical') {
                s.dir(0, -1);
            }
            break;
        case DOWN_ARROW:
            if(s.currentDir() !== 'vertical') {
                s.dir(0, 1);
            }
            break;
        case LEFT_ARROW:
            if(s.currentDir() !== 'horizontal') {
                s.dir(-1, 0);
            }
            break;
        case RIGHT_ARROW:
            if(s.currentDir() !== 'horizontal') {
                s.dir(1, 0);
            }
            break;
        default:
            break;
    }
}

