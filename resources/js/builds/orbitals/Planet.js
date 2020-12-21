class Planet {
  constructor(sun, distanceFromSun, diameter, color, daysInYear, labelText = 'planet', eccentricity = 0){
    this.sun = sun;
    this.orbitHt = Math.floor(this.sun.d + (distanceFromSun * 2)/distanceScale);
    //console.log(labelText + " new orbit avg diameter is " + this.orbitHt + "px");
    this.x = mid - this.orbitHt;
    this.y = 0;
    this.d = Math.floor(diameter/bodyScale);
    this.color = color;
    //eccentricity is defined as the percentage difference between the highest(and lowest) point in an orbit and the average height of that orbit. If it is 0, that orbit is circular.
    this.orbitX =  this.orbitHt *(1 - eccentricity);
    this.orbitY =  this.orbitHt *(1 + eccentricity);
    //theta is the position in the orbit measured in radians. 1.5708 places the planet's start at the "southern" extreme of its orbit
    this.theta = 1.5708;
    //this is the formula for conversion of earth's year to each planet's year, based on the conversion from degrees to radians
    this.thetaChange = (365.24/daysInYear) * (Math.PI/180) * speed;
    this.labelText = labelText;
  }

  orbit(){
    this.x = this.orbitX * Math.cos(this.theta) + mid;
    this.y = this.orbitY * Math.sin(this.theta);
    this.theta += this.thetaChange * stopper;
    if(this.theta > 6.28319){this.theta = 0;}
  }
  show(){
    this.orbit();

    //orbital path
    stroke(255);
    noFill();
    ellipse(mid, 0, this.orbitX *2, this.orbitY * 2);

    //planet
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.d);

    //label
    textSize(Math.max(this.d * 2, 15));
    text(this.labelText, this.x, this.y + 5*(this.d));
  }

}