// Ana Luiza Seabra, Ana Beatriz Bento e Vinicius Pessanha Drumond
function setup() {
  createCanvas(800, 600);
  rectMode(CENTER)
}

function draw(){
  background(color(4, 0, 58), 70);
  translate(width/2, height/2); 
  rotate(frameCount * 0.01);

  fill("yellow");
  circle(0,0,100);

  terra();
  mercurio();
}

function terra(){
  push();
  translate(width/4, 0);
  rotate(frameCount * 0.01); 
  fill('blue');
  circle(0,0,50);

  translate(width/12, 0);
  rotate(frameCount * 0.01);
  fill("grey");
  circle(0,0,25);
  pop();
}

function mercurio(){
  push();
  translate(width/10, 0);
  rotate(frameCount * 0.01);
  fill('red');
  circle(0,0,20);
  pop();
}
