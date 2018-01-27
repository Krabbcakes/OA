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
		this.damage = 100;

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
//		drawTargetingRadius (this.x,this.y,this.targetingRadius,this.targetingLineWidth,this.targetingColor);	
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


/////////////////////////////// PowerPlant and PowerLines

class PowerPlant {
	constructor(x,y) {
		this.x = x;
		this.y = y;
		this.radius = 20;
		this.color = 'green';
		this.power = 100;
	}
	update (gameRunning) {
		drawPowerPlant (this.x,this.y,this.radius,this.color);
	}
}


class PowerLines {
	constructor(x1,y1,x2,y2) {
		this.x1 = x1;
		this.x2 = x2;
		this.y1 = y1;
		this.y2 = y2;
//		this.lineWidth = lineWidth;
		this.color = 'yellow';

	}
		update (gameRunning) {
		drawPowerLines (this.x1,this.y1,this.x2,this.y2);
	}
}
