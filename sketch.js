
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
  
var engine,world;
var ball;
var string;
var bar;

function preload()
{
	
}

function setup() {
	var canvas=createCanvas(800, 700);
   
	engine = Engine.create();
	world = engine.world;
	ball1  = new Ground(400,350,20);
  ball2 = new Ground(430,350,20);
  ball3 = new Ground(460,350,20);
  ball4 = new Ground(490,350,20);
	ball5 = new Ground(520,350,20);
  string1 = new Ground(400,290,2,100);
  string2 = new Ground(430,290,2,100);
  string3 = new Ground(460,290,2,100);
  string4 = new Ground(490,290,2,100);
  string5 = new Ground(520,290,2,100);
	bar = new Ground(463,230,150,20);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
  bar.display();

  drawSprites();
 
}



