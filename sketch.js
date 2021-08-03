
var car,monster1,monster2,monster3,monster4,rockies,track,treasure, background , kick,kick2,treasurImg,track;
var carImg,monster, monster1Img, monster2Img, monster3Img, monster4Img,rockies,backgroundImg,game,home , trackImg, kickGroup,kick2Group;
var kickImg, kick2Img;
var gameState = 0;



function preload(){
  carImg = loadImage( "car.png")
  backgroundImg = loadImage("bike.png");
  trackImg=loadImage("track.jpg");
  kickImg = loadImage("kick1.png")
  kick2Img = loadImage("kick2.png")
  treasureImg = loadImage("treasure.png")

}

function setup(){
  createCanvas(600,800)
  

  game = new Game()
  game.start();

  var track1=createSprite(250,750);
     track1.addImage(trackImg);
     track1.scale=0.75;

   track=createSprite(250,400);
    track.addImage(trackImg);
     track.scale=0.75;
     track.velocityY=-2
     

     car = createSprite(250,700,10,10);
      
 
      car.addImage(carImg);
      car.scale = 0.3
  
}




function draw(){

   

  background(backgroundImg);


  if (gameState === 1) {
    //background("brown");
    //background(trackImg);
    
    game.play();

    if(track.y<300)
    {
      track.y=400
    }

    
   
    
  }
  
  
}


function spawnCart(){
  if(frameCount%120===0){
    cart = createSprite(150,0);
    cart.scale = 0.2
    cart.velocityY = 3;//need to work on velocity and change it as per the score
    cart.x = Math.round(random(100,450))
    var rand = Math.round(random(1,2))
    switch(rand){
      case 1:cart.addImage(kickImg);
      break;
      case 2:cart.addImage(kick2Img);
      break;
      default:
        break;
    }
  }

}

function spawnTreasure(){
  if(frameCount%210===0){
    treasure = createSprite(250,0);
    treasure.addImage(treasureImg)
    treasure.scale = 0.1
    treasure.velocityY = 3;//need to work on velocity and change it as per the score
    treasure.x = Math.round(random(200,450))
    var rand = Math.round(random(1,2))
  }
}
