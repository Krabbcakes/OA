/////////////////////////////////// TURRET  ////

class Turret {
	constructor (x,y,ammunition) {
		this.x = x;
		this.y = y;
		this.ammunition = ammunition;
		this.radius = 10;
		this.targetingRadius = 90;
		this.color = 'bisque';
		this.targetingColor = 'white';
		this.targetingLineWidth = 1;
		this.damage = 20;

		this.currentTargetEnemy = null;
	}

	checkTargetingRadius () {
		if (this.currentTargetEnemy == null) {
			for(var i=0;i<enemyList.length;i++) {
        		var tempEnemy = enemyList[i];
        		if (checkIfWithinRadius (this,tempEnemy,this.targetingRadius) == true) {
        			this.currentTargetEnemy = tempEnemy;
        			break;
        		}
        	}	
    	}
		
		else {
				this.currentTargetEnemy.insideTurretRadius (this.damage);
				drawLine(this.x,this.y,this.currentTargetEnemy.x,this.currentTargetEnemy.y);

			if (this.currentTargetEnemy.health <= 0) {
				this.currentTargetEnemy = null;
				return;
			}
	
			if (checkIfWithinRadius (this,this.currentTargetEnemy,this.targetingRadius) == false){
				this.currentTargetEnemy = null;	
			}
		}
    }	
	

	update (gameRunning) {
		drawTurret(this.x,this.y,this.radius,this.color);
		drawTargetingRadius (this.x,this.y,this.targetingRadius,this.targetingLineWidth,this.targetingColor);	
		this.checkTargetingRadius();
	}
}


////////////////////////////////  SHOTS  //////

class ShotsTurret {
	constructor (x,y) {
		this.x = x;
		this.y = y;
	}
}