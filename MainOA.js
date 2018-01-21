window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	
	var framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);

	document.addEventListener("click", mouseClick);

}

var canvas, canvasContext;

///////////////////////////////////////////////////////////////////////////////////////

function updateAll () {
	drawAll ();
	enemyUpdate ();
}

///////////////////////////////////////////////////////////////////////////////////////

var enemyList = [];

function mouseClick(evt) {
	switch(evt.which){
        case 1:{
            leftClick = true;
            addEnemy(evt.clientX,evt.clientY);
            break;    	
    	}
	}
}
