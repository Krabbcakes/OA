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
	}

	checkTargetingRadius (x,y) {
		for(var i=0;i<enemyList.length;i++) {
        	var tempEnemy = enemyList[i];
        	if (Math.sqrt ( ((tempEnemy.x - this.x)*(tempEnemy.x - this.x)) + ((tempEnemy.y - this.y)*(tempEnemy.y - this.y)) ) < this.targetingRadius) {
        		tempEnemy.insideTurretRadius = true;
        	}
        	else {
        		tempEnemy.insideTurretRadius = false;
        	}
//        		drawTargetingLine (this.x,this.y);
//        		tempEnemy.health -= 10;

        	
//       	drawLine(x,y,tempEnemy.x,tempEnemy.y);
    	}
    }	
	

	update (gameRunning) {
		drawTurret(this.x,this.y,this.radius,this.color);
		drawTargetingRadius (this.x,this.y,this.targetingRadius,this.targetingLineWidth,this.targetingColor);
		
		this.checkTargetingRadius (this.x,this.y);
	}
}


////////////////////////////////  SHOTS  //////

class ShotsTurret {
	constructor (x,y) {
		this.x = x;
		this.y = y;
	}
}