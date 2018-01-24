
///////////////////////////////// ENEMIES

class Enemy {
	constructor (x,y,radius,vel_x,vel_y) {
		this.x = x;
		this.y = y;
		this.vel_x = 0;
		this.vel_y = 0;
		this.radius = 7;
	}

	moveEnemy (index) {
		this.x += this.vel_x;
		this.y += this.vel_y;
	}

	checkMyPosition (index) {
		if (this.y > canvas.height || this.x > canvas.width || this.x < 0 || this.y < 0){
			this.killMe(index);
		}
	}

	killMe (index) {
		enemyList.splice(index, 1);
	}

	update(index) {
		drawEnemy (this.x,this.y,this.radius);
		this.moveEnemy (index);
		this.checkMyPosition (index);
	}
}

/////////////////////////////////  ENEMY SPAWNER

class EnemySpawner {
	constructor (x,y,radius,resourcePool) {
		this.x = x;
		this.y = y;
		this.radius = 40;
		this.resourcePool = 10;
	}
	spawnEnemy () {
		if (this.resourcePool >= 10) {
		addEnemy(this.x,this.y);
		this.resourcePool -= 10;
		}
	}	
	addResources () {
		this.resourcePool += 1;
	}

	update() {
		drawEnemySpawner (this.x,this.y);
		this.spawnEnemy();
		this.addResources();
	}
}
