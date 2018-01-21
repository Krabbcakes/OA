

////////////////////////////////// ENEMIES  /////////////////
function addEnemy (x,y) {
	var tempEnemy = new Enemy (x,y);
	tempEnemy.vel_x = (Math.floor(Math.random() * 5)) - 2;
	tempEnemy.vel_y = 4;
	enemyList.push(tempEnemy);
}

function enemyUpdate () {
	   for(var i=0;i<enemyList.length;i++) {
        enemyList[i].update();
    }
}




function addEnemySpawner (x,y) {
	var tempEnemySpawner = new EnemySpawner (x,y);
//	tempEnemySpawner.x = 400;
//	tempEnemySpawner.y = 100;
	enemySpawnerList.push(tempEnemySpawner);
}

function enemySpawnerUpdate () {
	   for(var i=0;i<enemySpawnerList.length;i++) {
        enemySpawnerList[i].update();
    }
}

///////////////////////////////////// PLAYER  //////////////////

function addTurret (x,y) {
	var tempTurret = new Turret (x,y);
	tempTurret.x = 400;
	tempTurret.y = 450;
	turretList.push(tempTurret);
}

function turretUpdate () {
	   for(var i=0;i<turretList.length;i++) {
        turretList[i].update();
    }
}







