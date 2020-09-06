var paper,dustbin1,dustbin2,dustbin3,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(100,150,50)
	dustbin1=new Dustbin(390,600,300,20)
	dustbin2=new Dustbin(250,500,20,200)
	dustbin3=new Dustbin(530,500,20,200)
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  drawSprites();
 paper.display();
 dustbin1.display()
 dustbin2.display()
 dustbin3.display()
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position)
	}
}

