class Cannon{
    constructor(x, y, w, h, a){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.a = a;
        this.cannonImg = loadImage("./assets/canon.png");
        this.cannonBase = loadImage("./assets/cannonBase.png");
    }

    display(){
        push();
        imageMode(CENTER);
        image(this.cannonImg, this.x, this.y, this.w, this.h);
        pop();

        image(this.cannonBase, 70,20 ,200, 200);
        noFill();
    }
}