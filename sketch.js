
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinimg;

function preload()
{
 dustbinimg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	dustbin1=new Dustbin (1000,650,200,20);
	dustbin2=new Dustbin (900,620,20,100);
	dustbin3 = new Dustbin (1100,620,20,100);

	ground1 = new Ground (width/2,680,1200,20);

	paper1 = new Paper(200,85,70);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ground1.display();

  paper1.display();

  image(dustbinimg,870,500,250,200);
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:950,y:-950})
	}
}



