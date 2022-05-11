const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var chao, teto, pardir, paresq;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  chao = new Ground(200,395,400,10);
  teto = new Ground(200,5,400,10);
  pardir = new Ground(395, 200, 10, 400);
  paresq = new Ground(5, 200, 10, 400);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  chao.show();
  teto.show();
  pardir.show();
  paresq.show();

}

