



function drawAll() {
colorRect(0,0, canvas.width, canvas.height, 'black');
colorCircle(400,450,5,'yellow');
}







function drawEnemySpawner (x,y) {
	colorCircle(x,y,25,'DarkRed');
} 

function drawTurret (x,y,radius,Hx,Hy,Hradius,Hcolor) {
//	colorCircle(x,y,71,'white');
//	colorCircle(x,y,70,'black');
	colorCircle(x,y,20,'Bisque');
	colorHollowCircle(Hx,Hy,Hradius,'Hcolor')
}


function drawEnemy (x,y,radius) {
	colorCircle(x,y,radius,'brown');

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

function colorHollowCircle (centerHX,centerHY,Hradius,HlineWidth,Hcolor) {
	canvasContext.beginPath();
	canvasContext.arc(centerHX,centerHY,Hradius,0,2*Math.PI);
	canvasContext.lineWidth = HlineWidth;
	canvasContext.strokeStyle = 'Hcolor'
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
	canvasContext.lineWidth = 0.3;
	canvasContext.strokeStyle = '#F0F8FF';
	canvasContext.stroke();
}