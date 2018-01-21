



function drawAll() {
colorRect(0,0, canvas.width, canvas.height, 'black');
colorCircle(400,450,5,'yellow');
}




function drawEnemy (x,y,radius) {
	colorCircle(x,y,3,'brown');
	drawLine(x,y,400,450);
}
function drawEnemySpawner (x,y,radius) {
	colorCircle(x,y,15,'DarkRed');
} 

function drawTurret (x,y,radius) {
	colorCircle(x,y,20,'Bisque');
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

function colorText(showWords, textX, textY, fillColor) {
	canvasContext.fillStyle = fillColor;
	canvasContext.fillText(showWords,textX, textY);
}

function drawLine (x1,y1,x2,y2) {
	canvasContext.beginPath();
	canvasContext.moveTo(x1, y1);
	canvasContext.lineTo(x2, y2);
	canvasContext.lineWidth = 0.3;
	canvasContext.strokeStyle = '#F0F8FF';
	canvasContext.stroke();
}