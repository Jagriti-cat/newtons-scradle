class Ball {
    constructor(x, y,radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
          }
          this.body = Bodies.circle(x, y,radius,options)
          this.width = radius;
          //this.height = height;
          //this.image = loadImage("paper.png");
          World.add(world, this.body);
        
        }
        display(){
          var pos =this.body.position;
          ellipseMode (CENTER);
          push();
          translate(pos.x, pos.y);
          fill("blue");
          ellipse(0, 0, this.width, this.width);
          pop();
        }
      }     