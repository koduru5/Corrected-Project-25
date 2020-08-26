class Dustbin {
    constructor(x, y, width, height) {
      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
      this.image = loadImage("dustbin.png");
    }
    display(){
      var dustbinpos = this.body.position;
      push();
      translate(dustbinpos.x,dustbinpos.y);
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);
      pop();
    }
  };