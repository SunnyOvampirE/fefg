
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var launchingForce=100;
var pologon,pologon_img;


function preload(){
	pologon_img = loadImage("polygon.png")
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
  g1 = new Ground(600,256,300,10);
  g2 = new Ground(1069,396,300,10);
  b1 = new Box(500,216,50,50);
  b2 = new Box(550,216,50,50);
  b3 = new Box(600,216,50,50);

  b4 = new Box(525,166,50,50);
  b5 = new Box(575,166,50,50);

  b6 = new Box(550,141,50,50);

 
  b7 = new Box(1000,350,50,50);
  b8 = new Box(1050,350,50,50);
  b9 = new Box(1100,350,50,50);

  b10 = new Box(1025,300,50,50);
  b11 = new Box(1075,300,50,50);

  b12 = new Box(1050,250,50,50);


  pologon = Bodies.circle(50,400,20);
  World.add(world,pologon);

  imageMode(CENTER);
  image(pologon_img,pologon.position.x,pologon.position.y,40,40);

	//launcherObj=new launcher(pologon.body,{x:50,y:40});
	
	Engine.run(engine);

}

function draw() {

  background(30);

  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
text("("+mouseX+","+mouseY+")",mouseX,mouseY);

 

  
  g1.display();
  g2.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  
  
}

function mouseDragged()
{
	Matter.Body.setPosition(pologon.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherOdj.fly();
   
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(pologon.body, {x:235, y:420}) 
	  launcherObj.attach(pologon.body);
	}
  }

  
  