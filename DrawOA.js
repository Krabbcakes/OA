



function drawAll(gameRunning) {
	if (gameRunning) {
		colorRect(0,0, canvas.width, canvas.height, 'black');
	}
}






function drawEnemySpawner (x,y) {
	colorCircle(x,y,30,'#660000');
	colorCircle(x,y,29,'Maroon');
	colorCircle(x,y,27,'#990000');
	colorCircle(x,y,24,'#b30000');
	colorCircle(x,y,23,'#cc0000');
	colorCircle(x,y,21,'#e60000');
	colorCircle(x,y,19,'red');
} 

function drawTurret (x,y,radius,color) {
//	colorCircle(x,y,71,'white');
//	colorCircle(x,y,70,'black');
	colorCircle(x,y,radius,color);
}

function drawTargetingLine (x,y) {
	for (var i=0;i<turretList.length;i++) {
		var tempTurret = turretList[i];
		if (insideTurretRadius == true) {
			drawLine(x,y,tempTurret.x,tempTurret.y);
		} 
	}

/*	for(var i=0;i<enemyList.length;i++) {
        var tempEnemy = enemyList[i];
 //       if (Math.sqrt ( ((tempEnemy.x - x)*(tempEnemy.x - x)) + ((tempEnemy.y - y)*(tempEnemy.y - y)) ) > this.targetingRadius) {
 //       	drawLine(x,y,tempEnemy.x,tempEnemy.y);
//        	}

    }
*/    
}

function drawTargetingRadius (x,y,targetingRadius,targetingLineWidth,targetingColor) {
	colorHollowCircle(x,y,targetingRadius,targetingLineWidth,targetingColor);
}


function drawEnemy (x,y,radius) {
	colorCircle(x,y,radius+.4,'red');
	colorCircle(x,y,radius,'DarkRed');


/*	for(var i=0;i<enemyList.length;i++) {
        var tempEnemy = enemyList[i];
        drawLine(x,y,tempEnemy.x,tempEnemy.y);
    }
*/
}



/////////////////////////////////////////////////////////////////////////////////////
function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
	canvasContext.fillStyle = fillColor;
	canvasContext.fillRect(topLeftX,topLeftY,boxWidth,boxHeight);
}

function colorCircle (centerX, centerY, radius, fillColor) {
	canvasContext.fillStyle = fillColor;
	canvasContext.beginPath();
	canvasContext.arc(centerX,centerY,radius,0,Math.PI*2,true);
	canvasContext.fill();
}

function colorHollowCircle (centerX,centerY, radius,lineWidth,color) {
	canvasContext.beginPath();
	canvasContext.arc(centerX,centerY,radius,0,2*Math.PI);
	canvasContext.lineWidth = lineWidth;
	canvasContext.strokeStyle = color;
	canvasContext.stroke();
}
function colorText(showWords, textX, textY, fillColor) {
	canvasContext.fillStyle = fillColor;
	canvasContext.fillText(showWords,textX, textY);
}

function drawLine (x1,y1,x2,y2) {
	canvasContext.beginPath();
	canvasContext.moveTo(x1, y1);
	canvasContext.lineTo(x2, y2);
	canvasContext.lineWidth = 0.5;
	canvasContext.strokeStyle = '#F0F8FF';
	canvasContext.stroke();
}