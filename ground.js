class Ground {

    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        
        this.x=x;
        this.width=width;
        this.y=y;
        this.height=height;
    }

    display (){
        rectMode(CENTER);
        fill(255);
        rect(this.x,this.y,this.width,this.height);
    }
};