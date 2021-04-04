var Hour; 
var Minute;
var Seconds; 

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)
}

function draw() {
  background(0);  
  Hour = hour();
  Minute = minute();
  Seconds = second();

  scAngle=map(Seconds, 0,60,0,360);
  mnAngle=map(Minute, 0,60,0,360);
  hrAngle=map(Hour%12,0,12,0,360);

  translate(400,200);
  rotate(-90);
  push();
  rotate(hrAngle);
  strokeWeight(7);
  stroke("red");
  line(0,0,100,0);
  pop();
  noFill();
  stroke("red");
  strokeWeight(7);
  arc(0,0,300,300,0,hrAngle);

  push();
  rotate(mnAngle);
  strokeWeight(7);
  stroke("blue");
  line(0,0,75,0);
  pop();
  noFill();
  stroke("blue");
  strokeWeight(7);
  arc(0,0,280,280,0,mnAngle);

  push();
  rotate(scAngle);
  strokeWeight(7);
  stroke("green");
  line(0,0,60,0);
  pop();
  noFill();
  stroke("green");
  strokeWeight(7);
  arc(0,0,260,260,0,scAngle);

}