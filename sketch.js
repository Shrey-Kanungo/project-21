var bullet,wall;


var speed, weight; 


function setup() {
  createCanvas(1000, 400);


	speed=random(55,90)
	weight=random(400,1000)


	bullet=createSprite(50, 200, 50,20);   

	bullet.velocityX = speed;

	bullet.shapeColor=color(255);


  
  	wall=createSprite(900,200, 60, height/2)
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);

  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
  	bullet.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22500;
	if(deformation>180)
	{
		bullet.shapeColor=color(255,0,0);
	}

	if(deformation<180 && deformation>100)
	{
		bullet.shapeColor=color(230,230,0);
	}

	if(deformation<100)
	{
	bullet .shapeColor=color(0,255,0);
	}
  }  
  
  drawSprites();
 
}
