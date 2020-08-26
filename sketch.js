
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

	


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,height,800,20);

	//Create the Bodies Here.
	box1= new Dustbin(440, 300, 200, 20);
	

	paperObject= new Paper(100,610,70);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  box1.display();
  paperObject.display();
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(PaperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}



