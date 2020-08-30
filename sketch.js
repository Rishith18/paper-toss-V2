
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground, dustbin1, dustbin2, dustbin3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	paper = new Paper(50,650);
	ground = new Ground();

	dustbin1 = new Dustbin(600,650,10,85);
	dustbin2 = new Dustbin(660,687,110,10);
	dustbin3 = new Dustbin(720,650,10,85);

	keyPressed();
}


function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();

  paper.display();
  ground.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-65});
	}
}


