var PLAY = 1;
var END =0 ;
var gamestate = PLAY;

var ninja , ninjarunning , ninjadead;
var ground , invisibeground, groundImage;

var gameover,gameoverImg,restart,restartImg;
var house1 , house2 , house3 , house4 ;
var robot, zombieboy , zombiegirl ;
var jumpsound , checkpointsound , diesound ; 

function preload(){
  ninjarunning = loadAnimation("Spritesheets/Run_000.png","Spritesheets/Run_001.png","Spritesheets/Run_002.png","Spritesheets/Run_003.png","Spritesheets/Run_004.png","Spritesheets/Run_005.png","Spritesheets/Run_006.png","Spritesheets/Run_007.png","Spritesheets/Run_008.png","Spritesheets/Run_009.png");
  ninjadead  = loadAnimation("Spritesheets/Dead_000.png","Spritesheets/Dead_001.png","Spritesheets/Dead_002.png","Spritesheets/Dead_003.png","Spritesheets/Dead_004.png","Spritesheets/Dead_005.png","Spritesheets/Dead_006.png",)
 
  house1 = loadImage("house1.jpg"); 
  house2 = loadImage("house2.jpg");
  house3 = loadImage("house3.jpg");
  house4 = loadImage("house4.jpg");

  robot = loadImage("Spritesheets/idle 1.jpeg")
  zombieboy = loadAnimation("Spritesheets/Attack (1).png","Spritesheets/Attack (2).png","Spritesheets/Attack (3).png","Spritesheets/Attack (4).png","Spritesheets/Attack (5).png","Spritesheets/Attack (7).png","Spritesheets/Attack (8).png");
  zombiegirl = loadAnimation("Spritesheets/Attack 1.png","Spritesheets/Attack 2.png","Spritesheets/Attack 3.png","Spritesheets/Attack 4.png","Spritesheets/Attack 5.png","Spritesheets/Attack 7.png","Spritesheets/Attack 8.png");
  
  gameoverImg = loadImage("gameover.jpg");
  restartImg = loadImage("restart.jpg");

  jumpsound = loadSound("jump.mp3");
  checkpointsound = loadSound("checkPoint.mp3");
  diesound = loadSound("die.mp3");

  groundImage = loadImage("ground.png")
}

function setup(){
createCanvas(600,200);

ninja = createSprite (50,180,20,50);

ninja.addAnimation("running",ninjarunning)
ninja.addAnimation("dead",ninjadead),
ninja.scale = 0.3;

gameover = createSprite(300,100);
gameover = addImage(gameoverImg);
gameover.scale = 0.2

restart =createSprite(300,140);
restart.addImage(restartImg);
restart.scale = 0.2;

ground = createSprite(200,180,400,200);
ground.addImage("grounnd",groundImage);

invisibleGround = createSprite(200,185,400,10)
}

function draw(){

  drawSprites();
}