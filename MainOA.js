window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	
	var framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);

	document.addEventListener("click", mouseClick);

	document.addEventListener("keydown", keyPressed1);
	document.addEventListener("keydown", keyPressed2);

	document.addEventListener("keydown", keyPressedQ);
	document.addEventListener("keydown", keyPressedW);
}

var canvas, canvasContext;

//////////////////////////////////  UPDATE  ////////////////////////////////////////////

function updateAll () {

	drawAll ();
	enemyUpdate ();
	enemySpawnerUpdate();	
	turretUpdate();
}

///////////////////////////////////////////////////////////////////////////////////////

var enemyList = [];
var enemySpawnerList = [];
var turretList = [];
var shotsTurretList = [];

toggleEnemySpawner = new Boolean (false);
function keyPressedQ(evt) {
	if (evt.keyCode == 81) {
	toggleEnemySpawner = true;
	}
}
function keyPressedW(evt) {
	if (evt.keyCode == 87) {
	toggleEnemySpawner = false;
	}
}



function mouseClick(evt) {
	switch(evt.which){
        case 1:{
        	if (toggleEnemySpawner == true) {
            leftClick = true;
            addEnemySpawner(evt.clientX,evt.clientY);
            break;   
            } 	
    	}
	}
}

function keyPressed1(evt) {
	if (evt.keyCode == 49) {
	addEnemySpawner();
	}
}

function keyPressed2(evt) {
	if (evt.keyCode == 50) {
	addTurret();
	}
}

////////////////////////////////////////// TIMER

class Timer{
	
	constructor(duration,callback,ref){
  	this.start = Date.now();
    this.callback = callback;
    this.duration = duration;
    this.ref = ref;
    this.elapsedTime = 0;
  }
  update(){
  	this.elapsedTime = Date.now() - this.start;
  	if(this.elapsedTime > this.duration){
    	this.callback.call(this.ref);
        return;
    	}
    }
}

///////////////////////////////////////////




