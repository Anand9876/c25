class ground extends BaseClass{
    constructor(x,y){
        super(x,y,50,50)
    }
    display(){
        this.body.position.x=x;
        this.body.position.y=y;
        super.display();
    }
}