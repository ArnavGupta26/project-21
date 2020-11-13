var wall , thickness;
var bullet , speed , weight ; 

function setup() {
    createCanvas(1600,400);
  
    speed = random (223,321);
    weight = random(30,52);

    thickness - random (20,60);

    bullet = createSprite (50,200,15,6);
    bullet.velocityX = speed ;
    bullet . shapeColor = ('white');

    wall = createSprite(1400,200,thickness,height/2);
    wall.shapeColor = ('80,80,80');
    


}
function draw() {
    background ('black'); 

  if (wall.x - bullet.x < (bullet.width+wall.width/2)){
    bullet.velocityX=0;
    var deformation = 0.5 * weight * speed * speed/2;
    if (deformation > 4){
      bullet.shapeColor = 'green';
    }
    if (deformation < 100 && deformation >10){
     bullet.shapeColor = 'red'
    }
  }


    

 drawSprites();
}

function hasCollided(bullet,wall)
{
bulletRightEdge = bullet.x+bullet.width;

}
