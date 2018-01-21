/////////////////////////////////// TURRET  ////

class Turret {
	constructor (x,y,ammunition) {
		this.x = x;
		this.y = y;
		this.ammunition = 20;
	}

	update () {
		drawTurret(this.x,this.y);
	}
}


////////////////////////////////  SHOTS  //////

class ShotsTurret {
	constructor (x,y) {
		this.x = x;
		this.y = y;
	}
}