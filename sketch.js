var ground
var monkey, monkey_running
var banana,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup, bananaGroup
var score = 0;
var backg, backgroundImage;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  backgroundImage = loadImage("backgroundjungle.jpg");
 
}



function setup() {
  createCanvas(400,400);
  
  backg = createSprite(400,400,200,200);
  backg.addImage(backgroundImage);
  backg.velocityX = -6;
  
  monkey = createSprite(30,300,0,0);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.15;
  
  ground = createSprite(200,340,400,20);

  bananaGroup = new Group();
  obstacleGroup = new Group();

  
}


function draw() {
  background("white");
  
  ground.visibility = false;
  
  if(keyDown("space") && monkey.y >225){
    monkey.velocityY = -15;
  }

  if(backg.x<-100){
  backg.x=backg.width/2;
  }
  monkey.velocityY = monkey.velocityY + 0.6;
  
  monkey.collide(ground);
  food();
  obstacles();
  
  
  
  if(obstacleGroup.isTouching(monkey)){
    monkey.scale = 0.15;
  }
  

  if(monkey.isTouching(bananaGroup)){
    score=score+2;
    bananaGroup.destroyEach();
  }
  switch(score){
      case 10: monkey.scale = 0.18;
              break;
      case 20: monkey.scale = 0.21;
              break;
      case 30: monkey.scale = 0.24;
              break;
      case 40: monkey.scale = 0.27;
              break;
      case 50: monkey.scale = 0.3;
              break;
      default: break;
    }


  drawSprites();
  textSize(25);
  textFont("Arial bold");
  stroke("red");
  fill("white");
  text("Score: " + score, 250,60);
}

function food(){
  if(frameCount % 80 === 0){
    banana = createSprite(300,Math.round(random(120,200)),0,0);
    banana.addImage(bananaImage);
    banana.lifetime = 300;
    banana.velocityX = - 4;
    banana.scale = 0.1;
    bananaGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(400,300,0,0);
    obstacle.addImage(obstacleImage);
    obstacle.lifetime = 300;
    obstacle.velocityX = -6;
    obstacle.scale = 0.3;
    obstacleGroup.add(obstacle);
  }
}


