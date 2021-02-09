
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;
var ground
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
  FoodGroup=new Group();
  obstacleGroup =new Group();

 
}

function setup() {
  createCanvas(500,500);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  

  ground=createSprite(250,460,1000,20)
  ground.velocityX=-3;
 
  
    
}
function draw() {              
  background(225);
  
  bananaMaker();
  ObstacleMaker ();
  
  if (ground.x<0){
    ground.x=ground.width/2
    
  }
  
  monkey.velocityY=monkey.velocityY+0.8;
  
  
  if (keyDown("Space")){
    monkey.velocityY=-12;
    
  }

  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
   
  }

     
stroke("white");
textSize(20);
stroke("black");
textSize(20)
fill("black");
survivalTime=Math.ceil(frameCount/frameRate());
text ("Survival Time:" +survivalTime, 100, 50);
  
  monkey.collide(ground);
  drawSprites(); 

}
  
function bananaMaker(){ 
    
if(World.frameCount%180===0){
  banana=createSprite(500,200,20,20);
  banana.addImage(bananaImage)
  banana.velocityX=-3; 
  banana.scale=0.1;
  FoodGroup.add(banana);
}

  
}

function ObstacleMaker()
{
  if(World.frameCount%200===0)
  {
    obstacle=createSprite(400,400,20,20)
    obstacle.addImage(obstaceImage);
    obstacle.velocityX=-8;
    obstacle.setLifetime=50;
    obstacleGroup.add(obstacle);
    obstacle.scale=0.3;
   }
}









