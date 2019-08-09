//define other user variables
let userPosX = 25;
let userPosY = 25;
let userSpeed = 10;
let userWidth = 50;
let userHeight = 50;

//define puck position variables
let puckPosX = 25;
let puckPosY = 25;
let puckWidth = 50;
let puckHeight = 50;
let puckXDir = 1;
let puckYDir = 1;
let puckSpeed = 5;

//define other user variables
let userLeft;
let userRight;
let userTop;
let userBottom;

//define other puck variables
let puckLeft;
let puckRight;
let puckTop;
let puckBottom;

let goals = 0;

// let collisionBoolean = false;

function setup() {
    //set up the canvas
    createCanvas(1250, 550);
    background(0);

    ellipseMode(CENTER);


    //determine puck starting position
    puckPosX = width / 2;
    puckPosY = height / 2;
    //determine user starting position
    userPosX = width / 3;
    userPosY = height / 2;
}


function draw() {
    background(0);

    //Set up puck circle
    fill(255, 0, 0);
    ellipse(puckPosX, puckPosY, puckWidth, puckHeight)

    //Set up user circle and movement
    fill(0, 0, 255);
    ellipse(userPosX, userPosY, userWidth, userHeight);

    if (keyIsDown(LEFT_ARROW)) {
        userPosX -= userSpeed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        userPosX += userSpeed
    }
    if (keyIsDown(UP_ARROW)) {
        userPosY -= userSpeed;
    }
    if (keyIsDown(DOWN_ARROW)) {
        userPosY += userSpeed;
    }

    //User Bounds
    if (userPosX <= 25) {
        userPosX = 25;
    }
    if (userPosX >= 1225) {
        userPosX = 1225;
    }
    if (userPosY <= 25) {
        userPosY = 25;
    }
    if (userPosY >= 525) {
        userPosY = 525;
    }

    //Puck bounds
    if (puckPosX <= 25) {
        puckPosX = random(1225);
    }
    if (puckPosX >= 1225) {
        puckPosX = random(1225);
    }
    if (puckPosY <= 25) {
        puckPosY = random(550);
    }
    if (puckPosY >= 525) {
        puckPosY = random(550);
    }

    //user circle edges
    userLeft = userPosX - 25;
    userRight = userPosX + 25;
    userTop = userPosY - 25;
    userBottom = userPosY + 25;

    //puck circle edges
    puckLeft = puckPosX - 25;
    puckRight = puckPosX + 25;
    puckTop = puckPosY - 25;
    puckBottom = puckPosY + 25;



    //detect collision (non-collision)
    if (userLeft > puckRight || userRight < puckLeft || userTop > userBottom || userBottom < puckTop) {
        //if true, then there is NO collision and thus nothing new happens
    }
    // collisionBoolean = true;


    //Make the puck bounce off the walls
    //update puck position
    puckPosX += puckSpeed * puckXDir;
    puckPosY += puckSpeed * puckYDir;

    if (puckPosX <= 25 || puckPosX >= 525) {
        //change direction of X
        puckXDir *= -1;
    }
    if (puckPosY <= 25 || puckPosY >= 1225) {
        //change diretion of Y
        puckYDir *= -1;
    }
    //Print the goal score; this SHOULD be 
    fill(255);
    text("Goals: " + goals, width / 2, 530);
}