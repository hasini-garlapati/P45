var alex;

function preload() {
groundImage = loadImage("running-marathon-backgrounds.jpg");
alexImage = loadImage("boy-transparent-background-10.png");
}

function setup() {
  createCanvas(800,800);
  alex = createSprite(600,200,30,35);
  

  ground = createSprite(200,180,20,40);
  ground.addImage("ground",groundImage);
  ground.x = ground.width/2;
  ground.y = ground.height/2;
  

}

function draw() {
  background("white");  
  alex.addSprite();

  drawSprites();
}