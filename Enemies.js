


class enemy {
	constructor (x,y,vel_x,vel_y) {
		this.x = x;
		this.y = y;
		this.vel_x = 0;
		this.vel_y = 0;
	}
	update() {
		drawEnemy (this.x,this.y);
		moveEnemy ();
	}
}

function moveEnemy () {
	this.x += this.vel_x;
	this.y += this.vel_y;
}

function addEnemy (x,y) {
	var tempEnemy = new enemy (x,y);
	tempEnemy.vel_x = 0;
	tempEnemy.vel_y = 2;
	enemyList.push(tempEnemy);
}

function enemyUpdate () {
	   for(var i=0;i<enemyList.length;i++) {
        enemyList[i].update();
    }
}