var runner, noMaskPpl, ground, groundToJumpOver, virus, chance, upperGround, frameArrNoMask, frameArrRandNoMask, personSneeze;
var frameArrSneezePerson, frameArrRandSneezePerson, sneeze, upperGroundGrp; var score=0 ;
var noMaskGrp, sneezeGrp;
var gameState = "play";
var sanPowerUp, frameArr;

frameArrNoMask = [46, 303, 904];
frameArrSneezePerson = [96, 367, 0];

function preload()
{

}

function setup()
{
    createCanvas(800, 600);

    ground = createSprite(400, 590, 1600, 20);
    //ground.debug = true;

    runner = createSprite(100, 500, 50, 50);
    
    ground.velocityX = -2;

    sneezeGrp = new Group();
    noMaskGrp = new Group();
    upperGroundGrp = new Group();
}

function draw()
{
    score = Math.round(frameCount/30);
    background(0);
    textSize(20);
    fill("red");
    text(score, 700, 70);
    runner.collide(ground);
    runner.collide(upperGroundGrp);
    if(gameState==="play"){
        if(runner.x<100)
        {
            runner.x = 100;
        }
        if(noMaskGrp.isTouching(runner))
            {
                  gameState = "lose";
                console.log("it touched");
            } 
        if(sneezeGrp.isTouching(runner) && keyDown("Q")===false)
        {
            gameState = "lose";
            console.log("sneeze");
        }
        if(keyDown("Q") && sneezeGrp.isTouching(runner))
        {
            for(var i =0; i<sneezeGrp.length; i++)
            {
                if(sneezeGrp.get(i).isTouching(runner))
                {
                    sneezeGrp.get(i).destroy();
                    console.log("hakuna matata");
                }
            }
        }

        frameArrRandNoMask = Math.round(random(0, 2));
        frameArrRandSneezePerson = Math.round(0, 2);

        runner.velocityY += 3;

        if(keyDown("F") && runner.y >= 550)
        {
            runner.velocityY = -43;
        }
        if(keyDown("space") && runner.y >= 550)
        {
            runner.velocityY = -30;
        }
   
        if(ground.x<0)
        {
            ground.x = ground.width/2;
        }    
        createNoMaskPpl();
        createUpperGroud();
        createPersonSneeze();
        drawSprites();
    }
}

function createNoMaskPpl ()
{
    if(frameCount%frameArrNoMask[frameArrRandNoMask]===0)
    {
        noMaskPpl= createSprite(800, 560, 25, 25);
        noMaskPpl.collide(ground);
        noMaskPpl.velocityX = -4;
        noMaskGrp.add(noMaskPpl);
        noMaskPpl.debug = true;
        noMaskPpl.liftime = 250;
        noMaskPpl.shapeColor = 'blue';
    }
}

function createUpperGroud()
{
    if(frameCount%200===0)
    {
        upperGround = createSprite(800, 360, 400, 20);
        upperGround.velocityX = -3;
        upperGroundGrp.add(upperGround);

    }
}

function createPersonSneeze ()
{
    if(frameCount%frameArrSneezePerson[frameArrRandSneezePerson]===0)
    {
        personSneeze = createSprite(800, 560, 25, 25);
        personSneeze.collide(ground);
        personSneeze.velocityX = -4;
        personSneeze.shapeColor = "red";
        personSneeze.lifetime = 250;
        sneeze = createSprite(personSneeze.x, personSneeze.y, 10, 10);
        sneeze.lifetime = 250;
        sneeze.velocityX = -6;
        sneezeGrp.add(sneeze);
        

    }

}

function SanPowerUp()
{}