let pontos = [];
let selecionado = null;
let tMax = 0;
let tInc = 0.05;

function setup() {
  frameRate(5);
  createCanvas(600, 600);
  pontos = [
    createVector(10, height / 2),
    createVector(width - 10, height / 2),
    createVector(width / 2, height - 10)
  ];
}

function ponto(A) {
  circle(A.x, A.y, 10);
}

function combina(A, B, t) {
  return { x: (1 - t) * A.x + t * B.x, y: (1 - t) * A.y + t * B.y };
}

function draw() {
  let [A, B, C] = pontos;
  let D, E, F;
  background(200);
  noFill();
  line(A.x, A.y, C.x, C.y);
  line(B.x, B.y, C.x, C.y);
  beginShape();
  for (let t = 0; t <= tMax; t += 0.05) {
    D = combina(A, C, t);
    E = combina(C, B, t);
    F = combina(D, E, t);
    vertex(F.x, F.y);
  }
  //vertex(B.x,B.y);
  D = combina(A, C, tMax);
  E = combina(C, B, tMax);
  F = combina(D, E, tMax);
  fill("#00ff00")
  ponto(D);
  ponto(E);
  ponto(F);
  line(D.x, D.y, E.x, E.y);
  noFill();
  endShape();
  desenhaPontos();
  tMax += tInc;
  if (tMax >= 1.0 || tMax <= 0) {
    tInc = -tInc;
  }

}

function desenhaPontos() {
  let vmouse = createVector(mouseX, mouseY);
  selecionado = null;
  for (let p of pontos) {
    if (vmouse.dist(p) < 10) {
      selecionado = p;
      fill("#ff0000");
    } else {
      fill("#ffffff");
    }
    ponto(p);
  }
}

function mouseDragged() {
  if (selecionado) {
    selecionado.set(mouseX, mouseY);
  }
}
