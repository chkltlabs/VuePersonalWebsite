let sol, mercury, venus, earth, mun, mars, ab1, ab2, ab3, jupiter, io, europa, ganymede, callisto, saturn, satRings, uranus, urRings, neptune, nepRings;
const mid = window.innerWidth/2;
const bodyScale = 12000;
const distanceScale = bodyScale*120;
const speed = 1;
let stopper = 1;
let stuff = [];
function setup() {//all inputs mirror real world statistics on each object
   createCanvas(mid*2, 6500);
   stuff.push(sol       = new Sun(1392684, 'yellow', 'The Sun'));
   stuff.push(mercury   = new Planet(sol,57909000,  4880, 'brown', 88, 'Mercury', 0.2056));
   stuff.push(venus     = new Planet(sol,108160000,  12104, 'orange', 224, "Venus", 0.006772));
   stuff.push(earth     = new Planet(sol,149600000, 12756, 'blue', 365, 'Earth', 0.0167086));
   stuff.push(mun       = new Moon(earth, 385000, 3474, 'white', 30, 'The Moon', 0.05));
   stuff.push(mars      = new Planet(sol,227990000,  6792, 'red', 687, 'Mars', 0.0934));

   stuff.push(ab1       = new Rings(sol,374000000, 299200000,374000000, 299200000, 'brown'));
   stuff.push(ab2       = new Rings(sol, 418880000, 388960000, 418880000, 388960000, 'tan' ));
   stuff.push(ab3       = new Rings(sol,  493680000, 448800000,  493680000, 448800000, 'lightgreen'));

   stuff.push(jupiter   = new Planet(sol,778360000, 142984, 'red', 4332, "Jupiter", 0.0489));
   stuff.push(io        = new Moon(jupiter, 421800, 3645, 'white', 1.77, "Io", 0.0041));
   stuff.push(europa    = new Moon(jupiter, 671100, 3121, 'white', 3.5, "Europa", 0.0094));
   stuff.push(ganymede  = new Moon(jupiter, 1070400, 5268, 'white', 7.15, "Ganymede", 0.0011));
   stuff.push(callisto  = new Moon(jupiter, 1882700, 4820, 'white', 16.69, "Callisto", 0.0074));
   stuff.push(saturn    = new Planet(sol,1433500000, 120536, 'yellow', 10759, 'Saturn', 0.0565));

   stuff.push(satRings  = new Rings(saturn, 180000, 66900, 480000, 74500, 255));

   stuff.push(uranus    = new Planet(sol, 2869000000, 50724, 'grey', 30685, "Uranus", 0.0461));
   stuff.push(urRings   = new Rings(uranus, 51170,51149,51249,51149 , 255));
   stuff.push(neptune   = new Planet(sol, 4497100000, 49244, 'grey', 60189, "Neptune", 0.01));
   stuff.push(nepRings  = new Rings(neptune, 62934,42900,62930,40900 , 255));
}

function mouseClicked() {
  stopper === 1 ? stopper = 0 : stopper = 1;
  console.log(stopper);
}




function draw() {
  let pointer = window.scrollY;
  let blurb = '';
  blurbSetter();
  background(0);
  stuff.forEach(thing => thing.show());
  textSize(50);
  stroke(0);
  fill(255);
  text("Erik's Final", 20, 50);
  textSize(18);
  text("A Scale model of our solar system. \n 1 pixel = " + bodyScale + "km Scale, \n and orbital distances have been further divided by " + distanceScale/bodyScale + " \n Orbital eccentricities are normalized along the vertical axis for viewability, \n and orbital periods have been accelerated equally. \n Click to pause at any time.", 20, 68);

  text("--------- " + Math.floor(pointer) *distanceScale + " KM from Sol Center \n\n" + blurb, window.innerWidth - 500, pointer + 20);


  function blurbSetter(){
    if(pointer*distanceScale < 550000000){
      blurb = 'The Inner Solar System: \n Home to your favorite elevated primates, \n the Inner Solar System harbors the \'Goldilocks Zone\',\n the area where the suns rays do not scorch the earth,\n and also still keep us from freezing. \nIt is the only area where carbon based life can flourish.';
    }else if(pointer*distanceScale >= 550000000 && pointer*distanceScale < 1000000000){
      blurb = 'The Asteroid Belts: \n Home to the dwarf planet Ceres, \nour Asteroid Belt is divided into three distinct bands. \nBetween each band, the resonant frequency of Jupiter\'s \nimmense gravity well has caused orbits to destabilize, \nit\'s victims most often falling into the sun';
    }else if(pointer*distanceScale >= 1000000000 && pointer*distanceScale < 2160000000){
      blurb = 'Though only the 4 largest are represented here, \nJupiter is home to more than 70 Moons!\n These 4 were discovered by Galileo Galilei, \nthe inventor of the modern refracting telescope, in 1609.';
    }else if(pointer*distanceScale >= 2160000000 && pointer*distanceScale < 3300000000){
      blurb = 'Saturn\'s rings are its most distinctive feature, \nvisible from hundreds of millions of kilometers away. \nHowever, they are less than 10 meters thick! \nIf Saturn was the size of a basketball, \nits rings would be over 100 times \nthinner than a single sheet of paper!';
    }if(pointer*distanceScale >= 3300000000 && pointer*distanceScale < 5300000000){
      blurb = 'You might think there isn\'t much out this far, \nand for the most part you\'re right, but there is one major thing. \nThe Solar Wind, a constant stream of radiation and particles \nour Sun is shedding, can still be felt out here. \nNASA has even designed deep space probes that utilize \nsolar sails instead of traditional engines, \nriding the wind like the seafaring explorers of history.';
    }if(pointer*distanceScale >= 5300000000 && pointer*distanceScale < 7000000000){
      blurb = 'Originally, Uranus was not even considered a planet. \nThough it is visible to the naked eye, \ndue to its extremely slow orbit and low lumescence, \nit was thought to be a particularly dim star. \nSir William Herschel discovered that it was \nindeed orbiting the sun on March 13, 1781';
    }
    if(pointer*distanceScale >= 7000000000 ){
      blurb = 'Though he is not credited with its discovery, \nthere is evidence that our old buddy Galileo Galilei \nhad recorded the coordinates of Neptune in his \nnotes as early as December 1612. \nHowever, its observable motion was canceled out \nby its retrograde motion relative to the earth, \nand he simply recorded it as another unnamed star. \n\nIt was formally recognized as a planet when, \namong several competing scientists, \nUrbain Le Verrier published his calculations on \nthe possible motion of Uranus in 1846, and \nJohann Gottfried Galle confirmed his predictions \nto be accurate within a single degree later that year';
    }
  }
}