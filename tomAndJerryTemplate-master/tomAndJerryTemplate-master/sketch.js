var bgImg ;
var cat,catimg1,catimg2,catimg3;
var mouse,mouseimg1,mouseimg2,mouseimg3; 

function preload() {
    //load the images here
    bgImg = loadImage ("images/garden.png");
    catimg1 = loadAnimation("images/cat1.png");
    catimg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catimg3 = loadAnimation("images/cat4.png");
    mouseimg1 = loadAnimation("images/mouse1.png");
    mouseimg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseimg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite (870,600);
    cat.addAnimation ("catSleeping",catimg1);
    cat.scale =0.2; 
    mouse = createSprite(130,600);
    mouse.addAnimation("mouseStanding",mouseimg1);
    mouse.scale=0.15;
}

function draw() {

    background(bgImg);
    
    if (cat.x-mouse.x<(cat.width-mouse.width)/2)
    {
        cat.velocityX=0;
        cat.addAnimation("catSitting",catimg3);
        cat.changeAnimation("catSitting");
        cat.x=220;
        mouse.addAnimation("mouse",mouseimg3);
        mouse.changeAnimation("mouse");


    }
    

    drawSprites();
}


function keyPressed(){

    if (keyCode === LEFT_ARROW){
        mouse.addAnimation("mouseTeasing",mouseimg2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25;

        cat.velocityX=-5;
        cat.addAnimation("catWalking",catimg2);
        cat.changeAnimation("catWalking");
    }
  

}
