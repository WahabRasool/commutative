//#mathober2024
const bgCol = "#447abd";
const gCol = "#a2c2e8";
const nGrid = 20;
let w, d1;
let gSpace;
let elements = [];

function setup() {
  w = max(400, min(windowWidth, windowHeight) * 0.9);
  gSpace = (w / nGrid) * 0.95;
  describe(
    "a gradient on the left drawn with long rectangles and then the same rectangles shuffled on the right every 20 frames. It feels like a ticker. On a blueprint design."
  );
  createCanvas(w, w);
  rectMode(CENTER);

  d = w;
  angleMode(DEGREES);
  textSize(16);
  d1 = (w - gSpace) / gSpace;
  r = 4 * gSpace;
  for (let i = 0; i < nGrid - 1; i++) {
    elements[i] = (1 / d1) * i;
  }
  shuf = shuffle(elements);
}

function draw() {
  background(bgCol);
  translate(w / 2, w / 2);
  drawGrid();
  t = frameCount / 3;
  stroke(255, 255, 255);
  strokeWeight(5);
  strokeWeight(1);
  line(0, -w / 2 + gSpace, 0, w / 2 - gSpace);
  if (int(t) % 20 === 0) {
    shuf = shuffle(elements);
  }
  for (let i = 0; i < elements.length; i++) {
    noStroke();
    fill(68 * elements[i], 122 * elements[i], 189 * elements[i], 150);
    rect(
      -w / 2 + gSpace * 1.25 + (i * gSpace) / 2,
      0,
      gSpace / 2,
      w - 2 * gSpace
    );

    fill(68 * shuf[i], 122 * shuf[i], 189 * shuf[i], 150);
    rect(gSpace / 4 + (i * gSpace) / 2, 0, gSpace / 2, w - 2 * gSpace);
  }

  noStroke();
  fill(gCol);
  text("commutative", -w / 2 + 10, w / 2 - 5);
}

function drawGrid() {
  stroke(gCol);
  strokeWeight(0.3);
  for (let i = 1; i <= nGrid; i++) {
    for (let j = 1; j <= nGrid; j++) {
      line(
        -w / 2 + gSpace * i,
        -w / 2 + gSpace,
        -w / 2 + gSpace * i,
        w / 2 - gSpace
      );
      line(
        -w / 2 + gSpace,
        -w / 2 + gSpace * i,
        w / 2 - gSpace,
        -w / 2 + gSpace * i
      );
    }
  }
  noFill();
  strokeWeight(3);
  rect(0, 0, w - 2 * gSpace);
}

function mousePressed() {
  setup();
  draw();
}
function windowResized() {
  setup();
  draw();
}
