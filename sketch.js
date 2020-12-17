var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myworld,myengine,box1,box2,box3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	myengine = Engine.create();
	myworld = myengine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(myworld, packageBody);
	 
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(myworld, ground);
	 
	 box1=new Box(width/2-100,610,20,100);
	 box2=new Box(width/2+140,610,20,100);
	 box3=new Box(width/2+20,660,220,15);
 

	Engine.run(myengine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y; 


  box1.display();
  box2.display();
  box3.display();

  drawSprites();
 
}

function keyPressed() {
if(keyCode===LEFT_ARROW){
	 helicopterSprite.x-=20;
	 Body.translate(packageBody,{x:-20,y:0});
}else if(keyCode===RIGHT_ARROW){
	helicopterSprite.x+=20;
	Body.translate(packageBody,{x:20,y:0});
}



 if (keyCode === DOWN_ARROW) {

	 var angle=packageBody.angle;
	 var pos=packageBody.position;
	  Body.setStatic(packageBody,false);
	 
    
  }
}



