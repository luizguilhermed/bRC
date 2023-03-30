
function preload(){
  barco_running = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  

  groundImage = loadImage("sea.png");

}

function setup(){
  createCanvas(1500,700);
  

 
  ground = createSprite(1400,180,20,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -3;
 
  
 barco = createSprite(700,250,20,20);
  barco.addAnimation("running", barco_running);
  barco.scale = 0.5;
}
function draw() {
 background("220");



    drawSprites();
 
}
