class CannonBall
{
    constructor(x,y)
    {
        var options = {
            isStatic: true
        }

        this.raio = 30;
        this.body = Bodies.circle(x,y,this.raio,options);
        this.imagem = loadImage("/assets/cannonball.png");
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
        Body.setStatic(this.body,false);
        Body.setVelocity(this.Body,{x:30, y:-20});
    }
}
