// EMILY GUZMAN [677535706]
// ART 151 PROJECT 2--> DRAWING MACHINE
// MARCH 3, 2020
// Changing background based on the mouse's position with respect to the x-axis. Variety of floating circles with a centered moving torus

function setup() {
  createCanvas(800, 800,WEBGL);
}

function draw() {
  background(40);

  // bckg_col();

  // noStroke();
  push();
  //   flower at the center of the torus
  noStroke();
  translate(0,0);
  fill("#ff6bff");
  translate(mouseX - 400, mouseY - 400);
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
    rotateX(frameCount * 0.04);
    rotateY(frameCount * 0.04);
  }

  pop();

  push();
  // Establishing variables for the ellipse for loop
  let ellix = 0;
  let elliy = random(0,height);
  let ellidiameter = random(20,90);

  let col_r = random(0,195);
  let col_g = (20,80);
  let col_b = 0;

  // Ellipse for Loop
  for (let i = 0; i <= 1000; i = i + 50){
    noStroke();
    noFill();
    fill(col_r,col_g,col_b,10);
    ellipse(ellix,elliy,20,ellidiameter);
    // rotateX(random(360));
    // rotateY(random(360));
    rotateX(45);
    rotateY(-45);
  }
  pop();

  // Opposite ellipse for Loop
  push();
  for (let i = 0; i <= 1000; i = i + 50){
    noStroke();
    noFill();
    fill(col_b,col_r,col_g,20);
    ellipse(ellix,elliy,20,ellidiameter);
    rotateX(random(360));
    rotateY(random(360));
    // rotateX(-45);
    // rotateY(45);
  }
  pop();

  push();
  // Main spinning torus
  // translate(0,0);
  for (let b = 0; b <= 20; b++){
    noStroke();
    noFill();
    fill(col_r,col_g,col_b,10);
    rotateX(frameCount * 0.04);
    rotateY(frameCount * 0.04);
    // translate(20 + b, 40 + b);
    torus(120,60);

  }
  pop();

  //   spinning torus in the opposite direction
  push();
  // translate(0,0);
  for (let b = 0; b <= 20; b++){
    noStroke();
    noFill();
    fill(col_r,col_g,col_b,10);
    rotateX(frameCount * 0.04);
    rotateY(frameCount * 0.04);
    translate(135, 135);
    torus(120,60);
  }
  pop();

  // Second set of spinning torus
  push();
  // translate(0,0);
  for (let b = 0; b <= 20; b++){
    noStroke();
    noFill();
    fill(col_r,col_g,col_b,10);
    rotateX(frameCount * 0.04);
    rotateY(frameCount * 0.04);
    translate(-135, -135);
    torus(120,60);
  }
  pop();
}

// define function for conditional statement
function arcon(){
  strok(255);
  strokeWeight(3);
  arc(-500, 55, 50, 50, 0, HALF_PI);
  noFill();
  arc(-500, 55, 60, 60, HALF_PI, PI);
  arc(-500, 55, 70, 70, PI, PI + QUARTER_PI);
}

// // keyPressed() for conditional statement
// function keyPressed(){
//   if (keyIsDown(LEFT_ARROW)){
//     arcon();
//   } else (keyIsDown(RIGHT_ARROW)) {
//     clear();
//   }
// }



// Establish variables for the bckg_col function
let r = 190;
let g = 80;
let b = 255;

// bckg_col() will allow the mouse to change the background's color based on the mouse's x coordinate
function bckg_col(){
  // bckg_cols = ["0","#a83232","#a9d6d3","#fff9a6","#a463ff"];

  // background(random(bckg_cols));
  b = map(mouseX, 800, 0, 0, 255);
  background(r,g,b);
}


// STAR SETUP
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function keyTyped() {
  if (key === "m"){
    stroke("#81ff50");
    translate(-300,450)
    for (let i = 0; i < 10; i ++) {
      ellipse(0, 30, 20, 80);
      rotate(PI/5);
      rotateX(frameCount * 0.04);
      rotateY(frameCount * 0.04);
    }
  }
}

function doubleClicked() {
  bckg_col();
}
