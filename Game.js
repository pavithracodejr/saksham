class Game{
  constructor(){

   
 
  }
 
  start(){
 
     if(gameState===0)
     {
      home = new Home();
      home.display();
 
     }
 
     
      //monster = createSprite(200,590,10,10);
  }
 
  play(){
     home.hide()

     

     spawnCart();
     spawnTreasure();

     

     
 
     //car.velocityY = -3;
     
       if(keyDown(LEFT_ARROW)){
        
         car.x = car.x-2
         
       }
       else if(keyDown(RIGHT_ARROW)){
         
         car.x = car.x+2
       }
       /*else if(keyDown(UP_ARROW)){
        
        car.y = car.y-2
       }*/

       drawSprites();
       
  }
   
 }