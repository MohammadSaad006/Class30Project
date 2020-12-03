const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25
var rope;
var stone
var ground1,ground2,ground3
var thread 
var rope

function preload()
{
   
}
function setup() {
	createCanvas(1200, 600);
	engine = Engine.create();
  world = engine.world;
  
  box1=new Level1(420,330,40,40)
  box2=new Level1(455,330,40,40)
  box3=new Level1(490,330,40,40)
  box4=new Level1(520,330,40,40)
  box5=new Level1(400,320,40,40)
  box6=new Level1(550,320,40,40)
  box7=new Level1(570,320,40,40)
  box8=new Level1(780,190,30,30)
  box9=new Level1(800,190,30,30)
  box10=new Level1(820,190,30,30)
  box11=new Level1(840,190,30,30)
  box12=new Level1(860,190,30,30)
  
  box20=new Level4(455,300,40,40)
  box21=new Level4(490,300,40,40)
  box22=new Level4(520,300,40,40)

  box13=new Level2(420,300,40,40)
  box14=new Level2(455,300,40,40)
  box15=new Level2(490,300,40,40)
  box16=new Level2(520,300,40,40)
  box17=new Level2(550,300,40,40)
  box18=new Level2(820,170,30,30)

  box19=new Level3(490,190,40,40)

  
  box23=new Level4(800,180,30,30)
  box24=new Level4(820,180,30,30)
  box25=new Level4(840,180,30,30)
 
  stone=new StoneH(150,200,50,50)
   
  ground1=new Ground(500,350,400,20)
  ground2=new Ground(830,199,200,20)
  ground3=new Ground(600,580,1200,20)
  rope = new SlingShot(stone.body,{x:150, y:200});

  }
  function draw() {
	background(0);  
	Engine.update(engine);

  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  
  
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()

  box19.display()
  
  box20.display()
  box21.display()
  box22.display()
  box23.display()
  box24.display()
  box25.display()

  stone.display()
  rope.display()
  

  ground1.display()
  ground2.display()
  ground3.display()
	fill(255,255,255)
	textSize(15);
	text("Drag the Hexagonal Stone and realease it,to launch it towards the blocks",40,40);
  }
  function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope.fly();
}

function keyPressed(){
  if(keyCode===32){ 
    Matter.Body.setPosition(stone.body,{x:150,y:200}); 
    rope.attach(stone.body) 
  }
}


