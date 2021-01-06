class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
         pointB:{x:this.offsetX,y:this.offsetY}
        }

    this.rope=Constraint.create(options);
    World.add(world,this.rope);

    }

    display(){
        var pntA = this.rope.bodyA.position;
        var pntB = this.rope.bodyB.position;
        strokeWeight(2);
        push();
        fill("blue");
        line(pntA.x,pntA.y, pntB.x+this.offsetX, pntB.y+this.offsetY);
        pop();
    }
}


