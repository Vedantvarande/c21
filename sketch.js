var fixedRect, movingRect;
var a,b,c,d;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  a = createSprite(500, 400, 50, 80);
  a.shapeColor = "green";
  a.velocityX=-3;

  b = createSprite(400, 400, 50, 80);
  b.shapeColor = "green";
  b.velocityX=3;


  c = createSprite(300, 400, 50, 80);
  c.shapeColor = "green";

  d = createSprite(200, 400, 50, 80);
  d.shapeColor = "green";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

//actual parameters are those parameters which are written when we are calling the function
 isTouching(movingRect,a);
 bounceOff(a,b);
 drawSprites();
}

//difference between virtual and actual parameter 
function isTouching(movingRect,fixedRect)
{
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) 
{
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
  else 
  {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
}

//virtual parameters are those parameters which are written when we are defining the function 

function bounceOff(g,h)
{
  if (g.x - h.x < h.width/2 + g.width/2
    && h.x - g.x < h.width/2 + g.width/2
    ) 
    {
      g.velocityX=g.velocityX*(-1);
      h.velocityX=h.velocityX*(-1);

    }
    if(g.y - h.y < h.height/2 + g.height/2
      && h.y - g.y < h.height/2 + g.height/2)
    {
      g.velocityY=g.velocityY*(-1);
      h.velocityY=h.velocityY*(-1);
    }
}