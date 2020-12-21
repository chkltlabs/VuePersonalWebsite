function CellOld(i, j, w) {
    this.i = i;
    this.j = j;
    this.x = i*w;
    this.y = j*w;
    this.w = w;
    this.nCount = 0;
    this.bomb = false;
    this.revealed = false;
    this.flagged = false;
}

CellOld.prototype.show = function () {
    stroke(0);
    noFill();
    rect(this.x, this.y, this.w, this.w);
    if(this.revealed && !this.flagged){
        if(this.bomb){
            stroke(0);
            fill(127);
            ellipse(this.x + this.w * 0.52,
                this.y + this.w * 0.52,
                this.w * 0.8);
        } else {
            fill(200);
            rect(this.x, this.y, this.w, this.w);
            if(this.nCount > 0) {
                textAlign(CENTER);
                textSize(w * 0.75);
                fill(0);
                text(this.nCount, this.x + this.w * 0.5, this.y + this.w * 0.75);
            }
        }
    } else if (this.flagged){
        fill(color(255, 0, 0));
        stroke(0);
        triangle(this.x + 3, this.y + 3, this.x + w - 3, this.y + 3, this.x + (w / 2), this.y + w - 3);
    }
};

CellOld.prototype.flag = function(){
    if(!this.flagged) {
        this.flagged = true;
        this.flagCheck();
    } else {
        this.flagged = false;
        this.flagCheck();
    }
};

CellOld.prototype.flagCheck = function (){
    let bombsFlagged = 0;
    let extraFlags = 0;
    let totalCells = grid.length * grid[0].length;
    let revealedCells = 0;
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if(grid[i][j].revealed){
                revealedCells++;
            }
            if(grid[i][j].bomb && grid[i][j].flagged){
                bombsFlagged++;
            } else if (grid[i][j].flagged){
                extraFlags++;
            }
        }
    }
    if(bombsFlagged === totalBombs && extraFlags === 0 && revealedCells === totalCells - totalBombs){
        this.win();
    }
};

CellOld.prototype.win = function() {
  document.getElementById('win').style.display = 'block';
};


CellOld.prototype.countBombs = function(){
    if(this.bomb){
        return -1;
    }
    let total = 0;
    for(let xoff = -1; xoff <= 1; xoff++){
        for(let yoff = -1; yoff <= 1; yoff++){
            let i = this.i + xoff;
            let j = this.j + yoff;
            if (i > -1 && i < cols && j > -1 && j < rows) {
                let neighbor = grid[i][j];
                if (neighbor.bomb) {
                    total++;
                }
            }
        }
    }
    this.nCount = total;
};

CellOld.prototype.contains = function (x, y) {
    return (x > this.x && x < this.x + this.w &&
            y > this.y && y < this.y + this.w)

};

CellOld.prototype.reveal = function () {
    this.revealed = true;
    this.flagCheck();
    if (this.nCount === 0 && !this.bomb){
        //flood fill neighboring cells
        this.floodFill();
    }
    if(this.bomb){
        revealAll();
        document.getElementById('wintext').textContent = 'You blew up! :(';
        document.getElementById('win').style.display = 'block';
    }
};

function revealAll() {
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j].revealed = true;

        }
    }
}

CellOld.prototype.floodFill = function () {
    for(let xoff = -1; xoff <= 1; xoff++){
        for(let yoff = -1; yoff <= 1; yoff++){
            let i = this.i + xoff;
            let j = this.j + yoff;
            if (i > -1 && i < cols && j > -1 && j < rows) {
                let neighbor = grid[i][j];
                if (!neighbor.bomb && !neighbor.revealed && !neighbor.flagged) {
                    neighbor.reveal();
                }
            }
        }
    }
};