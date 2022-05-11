class Ground
{
    constructor(x,y,width,height)
    {
        var options = {
            isStatic: true
        };

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.larg = width;
        this.altu = height;
        World.add(world, this.body);
    }

    show()
    {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        stroke("white");
        fill("black");
        rect(pos.x, pos.y, this.larg, this.altu);
        pop();
    }
}