
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var cage1,cage2,cage3;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	

paper = new Paper(100,490,20);
ground = new Ground(800,500,1600,40);
cage1 = new cage(1400,420,10,100);

  
}


function draw() {
  rectMode(CENTER);
  keyPressed();
  background(0);
  



  paper.display();
  ground.display();
  cage1.display();



  


  drawSprites();
 
}

function keyPressed(){
	
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:2 ,y:-14});
		
	}
}













