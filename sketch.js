
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper;
var dustbin1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 ground = new Ground(600,370,1200,20);
	 
	 dustbin1 = new DustBin(1000,280,150,170);

	 paper= new Papero(150,250,70);
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  console.log(paper.x);

   ground.display();
   paper.display();
   dustbin1.display();
}

function keyPressed()
{
if(keyCode === UP_ARROW)
{
Matter.Body.applyForce(paper.body,paper.body.position,{x:125,y:-135});

}

}

