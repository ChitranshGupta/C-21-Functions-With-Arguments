var fixedRect, movingRect;
var box1 , box2;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  box1 = createSprite(400, 200, 50, 80);
  box1.shapeColor = "yellow";
  box1.debug = true;
  box1.velocityX = -2;

  box2 = createSprite(200, 200, 50, 80);
  box2.shapeColor = "blue";
  box2.debug = true;
  box2.velocityX = 2;

}

function draw() {
  background(0,0,0);  
bounceOff(box1,box2);
  if (isTouching(fixedRect,movingRect)){
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
  }

  drawSprites();
}

