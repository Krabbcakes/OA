
///////////////////////////////// ENEMIES

class Enemy {
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

/////////////////////////////////  ENEMY SPAWNER

class EnemySpawner {
	constructor (x,y,resourcePool) {
		this.x = x;
		this.y = y;
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
