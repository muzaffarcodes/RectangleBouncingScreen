let xPos = 1;
let yPos = 1;
let xSpeed = 2;
let ySpeed = 2;

let img;

function ihtLogo() {
  img = loadImage('iht.png');
}

function setup(){
  createCanvas(1024,768);
  background(255);
}

function draw(){
  background(8, 83, 140, 255);
  
  rect(xPos, yPos, 160, 160);
  ihtLogo();
  xPos = xPos + xSpeed;
  yPos = yPos + ySpeed;

  if (yPos > 768 - 160){
    ySpeed = ySpeed * -1;
  }

  if (yPos < 0){
    ySpeed = ySpeed * -1;
  }

  if (xPos > 1024 - 160){
    xSpeed = xSpeed * -1;
  }

  if (xPos < 0){
    xSpeed = xSpeed * -1;
  }
}