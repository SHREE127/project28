

class mango {
    constructor(x,y) {
      var options = {
          'isStatic': true,
          'restitution': 0,
          'friction':1
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      
      this.image = loadImage("mango.png")
      World.add(world, this.body);

      this.width = width;
      this.height = height;
    }
    display(){
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width-1000,this.height-800)
    }
  };
