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

var animacaoBarco = [];
var barcoSpritedata, barcoSpritesheet;
var animacao_quebrado=[];
var quebradoSpritedata, quebradoSpritesheet;

function preload() {
  imgbackground = loadImage("assets/background.gif");
  torreimg = loadImage("assets/tower.png");

  barcoSpritedata = loadJSON("assets/boat/boat.json");
  barcoSpritesheet = loadImage("assets/boat/boat.png")
  quebradoSpritedata=loadJSON("assets/boat/brokenBoat.json");
  quebradoSpritesheet=loadImage("assets/boat/brokenBoat.png");
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
  
  var barcoFrame = barcoSpritedata.frames;
  for(var i=0;i<barcoFrame.length; i++){
    var pos = barcoFrame[i].position;
    var img = barcoSpritesheet.get(pos.x, pos.y, pos.w, pos.h);
    
    animacaoBarco.push(img);
  }
  var quebradoFrame=quebradoSpritedata.frames;
  for(var i=0;i<quebradoFrame.length; i++){
    var pos=quebradoFrame[i].position;
    var img=barcoSpritesheet.get(pos.x, pos.y, pos.w ,pos.h);
    animacao_quebrado.push(img);
  }
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
    la_vai_bomba(esferas[i],i);
    piratas_do_caribe(i);
  }

  apareci();

}
function keyPressed(){
  if(keyCode===DOWN_ARROW){
    var bolacanhao=new CannonBall(canhao.x,canhao.y);
    esferas.push(bolacanhao);
  }
}
function la_vai_bomba(bola,index){
  if(bola){
    bola.display();
    if(bola.body.position.x>=width||bola.body.position.y>=height-50){
      bola.pshiuiiiiiim(index);
    }
  }
}
function apareci(){
  if (barcos.length>0){
    if(
      barcos[barcos.length-1] === undefined ||
      barcos[barcos.length-1].body.position.x < width-300
      ){
      var posicoes = [-40,-60,-70,-20];
      var posicao = random(posicoes);
      var barco = new Boat(width, height-100, 170,170,posicao, animacaoBarco);
      
      barcos.push(barco);
    }
    for(var i=0; i<barcos.length; i++){
      if(barcos[i]){
        Body.setVelocity(barcos[i].body,{x:-0.9,y:0});
        barcos[i].display();
        barcos[i].relampago_marquinhos();
      }
    }
  }
  else {
    var barco=new Boat(width,height-60,170,170,-60,animacaoBarco);
    barcos.push(barco);
  }
}
function piratas_do_caribe(index){
  for(var i=0;i<barcos.length; i++){
    if (esferas[index]!==undefined&&barcos[i]!==undefined){
      var colisao=Matter.SAT.collides(esferas[index].body,barcos[i].body);
      if(colisao.collided){
        barcos[i].pshiuiiiiiim(i);
        Matter.World.remove(world,esferas[index].body);
        delete esferas[index];
      }
    }
  } 

}