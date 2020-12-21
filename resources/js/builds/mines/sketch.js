let placeholder = document.getElementById("placeholder");
let vh = Math.floor(placeholder.getBoundingClientRect().height);
let vw = Math.floor(placeholder.getBoundingClientRect().width);

let grid;
let w = (6 * vh);
let cols;
let rows;
let totalBombs = 10;


function setup() {
    createCanvas((w*10)+1,(w*10)+1);
    cols = floor(width / w);
    rows = floor(height / w);
    grid = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = new Cell(i, j, w);

        }
    }

    for(let n = 0; n < totalBombs; n++){
        let i = floor(random(cols));
        let j = floor(random(rows));
        if(grid[i][j].bomb){
            n--;
        } else {
            grid[i][j].bomb = true;
        }

    }

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j].countBombs();
        }
    }
}

function draw() {
    background(255);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j].show();
        }
    }
}

function make2DArray(cols, rows){
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++){
        arr[i] = new Array(rows);
    }
    return arr;
}

function mousePressed() {
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if (grid[i][j].contains(mouseX, mouseY)) {
                if(keyIsDown(SHIFT)){
                    grid[i][j].flag();
                } else {
                    grid[i][j].reveal();
                }
            }
        }
    }
}


