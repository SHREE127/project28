/*class stone{

    constructor(x,y){

        var options={

            'isStatic': false,
            'restitution': 0,
            'friction':1,
            'density': 1.2
            
        }

        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);

        this.image= loadImage("stone.png");

        this.width = width;
        this.height = height;
    }

    display(){

        var pos = this.body.position

        imageMode(CENTER);
        image(this.image,pos.x,pos.y,50,50);
    }
}
*/

class stone {
    constructor(x,y) {
      var options = {
        'isStatic': true,
        'restitution': 0,
        'friction':1,
        'density': 1.2
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      
      this.image = loadImage("stone.png")
      World.add(world, this.body);

      this.width = width;
      this.height = height;
    }
    display(){
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width-800,this.height-650)
    }
  };
