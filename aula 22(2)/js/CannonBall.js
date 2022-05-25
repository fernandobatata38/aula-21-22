class CannonBall
{
    constructor(x,y)
    {
        var options = {
            isStatic: true
        }

        this.raio = 30;
        this.body = Bodies.circle(x,y,this.raio,options);
        this.imagem = loadImage("assets/cannonball.png");
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        
        push();
        imageMode(CENTER);
        image(this.imagem,pos.x,pos.y,this.raio,this.raio);
        pop();
    }
    one_puuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuunchhh(){
        var newAngle = canhao.angle - 28;
        newAngle = newAngle*(3.14/180);
        
        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(0.5);

        Matter.Body.setStatic(this.body,false);
        Matter.Body.setVelocity(this.body,{
            x:velocity.x * (180/3.14),
            y:velocity.y * (180/3.14)
        });
    }
    pshiuiiiiiim (indice){
        Matter.Body.setVelocity(this.body,{x:0,y:0});
        setTimeout(()=>{
          Matter.World.remove(world,this.body);
          delete esferas[indice];
        },1000);
      }
}
