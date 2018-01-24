/////////////////////////////////// TURRET  ////

class Turret {
	constructor (x,y,ammunition,Hx,Hy,Hradius,Hcolor) {
		this.x = x;
		this.y = y;
		this.ammunition = 20;

		////range indicator
		this.Hx = Hx;
		this.Hy = Hy;
		this.Hradius = 75;
		this.Hcolor = 'white';
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