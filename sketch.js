
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint


var ground,stand1,stand2,polygonBall,slingshot;



function setup(){

      createCanvas(1600,800);

      engine = Engine.create();
      world = engine.world;

      ground = new Ground(width/2,height-50,width,50);
      stand1 = new Ground(640,600,200,30);
      stand2 = new Ground(1000,300,200,30);


      //stand1 level1
      block11 = new Block(640,567,143,210,239);
      block12 = new Block(620,567,143,210,239);
      block13 = new Block(600,567,143,210,239);
      block14 = new Block(580,567,143,210,239);
      block15 = new Block(660,567,143,210,239);
      block16 = new Block(680,567,143,210,239);
      block17 = new Block(700,567,143,210,239);

      //stand1 level2
      block21 = new Block(640,532,248,207,215);
      block22 = new Block(620,532,248,207,215);
      block23 = new Block(600,532,248,207,215);
      block24 = new Block(660,532,248,207,215);
      block25 = new Block(680,532,248,207,215);

      //stand1 level3
      block31 = new Block(640,496,92,214,215);
      block32 = new Block(620,496,92,214,215);
      block33 = new Block(660,496,92,214,215);


      //stand1 level4
      block41 = new Block(640,461,141,140,141);


      //stand2 level1
      block211 = new Block(1000,250,143,210,239);
      block212 = new Block(980,250,143,210,239);
      block213 = new Block(960,250,143,210,239);
      block214 = new Block(1020,250,143,210,239);
      block215 = new Block(1040,250,143,210,239);


       //stand2 level2
       block221 = new Block(1000,225,92,214,215);
       block222 = new Block(980,225,92,214,215);
       block223 = new Block(1020,225,92,214,215);


       //stand2 level3
      block231 = new Block(1000,185,141,140,141);


      polygonBall = new Stone(200,650);
      slingshot = new constraintString(polygonBall.body,{x:200,y: 400})

    
     

}


function draw(){

    Engine.update(engine);
    background(0);

    ground.display();
    stand1.display();
    stand2.display();

    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();


    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();


    block31.display();
    block32.display();
    block33.display();


    block41.display();

    block211.display();
    block212.display();
    block213.display();
    block214.display();
    block215.display();

    block221.display();
    block222.display();
    block223.display();

    block231.display();


    polygonBall.display();

    slingshot.display();
   
    textSize(20)
    fill(200)
    noStroke();
    text("Drag the hexagonal stone and release it",200,200)
}

function mouseDragged(){  
    Matter.Body.setPosition(polygonBall.body,{x: mouseX, y: mouseY})   
}

function mouseReleased(){
    slingshot.fly();
  }

  function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygonBall.body);
    }
  }