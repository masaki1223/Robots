var move={
	yspeed:1,
	y:200,
	bodyHeight:115,
	bodyspeed:1,
	neckHeight:10,
	neckspeed:-1,
	limit:320
};
function setup(){
	createCanvas(600, 400);
}

function draw(){
	background(51);
	drawrobot(50, move.y, 110, 10);
	drawrobot(120, 340, move.y, 10);
	drawrobot(300, 380, 110, 10);
	drawrobot(400, 400, 110, move.y);
	drawrobot(500, 200, 110, 10);
	drawrobot(600, 270, 110, 10);
	drawrobot(700, 400, 110, 10);
move.y+=move.yspeed;
move.bodyHeight+=move.bodyspeed;
move.neckHeight+=move.neckspeed;
if(move.y>move.limit || move.y<180){
	move.yspeed*=-1;
	move.limit=random(0,height);
	}
} 
if(move.bodyHeight >140 || move.bodyHeight < 80){
	move.bodyspeed*=-1;
}
if(move.neckHeight > move.bodyHeight || move.neckHeight < 8){
	move.neckspeed*=-1;
}