class tree {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      
      this.image = loadImage("tree.png")
      World.add(world, this.body);

      this.width = width;
      this.height = height;
    }
    display(){
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width-200,this.height-150)
    }
  };
