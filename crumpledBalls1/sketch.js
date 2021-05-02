
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

 
var paper,groundobg,box1,box2,box3

function preload()
{
	
}

function setup(){
	createCanvas(1600,700);
rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	
 paper= new Paper(500,20,51)
groundobg=new Ground(800,670,1600,20)
box1= new Dustbin(930,630)
box2= new Dustbin1(1000,670)
box3= new Dustbin(1080,630)





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  
  


  paper.display()
 groundobg.display()
 box1.display()
 box2.display()
 box3.display()
}

function keyPressed(){

  if(keyCode===32){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-100})
    
      }
}



