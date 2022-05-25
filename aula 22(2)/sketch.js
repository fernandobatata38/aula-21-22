const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world, ground;
var imgbackground;
var torre, torreimg;
var canhao;
var angle;


var barcos=[];
var esferas=[];
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
  
 
 
}
function keyReleased(){
  if(keyCode===DOWN_ARROW){
    esferas[esferas.length-1].one_puuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuunchhh();
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
  for(var i=0;i<esferas.length;i++){
    la_vai_bomba(esferas[i]);
  }

  for(var i=0; i<barcos.length; i++){
    if(barcos[i]){
      Body.setVelocity(barcos[i].body,{x:-0.9,y:0});
      barcos[i].display();
    }
  }

}
function keyPressed(){
  if(keyCode===DOWN_ARROW){
    var bolacanhao=new CannonBall(canhao.x,canhao.y);
    esferas.push(bolacanhao);
  }
}
function la_vai_bomba(bola){
  if(bola){
    bola.display();
  }
}
function apareci(){
 if (barcos.length>0){
 
 }
 else {
   var barco=new Boat(width,height-60,170,170,-60);
   barcos.push(barco);
 }
}