var wall,thickness;
var bullet,speed,weight;
var wall1,thickness;
var bullet1,speed,weight;
var wall2,thickness;
var bullet2,speed,weight;
var wall3,thickness;
var bullet3,speed,weight;

function setup() {
  
  createCanvas(1600,800);

  bullet = createSprite(50,100,15,15);
  bullet1 = createSprite(50,300,15,15);
  bullet2= createSprite(50,500,15,15);
  bullet3 = createSprite(50,700,15,15);
  wall = createSprite(1200,200,15,100);
  wall1 = createSprite(1500,300,15,100);
  wall2 = createSprite(1500,500,15,100);
  wall3 = createSprite(1500,700,15,100);
}



function draw() {
  background(0);  
  thickness = random(22,83)
  speed =random(55,90);
  weight = random(400,1500)
  bullet.velocityX = speed;
  bullet1.velocityX = speed;
  bullet2.velocityX = speed;
  bullet3.velocityX = speed;
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation>180){
      bullet.shapeColor = color(255,0,0);

    }
    if(deformation<180 && deformation>100){
      bullet.shapeColor = color(230,230,0);
    }
    if(deformation<100){
      bullet.shapeColor = color(0,255,0);

    }
  }
  if(wall1.x-bullet1.x<(bullet1.width+wall1.width)/2){
    bullet1.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation>180){
      bullet1.shapeColor = color(255,0,0);

    }
    if(deformation<180 && deformation>100){
      bullet1.shapeColor = color(230,230,0);
    }
    if(deformation<100){
      bullet1.shapeColor = color(0,255,0);

    }
  }
  if(wall2.x-bullet2.x<(bullet2.width+wall2.width)/2){
    bullet2.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation>180){
      bullet2.shapeColor = color(255,0,0);

    }
    if(deformation<180 && deformation>100){
      bullet2.shapeColor = color(230,230,0);
    }
    if(deformation<100){
      bullet2.shapeColor = color(0,255,0);

    }
  }
  if(wall3.x-bullet3.x<(bullet3.width+wall3.width)/2){
    bullet3.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation>180){
      bullet3.shapeColor = color(255,0,0);

    }
    if(deformation<180 && deformation>100){
      bullet3.shapeColor = color(230,230,0);
    }
    if(deformation<100){
      bullet3.shapeColor = color(0,255,0);

    }
  }
  drawSprites();
}
function hasCollided(){
  
}