
///////////////////////////////// ENEMIES

class Enemy {
	constructor (x,y,radius,vel_x,vel_y, health,insideTurretRadius) {
		this.x = x;
		this.y = y;
		this.vel_x = 0;
		this.vel_y = 0;
		this.radius = 5;

		this.health = 100;

		this.insideTurretRadius = new Boolean (false);
	}

	moveEnemy (index) {
		this.x += this.vel_x;
		this.y += this.vel_y;
	}

	checkMyPosition (index) {
		if (this.y > canvas.height || this.x > canvas.width || this.x < 0 || this.y < 0){
			this.killMe(index);
		}
		if (this.insideTurretRadius == true) {
			this.health -= 50;
			for (var i=0;i<turretList.length;i++) {
				var tempTurret = turretList[i];
				if (this.insideTurretRadius == true) {
				drawLine(this.x,this.y,tempTurret.x,tempTurret.y);
				} 
			}	
		}
	}
	checkHealth (index) {
		if (this.health <= 0) {
			this.killMe(index);
		}
	}
	killMe (index) {
		enemyList.splice(index, 1);
	}

	update(index,gameRunning) {
		if (gameRunning == true) {
		this.moveEnemy (index);
		this.checkHealth (index);
		this.checkMyPosition (index);
		}
		drawEnemy (this.x,this.y,this.radius);
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
		this.resourcePool += .5;
	}

	update(gameRunning) {
		drawEnemySpawner (this.x,this.y);
		if (gameRunning == true) {
		this.spawnEnemy();
		this.addResources();
		}
	}
}
