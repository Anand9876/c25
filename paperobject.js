class paperoject{
    constructor(x,y,radius){
        var options={
        restitution:0.3,
        friction:0.5,
        density:1.2
        }
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.image=Bodies.circle(this.x, this.y, this.radius/2, options)
        this.Image=loadImage("Sprites/paper.png")
        World.add(world,this.image)
    }
    display(){
        var pos=this.image.position;
        var angle=this.image.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
      ellipse(this.image,0,0,this.radius,this.radius);
        pop();

    }
}

