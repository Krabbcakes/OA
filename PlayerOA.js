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
		this.targetingLineWidth = .5;
	}

	checkTargetingRadius (x,y) {
		for(var i=0;i<enemyList.length;i++) {
        	var tempEnemy = enemyList[i];
        	if (Math.sqrt ( ((tempEnemy.x - x)*(tempEnemy.x - x)) + ((tempEnemy.y - y)*(tempEnemy.y - y)) ) < targetingRadius) {
        		console.log (hit);
        	}
//       	drawLine(x,y,tempEnemy.x,tempEnemy.y);
    	}
    }	
	

	update (gameRunning) {
		drawTurret(this.x,this.y,this.radius,this.color);
		drawTargetingRadius (this.x,this.y,this.targetingRadius,this.targetingLineWidth,this.targetingColor);
		drawTargetingLine (this.x,this.y);		
		checkTargetingRadius (this.x,this.y);
	}
}


////////////////////////////////  SHOTS  //////

class ShotsTurret {
	constructor (x,y) {
		this.x = x;
		this.y = y;
	}
}