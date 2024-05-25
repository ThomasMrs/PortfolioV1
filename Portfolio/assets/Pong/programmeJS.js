let texte = ["Created by Thomas", "PONG 2022"];
let v; // vitesse
let txt = 0;
let ytxt = 500;
let x = 100;
let x2 = 900;
let y = 200; // rectangle 1
let y2 = 200; // rectangle 2
let ligne = 0;
let xballe = 500; // x de la balle
let yballe = 250; // y de la balle
let mb1 = 5; // moteur balle x
let mb2 = 5; // moteur balle y
let score1 = 0;
let score2 = 0;
let st = score1 + score2;
let a = 0; // touche
let w = 0; // touche
let i = 0; // touche
let n = 0; // touche
let plus = 0; // touche
let moins = 0; // touche

function setup() {
  createCanvas(1000, 500);
  noStroke();
}

function draw() {
  background(0, 0, 0);

  // texte animation
  textAlign(LEFT);
  fill(0, 255, 0);
  textSize(20);
  text(texte[txt], ytxt, 490);
  if (ytxt <= 1000) {
    ytxt += 2;
  } else {
    if (txt < texte.length - 1) {
      txt++;
    } else {
      txt = 0;
    }
    ytxt = -200;
  }

  textSize(50);
  fill(255, 255, 255);
  text(score1, 450, 50);
  text(score2, 550, 50);

  // decort
  rect(5, 5, 990, 5);
  rect(5, 490, 990, 5);

  // ligne milieu
  for (let i = 5; i <= 480; i += 30) {
    rect(510, i, 5, 20);
  }

  // rectangles qui bougent
  rect(x, y, 20, 100);
  rect(x2, y2, 20, 100);

  // balle et direction et rebond avec les rectangles
  ellipse(xballe, yballe, 20, 20);
  if (yballe >= 485 || yballe <= 10) {
    mb2 = -mb2;
  }
  if (
    (x > xballe - 20 && x < xballe + 20) &&
    (y > yballe - 100 && y < yballe)
  ) {
    mb1 = -mb1;
    mb2 = -mb2 + 4;
  }
  if (
    (x2 > xballe - 20 && x2 < xballe + 20) &&
    (y2 > yballe - 100 && y2 < yballe)
  ) {
    mb1 = -mb1;
    mb2 = -mb2 - 3;
  }

  // score
  if (xballe >= 985) {
    score1++;
    xballe = 500;
    yballe = 250;
    mb1 = 5;
    mb2 = 5;
  }
  if (xballe <= 10) {
    score2++;
    xballe = 500;
    yballe = 250;
    mb1 = 5;
    mb2 = 5;
  }
  if (score1 === 10 || score2 === 10) {
    score1 = 0;
    score2 = 0;
    xballe = 500;
    yballe = 250;
    mb1 = 5;
    mb2 = 5;
  }

  xballe += mb1;
  yballe += mb2;

  // moteur des directions + vitesse des rectangles
  if (a === 1) {
    y -= 4;
  }
  if (w === 1) {
    y += 4;
  }
  if (i === 1) {
    y2 -= 4;
  }
  if (n === 1) {
    y2 += 4;
  }
  if (plus === 1) {
    mb1++;
    mb2++;
  }
  if (moins === 1) {
    mb1--;
    mb2--;
  }

  // Keep the paddles within the screen
  y = constrain(y, 0, 400);
  y2 = constrain(y2, 0, 400);
}


// direction aw / in
function keyPressed() {
  if (keyCode === 65) {
    a = 1;
  }
  if (keyCode === 87) {
    w = 1;
  }
  if (keyCode === 73) {
    i = 1;
  }
  if (keyCode === 78) {
    n = 1;
  }
  if (keyCode === 187) {
    plus = 1;
  }
  if (keyCode === 189) {
    moins = 1;
  }
}

// direction arrĂȘt
function keyReleased() {
  if (keyCode === 65) {
    a = 0;
  }
  if (keyCode === 87) {
    w = 0;
  }
  if (keyCode === 73) {
    i = 0;
  }
  if (keyCode === 78) {
    n = 0;
  }
  if (keyCode === 187) {
    plus = 0;
  }
  if (keyCode === 189) {
    moins = 0;
  }
}