
var trex ,trex_running;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
  trex.scale(0.6)
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,70 )
trex.addAnimation("running", trex_running)
trex.scale = 0.6
}

function draw(){
  background("white")
  drawSprites();
}
















