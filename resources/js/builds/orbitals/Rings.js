class Rings {

 constructor(planet, maxWidthFromCenter, minWidthFromCenter, maxHeightFromCenter, minHeightFromCenter, color){
   this.planet = planet;

   this.maxWidth = convert(planet, maxWidthFromCenter);
   this.minWidth = convert(planet, minWidthFromCenter);
   this.maxHeight = convert(planet, maxHeightFromCenter);
   this.minHeight = convert(planet, minHeightFromCenter);

   //console.log(this.minHeight);
   this.color = color;

   function convert(planet, param){
     return planet.d + (param*2)/distanceScale
   }
 }



 show(){
   for(let i = this.minHeight,
         j = this.minWidth;
       i <= this.maxHeight;
       i += (this.maxHeight - this.minHeight) / 10,
         j += (this.maxWidth - this.minWidth) / 10){
     stroke(this.color);
     noFill(50);
     ellipse(this.planet.x, this.planet.y, j*2, i*2);
   }

 }


}