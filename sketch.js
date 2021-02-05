
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render= Matter.Render;
var Paper, ground, Dustbin;

function preload()
{
	
}

function setup() {
  createCanvas(1300, 700);
  engine = Engine.create();
	world = engine.world;

ground= new Ground(width/2, 670, width, 20);
Paper= new paper(200,450,40);
Dustbin= new dustbin(1000, 650);
	
var render= Render.create({
  element:document.body,
  engine:engine,
  options:{
    width: 1200,
    height: 700,
    wireframes: false
  }
});
		Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  
  background(0);

  
 ground.display();
  Paper.display();
  Dustbin.display();
  
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(Paper.body, Paper.body.position,{x:200, y:140});
}
}




