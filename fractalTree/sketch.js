var angle = 0;
var slider;

function setup(){
  createCanvas(400, 400);
  slider = createSlider(0, TWO_PI, PI/4, 0.01);
}

function draw(){
  background(51);

  angle = slider.value()

  stroke('rgb(0,200,0)');
  translate(200,height);
  branch(100)
}

function branch(len){
  stroke_weight = map(len, 2, 100, 1, 10);
  strokeWeight(stroke_weight);
  
  line(0, 0, 0, -len);
  translate(0, -len);
  
  if(len>2){ 
    push();
    rotate(angle);
    branch(len*0.67);
    pop();
    push();
    rotate(-angle);
    branch(len*0.67)
    pop();
  }
}
