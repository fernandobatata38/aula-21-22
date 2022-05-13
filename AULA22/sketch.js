const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, ground;
var imgbackground;
var torre, torreimg;
var canhao;
var angle;
var bolacanhao;
function preload() {
  imgbackground = loadImage("assets/background.gif");
  torreimg = loadImage("assets/tower.png");
}

function setup() {

  angleMode(DEGREES);
  angle=20;

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  torre = Bodies.rectangle(160,350,160,310,options);
  World.add(world, torre);
 
  canhao=new Cannon(180,110,130,100,angle);
  bolacanhao = new CannonBall(canhao.x, canhao.y);

 
}
function keyReleased(){
  if(keyCode===DOWN_ARROW){
    bolacanhao.one_puuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuunchhh();
  }
}
function draw() {
  background(189);
  Engine.update(engine);
  image(imgbackground,0,0,1200,600);
  rect(ground.position.x, ground.position.y, width *2, 1);
  
  push();
  imageMode(CENTER);
  image(torreimg, torre.position.x, torre.position.y, 160,310);
  pop();
  canhao.display();
  bolacanhao.display();
}
