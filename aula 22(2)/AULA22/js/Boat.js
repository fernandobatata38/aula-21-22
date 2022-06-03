class Boat {
    constructor(x, y, width, height, boatPos, animacao) {

      this.animation = animacao;
      this.speed = 0.5;

      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
      this.boatPosition = boatPos;
      this.image = loadImage("./assets/boat.png");
      this.isBroken=false
      World.add(world, this.body);

    }
  
  
    display() {
      var angle = this.body.angle;
      var pos = this.body.position;

      var index = floor(this.speed % this.animation.length);
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.animation[index], 0, this.boatPosition, this.width, this.height);
      pop();
    }
    
    pshiuiiiiiim (indice){
      this.animation=animacao_quebrado;
      this.speed=0.05;
      this.width=300;
      this.height=300;
      this.isBroken=true
      setTimeout(()=>{
        Matter.World.remove(world,barcos[indice].body);
        delete barcos[indice];
      },2000);
    }

    relampago_marquinhos() {
      this.speed += 0.05;
    }

  }
