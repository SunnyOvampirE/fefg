class Box {
  constructor(x,y,width,height) {
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
    }
    this.x=x;
    this.y=y;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(this.x,this.y,width,height,options);
    World.add(world, this.body);
    this.Visibliity = 255;
  }
  display(){
   if(this.boby.speed < 3){
    var pos =this.body.position;
    push();
    rectMode(CENTER);
    fill("green");
    rect(pos.x, pos.y, this.width, this.height);
    pop();
  }
   else{
     World.remove(world, thid.boby);
     Push();
     this.Visibliity = this.Visibliity - 5;
     Tint(255,this,Visiblity);
     Pop();
   }
    
  }
};

