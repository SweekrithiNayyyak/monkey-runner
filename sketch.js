
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,ground;
var score=0;
var invisibleGround;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {

 createCanvas(560,500)
ground=createSprite(100,450,910,10)
  monkey=createSprite(100,390,10,10)
  monkey.addAnimation("atu", monkey_running )
  monkey.scale=0.2
  monkey.collide(ground);
  FoodGroup=new Group();
  obstacleGroup=new Group();
   
  invisibleGround=createSprite(100,450,910,10)
}


function draw() {
  background("lightBlue")
  monkey.collide(invisibleGround)
  if(keyWentDown("space")){
    monkey.velocityY=-9
    
  }
  
  if (keyWentUp("space")){
    monkey.velocityY=9
  }
  if(frameCount % 100 === 0){
    obstacle=createSprite(400,400,10,10)
    obstacle.addImage("atu",obstacleImage)
    obstacle.scale=0.1;
    obstacle.velocityX=-5
    obstacle.lifetime=300;
    obstacleGroup.add(obstacle) ;
    
  }
  if(frameCount%150===0){
      banana=createSprite(300,240,10,10)
    banana.addImage("atu",bananaImage)
    banana.scale=0.2
    banana.velocityX=-5
    banana.lifetime=300;
               
  FoodGroup.add(banana)
  }
  
  
  if (monkey.isTouching(FoodGroup)){
    score=score+1
      FoodGroup.destroyEach();
  }
  if(obstacleGroup.isTouching(monkey)){
    obstacleGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    FoodGroup.setVelocityXEach(0);
    
  }
   text("Score:"+ score, 300,50);
 drawSprites() ;
}







