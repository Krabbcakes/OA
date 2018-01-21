window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	
	var framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);

	document.addEventListener("click", mouseClick);

	document.addEventListener("keydown", keyPressed1);

}

var canvas, canvasContext;

///////////////////////////////////////////////////////////////////////////////////////

function updateAll () {
	drawAll ();
	enemyUpdate ();
	enemySpawnerUpdate();
}

///////////////////////////////////////////////////////////////////////////////////////

var enemyList = [];
var enemySpawnerList = [];

function mouseClick(evt) {
	switch(evt.which){
        case 1:{
            leftClick = true;
            addEnemy(evt.clientX,evt.clientY);
            break;    	
    	}
	}
}

function keyPressed1(evt) {
	if (evt.keyCode == 49) {
	addEnemySpawner();
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
//    this.id = timerList.length;
//    timerList.push(this);
  }
  update(){
  	this.elapsedTime = Date.now() - this.start;
// 	console.log("Timer elapsed :" + this.elapsedTime);
  	if(this.elapsedTime > this.duration){
    	this.callback.call(this.ref);
 //   	timerList.splice(this.id,1)
        return;
    	}
    }
}

///////////////////////////////////////////