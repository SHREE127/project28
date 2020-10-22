const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stoneObj, boy, ground, treeObj;
var mango1, mango2, mango3, mango4, mango5;

function preload()
{
	boyIMG = loadImage("boy.png");

}

function setup() {
	createCanvas(900, 700);

	var boy = createSprite(130,600);
	boy.addImage(boyIMG);
	boy.scale= 0.1

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,height-20,width,20);

	stoneObj = new stone(90,545);

	mango1 = new mango(467,380);
	mango2 = new mango(541,441);
	mango3 = new mango(670,360);
	mango4 = new mango(590,280);
	mango5 = new mango(760,352);

	treeObj = new tree(600,450); 

	rope1= new ropw(stoneObj.body,{x:90,y:545})

	Engine.run(engine);
  
}


function draw() {

	detectollision();

  background("pink");
  ground.display();

  treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  drawSprites();

  stoneObj.display();

  detectollision(stoneObj,mango1)
  detectollision(stoneObj,mango2)
  detectollision(stoneObj,mango3)
  detectollision(stoneObj,mango4)
  detectollision(stoneObj,mango5)

 // console.log(mouseY)
  
}

function mouseDragged(){

	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});


}

function mouseReleased(){

	rope.fly();
}

function detectollision(Lstone, Lmango)

mangoBodyPosition = Lmango.body.position 
stoneBodyPosition = Lstone.body.position

var distance=(stoneBodyPosition.x, stoneBodyPosition.y,
			  mangoBodyPosition.x, mangoBodyPosition.y)

if (distance>=Lmango.r+Lstone.r){

Matter.Body.setStatic(Lmango.body, false);

}

function keyPressed(){
    if(keyCode === 32){
	    
	    Matter.Body.setPosition(stoneObj.body,{x:90, y:545});
	    rope1.attach(stoneObj.body);
    }
}