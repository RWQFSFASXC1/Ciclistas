var satelitte, satelitteImg;
var earth, earthImg;
var groundStationLeft, groundStationRight;
var groundStationLeftImg, groundStationRightImg;
var upLinkLeft,upLinkLeftImg;
var upLinkRight,upLinkRightImg
var downLinkRight,downLinkRightImg;
var downLinkLeft,downLinkLeftImg;

function preload(){
satelitteImg=loadImage("satellite.png");


earthImg=loadImage("earth2.png")  ;

groundStationLeftImg=loadImage("spacebg1.png");

groundStationRightImg=loadImage("spacebg2.png");  

upLinkLeftImg= loadAnimation("upleft1.png","upleft2.png","upleft3.png","upleft4.png","upleft5.png","upleft6.png","upleft7.png","upleft8.png")  ;
  
  
upLinkRightImg=loadAnimation("upright1.png","upright2.png","upright3.png","upright4.png","upright5.png","upright6.png","upright7.png","upright8.png");  
  
downLinkLeftImg=loadAnimation("dleft1.png","dleft2.png","dleft3.png","dleft4.png","dleft5.png","dleft6.png","dleft7.png","dleft8.png","dleft9.png") ;

downLinkRightImg=loadAnimation("dright1.png","dright2.png","dright3.png","dright4.png","dright5.png","dright6.png","dright7.png","dright8.png");





  
  
}

function setup(){
  createCanvas(700,500);

satelitte=createSprite(350,70,50,50)  ;
satelitte.addAnimation(satelitteImg);
satelitte.scale=0.9;

earth=createSprite(350,820,50,50);
earth.addAnimation("earth",earthImg);
earth.scale=0.6;
  
groundStationLeft=createSprite (699,300,25,25); 
groundStationLeft.addImage(groundStationLeftImg)   
groundStationLeft.scale=0.2;
  
groundStationRight=createSprite (233,300,25,25); 
groundStationRight.addImage(groundStationRightImg)   
groundStationRight.scale=0.2; 
  
upLinkLeft=createSpirte(349,140,10,10);  
upLinkLeft.addImage(upLinkLeftImg)
upLinkLeft.scale=0.3
upLinkLeft.visible=false;

  
  
upLinkRight=createSpirte(698,280,10,10);  
upLinkRight.addAnimation(upLinkRightImg)
upLinkRight.scale=0.3
upLinkRight.visible=false;  

downLinkLeft=createSpirte(698,280,10,10);  
downLinkLeft.addAnimation(downLinkLeftImg)
downLinkLeft.scale=0.3
downLinkLeft.visible=false;    
  
downLinkRight=createSpirte(698,280,10,10);  
downLinkRight.addAnimation(downLinkRightImg)
downLinkRight.scale=0.3
downLinkRight.visible=false;    
   
  

}

function draw(){
  background("black")
 if(keydown("L")) {
 upLinkLeft.visible=true;  
 }
  
  if(keydown("R")) {
 upLinkRight.visible=true;  
 } 
  
  
if(keydown("LEFT_ARROW")) {
 downLinkLeft.visible=true;  
 } 
  
if(keydown("RIGHT_ARROW")) {
 downLinkRight.visible=true;  
 }   
  
  
  
  drawSprites();
textSize(15);
fill("white")  

text("Presiona las teclas R y L",5,15);
text("L para solicitar datos del satelitte",5,30);  
text("Presiona las teclas de flecha izquierda y derecha",5,50)  
text("R para recibir datos del Satelitte",5,65);  

textSize(15)
fill("white");

if(keydown("L")){
text("solicitando datos al satellite",10,300);
}

if(keydown("R")){
text("Solicitando datos al satellite",10,300);
}  

  if(keydown("LEFT_ARROW")){
text("Transfiriendo datos a la base izquierda",10,300);
}  
 
 if(keydown("RIGHT_ARROW")){
text("Transfiriendo datos a la base derecha",490,300);
}    
  
  
}




//Left
//Right



