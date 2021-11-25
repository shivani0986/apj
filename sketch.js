var canvas;
var block1;
var ball, edges;
var music;

function preload()
{
    // load sound here
    music = loadSound("apjj5.mp3");
    image = loadImage("apj1.jpg");
}
function setup()
{
    canvas = createCanvas(850,600);
    //create blocks
    block1 = createSprite(360,590,3600,10);
    block1.shapeColor = "blue";

    ball = createSprite(425,100,50,50);
    ball.shapeColor = ("green")
}
function draw() 
{
    background(image)
    edges=createEdgeSprites();

    stroke("blue");
    fill("black");
    textSize(50);
    text("APJ ABDUL KALAM",220,50);

    stroke("blue");
    fill("black");
    textSize(30);
    text("Editor Shivani",30,570);
    
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
      ball.shapeColor = "blue";
        music.play()      
    }

    if (keyDown(DOWN_ARROW)) {
  ball.velocityX =0;
  ball.velocityY =4;
}
    drawSprites();
}
