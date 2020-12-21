class Sun {
  constructor(size, color, labelText, ringMult = 1){
    this.x = mid;
    this.y = 0;
    this.d = size/bodyScale;
    this.color = color;
    this.labelName = labelText;
    this.ringMult = ringMult;
  }


  show(){
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.d);

  }

}