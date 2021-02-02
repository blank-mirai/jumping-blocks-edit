var canvas;
var music;
var red, blue, yellow, green;
var edges;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    edges = createEdgeSprites();

    red = createSprite(100, 590, 200, 20);
    red.shapeColor = "red";

    blue = createSprite(300, 590, 200, 20);
    blue.shapeColor = "blue";

    yellow = createSprite(500, 590, 200, 20);
    yellow.shapeColor = "yellow";

    green = createSprite(700, 590, 200, 20);
    green.shapeColor = "green";

    ball = createSprite(400, 300, 30, 30);
    ball.shapeColor = "black";
    ball.velocityX = Math.round(random(-5, 5));
    ball.velocityY = Math.round(random(-5, 5));

}

function draw() {
    background(rgb(169,169,169));

    ball.bounceOff(edges);
    /*ball.bounceOff(red);
    ball.bounceOff(blue);
    ball.bounceOff(yellow);
    ball.bounceOff(green);*/

    
    if (ball.isTouching(red) && ball.bounceOff(red)){
        ball.shapeColor = "red";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.play();
    }

    if (ball.isTouching(blue) && ball.bounceOff(blue)){
        ball.shapeColor = "blue";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.play();
    }

    if (ball.isTouching(yellow) && ball.bounceOff(yellow)){
        ball.shapeColor = "yellow";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.play();
    }

    if (ball.isTouching(green) && ball.bounceOff(green)){
        ball.shapeColor = "green";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.play();
    }


    drawSprites();
}
