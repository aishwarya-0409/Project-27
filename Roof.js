class Roof{
    constructor(x,y,width,height){

        var options= {
            isStatic:true
        }

        this.roofObject=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.roofObject);
        this.width=width;
        this.height=height;
    }

    display(){
        rectMode(CENTER);
        //fill("yellow");
        //stroke(0);

        rect(this.roofObject.position.x,this.roofObject.position.y,this.width,this.height);
    }
}
