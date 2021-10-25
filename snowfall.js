const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

  var engine,world;
  var snow1,snow2,snow3,snow4,snow5,snow6,snow7,snow8,snow9,snow10,snow11,snow12;
  var backgroundImg;

function preload()  {
  backgroundImg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();

  snow1=new snow(750,100,10);
  snow2=new snow(725,125,10);
	snow3=new snow(700,150,10);
	snow4=new snow(675,175,10);
	snow5=new snow(650,200,10);
	snow6=new snow(625,225,10);
	snow7=new snow(600,250,10);
	snow8=new snow(575,275,10);
	snow9=new snow(550,300,10);
	snow10=new snow(525,325,10);
	snow11=new snow(500,350,10);
	snow12=new snow(475,375,10);

  world = engine.world;
  Engine.run(engine);
}

function draw() {
  background(backgroundImg); 
  Engine.update(engine);

  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  snow9.display();
  snow10.display();
  snow11.display();
  snow12.display();

  drawSprites();
}

function keyPressed(){


  if(keyCode === "space" ){

    Matter.Body.setStatic(snow1.body,false);
    Matter.Body.setStatic(snow2.body,false);
    Matter.Body.setStatic(snow3.body,false);
    Matter.Body.setStatic(snow4.body,false);
    Matter.Body.setStatic(snow5.body,false);
    Matter.Body.setStatic(snow6.body,false);
    Matter.Body.setStatic(snow7.body,false);
    Matter.Body.setStatic(snow8.body,false);
    Matter.Body.setStatic(snow9.body,false);
    Matter.Body.setStatic(snow10.body,false);
    Matter.Body.setStatic(snow11.body,false);
    Matter.Body.setStatic(snow12.body,false);
  }
}