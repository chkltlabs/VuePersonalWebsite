class Moon {
  constructor(planet, distanceFromPlanetSurface, diameter, color, daysInYear, labelText = 'moon', eccentricity = 0){
    this.planet = planet;
    this.x = this.planet.x;
    this.y = this.planet.y;
    this.orbitHt = Math.floor(this.planet.d + (distanceFromPlanetSurface*2)/distanceScale);
    this.orbitX = this.orbitHt *(1 - eccentricity);
    this.orbitY = this.orbitHt *(1 + eccentricity);
    this.size = diameter/bodyScale;
    this.color = color;
    this.theta = 0;
    this.thetaChange = (360/daysInYear) * (Math.PI/180) * speed;
    this.labelText = labelText;

  }

  orbit(){
    this.x = this.orbitX * Math.cos(this.theta) + this.planet.x;
    this.y = this.orbitY * Math.sin(this.theta) + this.planet.y;
    this.theta += this.thetaChange * stopper;
    if(this.theta > 6.28319){this.theta = 0;}
  }

  show(){
    //orbital path
    stroke(255);
    noFill();
    ellipse(this.planet.x, this.planet.y, this.orbitX *2, this.orbitY * 2);

    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size);
    this.orbit();

    textSize(Math.max(this.size * 2, 7));
    text(this.labelText, this.x, this.y - (this.size));
  }
}