
///////////////////////////////// ENEMIES

class enemy {
	constructor (x,y,vel_x,vel_y) {
		this.x = x;
		this.y = y;
		this.vel_x = 0;
		this.vel_y = 0;
	}

	moveEnemy () {
		this.x += this.vel_x;
		this.y += this.vel_y;
	}
	
	update() {
		drawEnemy (this.x,this.y);
		this.moveEnemy ();
	}
}



function addEnemy (x,y) {
	var tempEnemy = new enemy (x,y);
	tempEnemy.vel_x = 0;
	tempEnemy.vel_y = 3;
	enemyList.push(tempEnemy);
}

function enemyUpdate () {
	   for(var i=0;i<enemyList.length;i++) {
        enemyList[i].update();
    }
}



/////////////////////////////////  ENEMY SPAWNER

class enemySpawner {
	constructor (x,y) {
		this.x = x;
		this.y = y;
	}
	spawnEnemy () {
		this.myTimer = new Timer (2000,addEnemy(this.x,this.y),this);
//		addEnemy(this.x,this.y);
	}	
	update() {
		drawEnemySpawner (this.x,this.y);
		this.spawnEnemy();
	}
}

function addEnemySpawner (x,y) {
	var tempEnemySpawner = new enemySpawner (x,y);
	tempEnemySpawner.x = 300;
	tempEnemySpawner.y = 100;
	enemySpawnerList.push(tempEnemySpawner);
}

function enemySpawnerUpdate () {
	   for(var i=0;i<enemySpawnerList.length;i++) {
        enemySpawnerList[i].update();
    }
}