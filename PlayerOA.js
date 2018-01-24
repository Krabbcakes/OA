/////////////////////////////////// TURRET  ////

class Turret {
	constructor (x,y,ammunition) {
		this.x = x;
		this.y = y;
		this.ammunition = ammunition;
		this.radius = 20;
		this.targetingRadius = 75;
		this.color = 'bisque';
		this.targetingColor = 'blue';
		this.targetingLineWidth = .5;
	}

	update () {
		drawTurret(this.x,this.y,this.radius,this.color);
		drawTargetingRadius (this.x,this.y,this.targetingRadius,this.targetingLineWidth,this.targetingColor);
	}
}


////////////////////////////////  SHOTS  //////

class ShotsTurret {
	constructor (x,y) {
		this.x = x;
		this.y = y;
	}
}