
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boyIMG,treeIMG,stoneIMG,mangoIMG;

function preload()
{
   boyIMG = loadImage("boy.png");
   treeIMG = loadImage("tree.png");
   stoneIMG = loadImage("stone.png");
   mangoIMG = loadImage("mango.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(800,690,1600,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
 
}



