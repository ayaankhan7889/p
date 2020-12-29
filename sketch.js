const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var g1



  function setup() {
  createCanvas(480,800);



  g1 = new ground (500,300,500,20);




  engine = Engine.create();
  world = engine.world;
  
  Engine.run(engine);

}
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

for(var k = 0; k <=width; k = k + 80){
  divisions.push(new divisions(k,height-divisionheight/2,10,divisionHeight));

}
for(var j = 40; j <=width; j=j+50)
{
  plinkos.push(new plinko(j,75));
}
for (var j = 15;j <=width-10; j=j+50)
{
  plinkos.push(new plinko(j,175));
}

function draw() {
  background(255,255,255);  
g1.display();


  drawSprites();
}