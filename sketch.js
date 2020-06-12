var base,ball,string1,ball1;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
    engine = Engine.create();
  world = engine.world;
    createCanvas(500,500);
   
base = new Base (250,100,250,30);
ball = new Ball (250,150,40);
ball1 = new Ball(100,150,40);
string1 = new String(ball,ball1);
}

function draw() {
    background("green");
    Engine.update(engine);
    base.display();
    ball.display();
    ball1.display();
    string1.display();

}