class Box{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true,density:2.0});
        this.width=width;
        this.height=height;
        World.add(myworld,this.body);

    }
    display(){
        var pos=this.body.position;
      rectMode(CENTER);
      fill("red");
      noStroke();
      rect(pos.x,pos.y,this.width,this.height);

    }
}