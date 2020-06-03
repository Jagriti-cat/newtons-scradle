class string {
    constructor (bodyA,bodyB){
var options = {
 bodyA : bodyA,
 pointB : bodyB,
 stiffness : 0.5,
 length : 10
}

this.string = Constraint.create(options) ;
World.add(world,this.string)  ;

}

 display(){
var pointA = this.string.bodyA.position;
var pointB = this.string.pointB; 
line (pointA.x,pointA.y,pointB.x,pointB.y);

 }


}