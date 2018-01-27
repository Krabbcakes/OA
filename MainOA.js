window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	
	var framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);

	document.addEventListener("click", mouseClick);

	document.addEventListener("keydown", keyPressed1);
	document.addEventListener("keydown", keyPressed2);

	document.addEventListener("keydown", keyPressedQ);
//	document.addEventListener("keydown", keyPressedW);
	document.addEventListener("keydown", keyPressedT);
//	document.addEventListener("keydown" , keyPressedY);
	document.addEventListener("keydown", keyPressedL);
	document.addEventListener("keydown" , keyPressedP);
	document.addEventListener("keydown", keyPressedSpaceBar);
}
// poo
var canvas, canvasContext;



//////////////////////////////////  UPDATE  ////////////////////////////////////////////

function updateAll () {
	drawAll (gameRunning);	
	enemyUpdate (gameRunning);
	enemySpawnerUpdate(gameRunning);	
	turretUpdate(gameRunning);
	powerPlantUpdate(gameRunning);
	powerLinesUpdate(gameRunning);
}

///////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////// 	PAUSE  ///////////////////////////////
gameRunning = new Boolean (true);

function keyPressedSpaceBar(evt) {
	if (evt.keyCode == 32) {
		if (gameRunning == false) {
			gameRunning = true;
		}
		else {
			gameRunning = false;
		}
	}
}
/////////////////////////////////////////////////////////////////////////////////////

var enemyList = [];
var enemySpawnerList = [];

var turretList = [];
var shotsTurretList = [];
var powerPlantList = [];
var powerLinesList = [];



toggleTurret = new Boolean (false);
toggleEnemySpawner = new Boolean (false);
togglePowerPlant = new Boolean (false);
togglePowerLines = new Boolean (false);


function keyPressedQ(evt) {
	if (evt.keyCode == 81 && toggleEnemySpawner == false) {
	toggleEnemySpawner = true;
	return;
	}
	if (evt.keyCode == 81 && toggleEnemySpawner == true) {
	toggleEnemySpawner = false;
	}
}


function keyPressedT(evt) {
	if (evt.keyCode == 84 && toggleTurret == false) {
	toggleTurret = true;
	return;
	}
	if (evt.keyCode == 84 && toggleTurret == true) {
	toggleTurret = false;
	}
}

function keyPressedP(evt) {
	if (evt.keyCode == 80 && togglePowerPlant == false) {
	togglePowerPlant = true;
	return;
	}
	if (evt.keyCode == 80 && togglePowerPlant == true) {
	togglePowerPlant = false;
	}
}

function keyPressedL(evt) {
	if (evt.keyCode == 76 && togglePowerLines == false) {
	togglePowerLines = true;
	return;
	}
	if (evt.keyCode == 76 && togglePowerLines == true) {
	togglePowerLines = false;
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
            if (toggleTurret == true) {
            addTurret(evt.clientX,evt.clientY);
            break;  	
            }
            if (togglePowerPlant == true) {
            addPowerPlant(evt.clientX,evt.clientY);
            break;  	
            }
            if (togglePowerLines == true) {
            addPowerLines(evt.clientX,evt.clientY);
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




////////////////////add
// gold nodes spawn in middle of map that player has to branch out and fight for