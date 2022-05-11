class Cannon{
    constructor(x,y,width,height,angle){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.cannonImage=loadImage("assets/canon.png");
        this.cannonBaseseila=loadImage("assets/cannonBase.png");
    }
    display(){
        push();
        translate(this.x,this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.cannonImage,0,0,this.width,this.height);
        pop();
        rect(70,20,200,200);
        noFill();
    }    
}