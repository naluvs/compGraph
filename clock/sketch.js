let circle = 200;
let points = 12;

let px = 0;
let py = 0;

let h, m, s;
let radius, minuteRadius, hoursRadius, secondsRadius;

function setup(){
  createCanvas(900, 700);

  radius = width/4;
  minuteRadius = 0.7 * radius;
  hoursRadius = 0.4 * radius;
  secondsRadius = 0.9 * radius;
}

function draw(){
  background(100);
  translate(width/2, height/2); 

  strokeWeight(5); 
  stroke('black'); 
  ellipse(0,0,radius*2);

  strokeWeight(10);
  point(0,0);

  beginShape();
  for(let i = 0; i < points; i++){
    let angle = map(i,0,points,0,TWO_PI)-PI/3; 
    noStroke();
    textSize(24);
    textAlign(CENTER, CENTER);
    text(i+1, circle*cos(angle), circle*sin(angle));
  }
  endShape();

  s = second();
  m = minute()+s/60;
  h = hour()%12+m/60;

  minutePointer();
  hourPointer();
  secondPointer();
}

function minutePointer(){
  angm = map(m, 0, 60, 0, TWO_PI)-HALF_PI;

  px = minuteRadius * cos(angm);
  py = minuteRadius * sin(angm);

  stroke('black');
  line(0,0, px, py);
}

function hourPointer(){
  angh = map(h, 0 , 12, 0, TWO_PI)-HALF_PI;

  px = hoursRadius * cos(angh);
  py = hoursRadius * sin(angh);

  stroke('black');
  line(0,0, px, py);
}

function secondPointer(){
  angs = map(s, 0 , 60, 0, TWO_PI)-HALF_PI;

  px = secondsRadius * cos(angs);
  py = secondsRadius * sin(angs);

  stroke('black');
  strokeWeight(5);
  line(0,0, px, py);
}
