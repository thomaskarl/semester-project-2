/**
 * Fetching the players 👥
 */

const playerKey1 = localStorage.key(0);
const playerKey2 = localStorage.key(1);
const player1 = localStorage.getItem(playerKey1);
const player2 = localStorage.getItem(playerKey2);



/**
 * Creating the shields 🛡️
 */

const shieldPlayer1 = document.querySelector('.shield-player1');
const shieldPlayer2 = document.querySelector('.shield-player2');

let shield1 = document.createElement('img');
let shield2 = document.createElement('img');
shield1.classList.add('shield');
shield2.classList.add('shield');

shieldPlayer1.appendChild(shield1);
shieldPlayer2.appendChild(shield2);

let shieldUrl = 'assets/images/shields/shield';

let player1shield = '';
let player2shield = '';

if (player1 === 'Eddard Stark') { shield1.src = shieldUrl + '1.svg'; player1shield = shield1; }
if (player1 === 'Loras Tyrell') { shield1.src = shieldUrl + '2.svg'; player1shield = shield1; }
if (player1 === 'Daenerys Targaryen') { shield1.src = shieldUrl + '3.svg'; player1shield = shield1; }
if (player1 === 'Renly Baratheon') { shield1.src = shieldUrl + '4.svg'; player1shield = shield1; }
if (player1 === 'Cersei Lannister') { shield1.src = shieldUrl + '5.svg'; player1shield = shield1; }
if (player1 === 'Jon Arryn') { shield1.src = shieldUrl + '6.svg'; player1shield = shield1; }
if (player1 === 'Maege Mormont') { shield1.src = shieldUrl + '7.svg'; player1shield = shield1; }
if (player1 === 'Quellon Greyjoy') { shield1.src = shieldUrl + '8.svg'; player1shield = shield1; }
if (player1 === 'Gregor Clegane') { shield1.src = shieldUrl + '9.svg'; player1shield = shield1; }
if (player1 === 'Hoster Tully') { shield1.src = shieldUrl + '10.svg'; player1shield = shield1; }

if (player2 === 'Eddard Stark') { shield2.src = shieldUrl + '1.svg'; player2shield = shield2; }
if (player2 === 'Loras Tyrell') { shield2.src = shieldUrl + '2.svg'; player2shield = shield2; }
if (player2 === 'Daenerys Targaryen') { shield2.src = shieldUrl + '3.svg'; player2shield = shield2; }
if (player2 === 'Renly Baratheon') { shield2.src = shieldUrl + '4.svg'; player2shield = shield2; }
if (player2 === 'Cersei Lannister') { shield2.src = shieldUrl + '5.svg'; player2shield = shield2; }
if (player2 === 'Jon Arryn') { shield2.src = shieldUrl + '6.svg'; player2shield = shield2; }
if (player2 === 'Maege Mormont') { shield2.src = shieldUrl + '7.svg'; player2shield = shield2; }
if (player2 === 'Quellon Greyjoy') { shield2.src = shieldUrl + '8.svg'; player2shield = shield2; }
if (player2 === 'Gregor Clegane') { shield2.src = shieldUrl + '9.svg'; player2shield = shield2; }
if (player2 === 'Hoster Tully') { shield2.src = shieldUrl + '10.svg'; player2shield = shield2; }



/**
 * Creating variables 💠
 */

let whosTurn = 1;
let player1score = 0;
let player2score = 0;

const obstacle1 = 5;
const obstacle2 = 10;
const obstacle3 = 15;
const obstacle4 = 20;
const obstacle5 = 25;

const startGame = 0;
const endGame = 30;



/**
 * Setting up the game area
 */

const gameArea = document.querySelector('#game-area');

let gameshield1 = document.createElement('img');
let gameshield2 = document.createElement('img');
gameshield1.classList.add('gameshield');
gameshield1.classList.add('gameshield1');
gameshield2.classList.add('gameshield');
gameshield2.classList.add('gameshield2');

gameshield1.src = player1shield.src;
gameshield2.src = player2shield.src;

gameArea.appendChild(gameshield1);
gameArea.appendChild(gameshield2);

const tile = 100;

const tile01 = tile;
const tile02 = tile * 2;
const tile03 = tile * 3;
const tile04 = tile * 4;
const tile05 = tile * 5;
const tile06 = tile * 6;
const tile07 = tile * 6;
const tile08 = tile * 5;
const tile09 = tile * 4;
const tile10 = tile * 3;
const tile11 = tile * 2;
const tile12 = tile;
const tile13 = tile - tile;
const tile14 = tile - tile;
const tile15 = tile;
const tile16 = tile * 2;
const tile17 = tile * 3;
const tile18 = tile * 4;
const tile19 = tile * 5;
const tile20 = tile * 6;
const tile21 = tile * 6;
const tile22 = tile * 5;
const tile23 = tile * 4;
const tile24 = tile * 3;
const tile25 = tile * 2;
const tile26 = tile;
const tile27 = tile - tile;
const tile28 = tile - tile;
const tile29 = tile;
const tile30 = tile * 2;

let currentXposition = 100;
let currentYposition = 100;



/**
 * Roll the dices 🎲
 */

let player1are = document.querySelector('#position1');
let player2are = document.querySelector('#position2');

// Dice for Player 1
const button1 = document.querySelector('#roll1');

document.onkeydown = function (e) {
	switch (e.key) {
		case 's':
			rollPlayer1();
			break;
		case 'k':
			rollPlayer2();
	}
};

button1.addEventListener('click', rollPlayer1);

function rollPlayer1() {
	if (whosTurn === 1) {

		let dice1 = document.querySelector('#dice1');
		let gameLog1 = document.querySelector('#gamelog1');
		let diceout1 = Math.floor(Math.random() * 6) + 1;
		dice1.innerText = diceout1;
		let info1 = document.createElement('p');
		gameLog1.appendChild(info1);
		info1.innerHTML = 'Rolled ' + diceout1;

		if (diceout1 === 6) {
			info1.innerHTML = 'Rolled 6: one free roll';
			whosTurn = 1;
			button2.style.backgroundColor = 'gray';
			button1.style.backgroundColor = '#1B4D8C';
		} else {
			whosTurn = 2;
			button1.style.backgroundColor = 'gray';
			button2.style.backgroundColor = '#1B4D8C';
		}
		player1score = diceout1 + player1score;
		player1are.innerHTML = player1score;


		function checkObstacle() {
			if (player1score === obstacle1) {
				player1score = player1score - 3;
				info1.innerHTML = ('Hit tile: ' + obstacle1 + ', go back 3 tiles');
			}
			if (player1score === obstacle2) {
				player1score = player1score - 4;
				info1.innerHTML = ('Hit tile: ' + obstacle2 + ', go back 4 tiles');
			}
			if (player1score === obstacle3) {
				player1score = player1score - 6;
				info1.innerHTML = ('Hit tile: ' + obstacle3 + ', go back 6 tiles');
			}
			if (player1score === obstacle4) {
				player1score = player1score - 6;
				info1.innerHTML = ('Hit tile: ' + obstacle4 + ', go back 6 tiles');
			}
			if (player1score === obstacle5) {
				player1score = player1score - 7;
				info1.innerHTML = ('Hit tile: ' + obstacle5 + ', go back 7 tiles');
			}
		}







		// switch (diceout1) {
		// 	case 1:
		// 		for (var i = 0; i < diceout1; i++) {
		//
		// 			setInterval(function () {
		// 				gameshield1.style.transform = 'translateX(' + currentPosition + '00px)';
		// 			}, 1000);
		// 				currentPosition++;
		// 			clearInterval();
		// 		}
		// 		break;




		switch (diceout1) {
			case 1:
				for (var i = 0; i < diceout1; i++) {
					gameshield1.style.transform = 'translateX(' + currentXposition + 'px)';
					currentXposition += 100;
					if (currentXposition >= 700) {
						gameshield1.style.transform ='translateX(' + currentXposition + 'px) translateY(' + currentYposition + 'px)';
					}
					checkObstacle();
				}
				break;
			case 2:
				for (var i = 0; i < diceout1; i++) {
					gameshield1.style.transform = 'translateX(' + currentXposition + 'px)';
					currentXposition += 100;
					if (currentXposition >= 700) {
						gameshield1.style.transform ='translateX(' + currentXposition + 'px) translateY(' + currentYposition + 'px)';
					}
					checkObstacle();
				}
				break;
			case 3:
				for (var i = 0; i < diceout1; i++) {
					gameshield1.style.transform = 'translateX(' + currentXposition + 'px)';
					currentXposition += 100;
					if (currentXposition >= 700) {
						gameshield1.style.transform ='translateX(' + currentXposition + 'px) translateY(' + currentYposition + 'px)';
					}
					checkObstacle();
				}
				break;
			case 4:
				for (var i = 0; i < diceout1; i++) {
					gameshield1.style.transform = 'translateX(' + currentXposition + 'px)';
					currentXposition += 100;
					if (currentXposition >= 700) {
						gameshield1.style.transform ='translateX(' + currentXposition + 'px) translateY(' + currentYposition + 'px)';
					}
					checkObstacle();
				}
				break;
			case 5:
				for (var i = 0; i < diceout1; i++) {
					gameshield1.style.transform = 'translateX(' + currentXposition + 'px)';
					currentXposition += 100;
					if (currentXposition >= 700) {
						gameshield1.style.transform ='translateX(' + currentXposition + 'px) translateY(' + currentYposition + 'px)';
					}
					checkObstacle();
				}
				break;
			case 6:
				for (var i = 0; i < diceout1; i++) {
					gameshield1.style.transform = 'translateX(' + currentXposition + 'px)';
					currentXposition += 100;
					if (currentXposition >= 700) {
						gameshield1.style.transform ='translateX(' + currentXposition + 'px) translateY(' + currentYposition + 'px)';
					}
					checkObstacle();
				}
				break;
		}


		if (player1score >= 30) {
			alert('Player 1 is the winner');
		}


		// if (player1score === 1) { gameshield1.style.transform = 'translateX(' + tile01 + 'px)'; }
		// if (player1score === 2) { gameshield1.style.transform = 'translateX(' + tile02 + 'px)'; }
		// if (player1score === 3) { gameshield1.style.transform = 'translateX(' + tile03 + 'px)'; }
		// if (player1score === 4) { gameshield1.style.transform = 'translateX(' + tile04 + 'px)'; }
		// if (player1score === 5) { gameshield1.style.transform = 'translateX(' + tile05 + 'px)'; }
		// if (player1score === 6) { gameshield1.style.transform = 'translateX(' + tile06 + 'px)'; }
		// if (player1score === 7) { gameshield1.style.transform = 'translateX(' + tile07 + 'px) translateY(' + tile + 'px)'; }
		// if (player1score === 8) { gameshield1.style.transform = 'translateX(' + tile08 + 'px) translateY(' + tile + 'px)'; }
		// if (player1score === 9) { gameshield1.style.transform = 'translateX(' + tile09 + 'px) translateY(' + tile + 'px)'; }
		// if (player1score === 10) { gameshield1.style.transform = 'translateX(' + tile10 + 'px) translateY(' + tile + 'px)'; }
		// if (player1score === 11) { gameshield1.style.transform = 'translateX(' + tile11 + 'px) translateY(' + tile + 'px)'; }
		// if (player1score === 12) { gameshield1.style.transform = 'translateX(' + tile12 + 'px) translateY(' + tile + 'px)'; }
		// if (player1score === 13) { gameshield1.style.transform = 'translateX(' + tile13 + 'px) translateY(' + tile + 'px)'; }
		// if (player1score === 14) { gameshield1.style.transform = 'translateX(' + tile14 + 'px) translateY(' + tile * 2 + 'px)'; }
		// if (player1score === 15) { gameshield1.style.transform = 'translateX(' + tile15 + 'px) translateY(' + tile * 2 + 'px)'; }
		// if (player1score === 16) { gameshield1.style.transform = 'translateX(' + tile16 + 'px) translateY(' + tile * 2 + 'px)'; }
		// if (player1score === 17) { gameshield1.style.transform = 'translateX(' + tile17 + 'px) translateY(' + tile * 2 + 'px)'; }
		// if (player1score === 18) { gameshield1.style.transform = 'translateX(' + tile18 + 'px) translateY(' + tile * 2 + 'px)'; }
		// if (player1score === 19) { gameshield1.style.transform = 'translateX(' + tile19 + 'px) translateY(' + tile * 2 + 'px)'; }
		// if (player1score === 20) { gameshield1.style.transform = 'translateX(' + tile20 + 'px) translateY(' + tile * 2 + 'px)'; }
		// if (player1score === 21) { gameshield1.style.transform = 'translateX(' + tile21 + 'px) translateY(' + tile * 3 + 'px)'; }
		// if (player1score === 22) { gameshield1.style.transform = 'translateX(' + tile22 + 'px) translateY(' + tile * 3 + 'px)'; }
		// if (player1score === 23) { gameshield1.style.transform = 'translateX(' + tile23 + 'px) translateY(' + tile * 3 + 'px)'; }
		// if (player1score === 24) { gameshield1.style.transform = 'translateX(' + tile24 + 'px) translateY(' + tile * 3 + 'px)'; }
		// if (player1score === 25) { gameshield1.style.transform = 'translateX(' + tile25 + 'px) translateY(' + tile * 3 + 'px)'; }
		// if (player1score === 26) { gameshield1.style.transform = 'translateX(' + tile26 + 'px) translateY(' + tile * 3 + 'px)'; }
		// if (player1score === 27) { gameshield1.style.transform = 'translateX(' + tile27 + 'px) translateY(' + tile * 3 + 'px)'; }
		// if (player1score === 28) { gameshield1.style.transform = 'translateX(' + tile28 + 'px) translateY(' + tile * 4 + 'px)'; }
		// if (player1score === 29) { gameshield1.style.transform = 'translateX(' + tile29 + 'px) translateY(' + tile * 4 + 'px)'; }
		// if (player1score === 30) { gameshield1.style.transform = 'translateX(' + tile30 + 'px) translateY(' + tile * 4 + 'px)'; }
		//


	}
}


function stepDown(ps) {
	ps.style.transform = 'translateY(100px)';
}
function stepUp(ps) {
	ps.style.transform = 'translateY(-100px)';
}
function stepLeft(ps) {
	ps.style.transform = 'translateX(-100px)';
}
function stepRight(ps) {
	ps.style.transform = 'translateX(100px)';
}



// Dice for Player 2
const button2 = document.querySelector('#roll2');
button2.addEventListener('click', rollPlayer2);

function rollPlayer2() {
	if (whosTurn === 2) {
		let dice2 = document.querySelector('#dice2');
		let gameLog2 = document.querySelector('#gamelog2');
		let diceout2 = Math.floor(Math.random() * 6) + 1;
		dice2.innerText = diceout2;
		let info2 = document.createElement('p');
		gameLog2.appendChild(info2);
		info2.innerHTML = 'Rolled ' + diceout2;

		if (diceout2 === 6) {
			info2.innerHTML = 'Rolled 6: one free roll';
			whosTurn = 2;
			button1.style.backgroundColor = 'gray';
			button2.style.backgroundColor = '#1B4D8C';
		} else {
			whosTurn = 1;
			button2.style.backgroundColor = 'gray';
			button1.style.backgroundColor = '#1B4D8C';
		}
		player2score = diceout2 + player2score;
		player2are.innerHTML = player2score;

		if (player2score === obstacle1) {
			player2score = player2score - 3;
			info2.innerHTML = ('Hit tile: ' + obstacle1 + ', go back 3 tiles');
		}
		if (player2score === obstacle2) {
			player2score = player2score - 4;
			info2.innerHTML = ('Hit tile: ' + obstacle2 + ', go back 4 tiles');
		}
		if (player2score === obstacle3) {
			player2score = player2score - 6;
			info2.innerHTML = ('Hit tile: ' + obstacle3 + ', go back 6 tiles');
		}
		if (player2score === obstacle4) {
			player2score = player2score - 6;
			info2.innerHTML = ('Hit tile: ' + obstacle4 + ', go back 6 tiles');
		}
		if (player2score === obstacle5) {
			player2score = player2score - 7;
			info2.innerHTML = ('Hit tile: ' + obstacle5 + ', go back 7 tiles');
		}

		if (player2score >= 30) {
			alert('Player 2 is the winner');
		}




		if (player2score === 1) { gameshield2.style.transform = 'translateX(' + tile01 + 'px)'; }
		if (player2score === 2) { gameshield2.style.transform = 'translateX(' + tile02 + 'px)'; }
		if (player2score === 3) { gameshield2.style.transform = 'translateX(' + tile03 + 'px)'; }
		if (player2score === 4) { gameshield2.style.transform = 'translateX(' + tile04 + 'px)'; }
		if (player2score === 5) { gameshield2.style.transform = 'translateX(' + tile05 + 'px)'; }
		if (player2score === 6) { gameshield2.style.transform = 'translateX(' + tile06 + 'px)'; }
		if (player2score === 7) { gameshield2.style.transform = 'translateX(' + tile07 + 'px) translateY(' + tile + 'px)'; }
		if (player2score === 8) { gameshield2.style.transform = 'translateX(' + tile08 + 'px) translateY(' + tile + 'px)'; }
		if (player2score === 9) { gameshield2.style.transform = 'translateX(' + tile09 + 'px) translateY(' + tile + 'px)'; }
		if (player2score === 10) { gameshield2.style.transform = 'translateX(' + tile10 + 'px) translateY(' + tile + 'px)'; }
		if (player2score === 11) { gameshield2.style.transform = 'translateX(' + tile11 + 'px) translateY(' + tile + 'px)'; }
		if (player2score === 12) { gameshield2.style.transform = 'translateX(' + tile12 + 'px) translateY(' + tile + 'px)'; }
		if (player2score === 13) { gameshield2.style.transform = 'translateX(' + tile13 + 'px) translateY(' + tile + 'px)'; }
		if (player2score === 14) { gameshield2.style.transform = 'translateX(' + tile14 + 'px) translateY(' + tile * 2 + 'px)'; }
		if (player2score === 15) { gameshield2.style.transform = 'translateX(' + tile15 + 'px) translateY(' + tile * 2 + 'px)'; }
		if (player2score === 16) { gameshield2.style.transform = 'translateX(' + tile16 + 'px) translateY(' + tile * 2 + 'px)'; }
		if (player2score === 17) { gameshield2.style.transform = 'translateX(' + tile17 + 'px) translateY(' + tile * 2 + 'px)'; }
		if (player2score === 18) { gameshield2.style.transform = 'translateX(' + tile18 + 'px) translateY(' + tile * 2 + 'px)'; }
		if (player2score === 19) { gameshield2.style.transform = 'translateX(' + tile19 + 'px) translateY(' + tile * 2 + 'px)'; }
		if (player2score === 20) { gameshield2.style.transform = 'translateX(' + tile20 + 'px) translateY(' + tile * 2 + 'px)'; }
		if (player2score === 21) { gameshield2.style.transform = 'translateX(' + tile21 + 'px) translateY(' + tile * 3 + 'px)'; }
		if (player2score === 22) { gameshield2.style.transform = 'translateX(' + tile22 + 'px) translateY(' + tile * 3 + 'px)'; }
		if (player2score === 23) { gameshield2.style.transform = 'translateX(' + tile23 + 'px) translateY(' + tile * 3 + 'px)'; }
		if (player2score === 24) { gameshield2.style.transform = 'translateX(' + tile24 + 'px) translateY(' + tile * 3 + 'px)'; }
		if (player2score === 25) { gameshield2.style.transform = 'translateX(' + tile25 + 'px) translateY(' + tile * 3 + 'px)'; }
		if (player2score === 26) { gameshield2.style.transform = 'translateX(' + tile26 + 'px) translateY(' + tile * 3 + 'px)'; }
		if (player2score === 27) { gameshield2.style.transform = 'translateX(' + tile27 + 'px) translateY(' + tile * 3 + 'px)'; }
		if (player2score === 28) { gameshield2.style.transform = 'translateX(' + tile28 + 'px) translateY(' + tile * 4 + 'px)'; }
		if (player2score === 29) { gameshield2.style.transform = 'translateX(' + tile29 + 'px) translateY(' + tile * 4 + 'px)'; }
		if (player2score === 30) { gameshield2.style.transform = 'translateX(' + tile30 + 'px) translateY(' + tile * 4 + 'px)'; }





	}


}



/**
 * Autoroll button
 */

let speedOfautoroll = 1000;

let autoRoll = document.querySelector('#autoroll');
autoRoll.addEventListener('click', function () {
	var positionInterval = setInterval(function () {
		if (player1score < 30 && player2score < 30) {
			if (whosTurn === 1) {
				document.getElementById("roll1").click();
			}
			else {
				document.getElementById("roll2").click();
			}
		} else {
			clearInterval(positionInterval);
		}

	}, speedOfautoroll);
}, false);





// /**
//  * Setting up the canvas
//  */
//
// const canvas = document.getElementById("canvas");
// canvas.style.border = '10px solid black';
// canvas.style.width = '600px';
// const ctx = canvas.getContext("2d");
//
//
//
// const speedOfCanvas = 10;
//
// // let start = -165;
// setInterval(function () {
//
// 	ctx.fillStyle = "white";
// 	ctx.fillRect(0, 0, canvas.width, canvas.height);
//
// 	if (player1score === 1) {  ctx.fillRect(10,60,10,10); ctx.fillStyle="#FF0000";}
// 	if (player1score === 2) {  ctx.fillRect(20,60,10,10); ctx.fillStyle="#FF0000";}
// 	if (player1score === 3) {  ctx.fillRect(30,60,10,10); ctx.fillStyle="#FF0000";}
// 	if (player1score === 4) {  ctx.fillRect(40,60,10,10); ctx.fillStyle="#FF0000";}
// 	if (player1score === 5) {  ctx.fillRect(50,60,10,10); ctx.fillStyle="#FF0000";}
// 	if (player1score === 6) {  ctx.fillRect(60,60,10,10); ctx.fillStyle="#FF0000";}
// 	if (player1score === 7) {  ctx.fillRect(70,60,10,10); ctx.fillStyle="#FF0000";}
// 	if (player1score === 8) {  ctx.fillRect(80,60,10,10); ctx.fillStyle="#FF0000";}
// 	if (player1score === 9) {  ctx.fillRect(90,60,10,10); ctx.fillStyle="#FF0000";}
// 	if (player1score === 10) {  ctx.fillRect(100,60,10,10); ctx.fillStyle="#FF0000";}
// 	if (player1score === 11) {  ctx.fillRect(110,60,10,10); ctx.fillStyle="#FF0000";}
// 	if (player1score === 12) {  ctx.fillRect(120,60,10,10); ctx.fillStyle="#FF0000";}
// 	if (player1score === 13) {  ctx.fillRect(130,60,10,10); ctx.fillStyle="#FF0000";}
// 	if (player1score === 14) {  ctx.fillRect(140,60,10,10); ctx.fillStyle="#FF0000";}
// 	if (player1score === 15) {  ctx.fillRect(150,60,10,10); ctx.fillStyle="#FF0000";}
// 	if (player1score === 16) {  ctx.fillRect(160,60,10,10); ctx.fillStyle="#FF0000";}
// 	if (player1score === 17) {  ctx.fillRect(170,60,10,10); ctx.fillStyle="#FF0000";}
// 	if (player1score === 18) {  ctx.fillRect(180,60,10,10); ctx.fillStyle="#FF0000";}
// 	if (player1score === 19) {  ctx.fillRect(190,60,10,10); ctx.fillStyle="#FF0000";}
//
//
// 	if (player2score === 1) {  ctx.fillRect(10,60,10,10); ctx.fillStyle="#FFFF00";}
// 	if (player2score === 2) {  ctx.fillRect(20,60,10,10); ctx.fillStyle="#FFFF00";}
// 	if (player2score === 3) {  ctx.fillRect(30,60,10,10); ctx.fillStyle="#FFFF00";}
// 	if (player2score === 4) {  ctx.fillRect(40,60,10,10); ctx.fillStyle="#FFFF00";}
// 	if (player2score === 5) {  ctx.fillRect(50,60,10,10); ctx.fillStyle="#FFFF00";}
// 	if (player2score === 6) {  ctx.fillRect(60,60,10,10); ctx.fillStyle="#FFFF00";}
// 	if (player2score === 7) {  ctx.fillRect(70,60,10,10); ctx.fillStyle="#FFFF00";}
// 	if (player2score === 8) {  ctx.fillRect(80,60,10,10); ctx.fillStyle="#FFFF00";}
// 	if (player2score === 9) {  ctx.fillRect(90,60,10,10); ctx.fillStyle="#FFFF00";}
// 	if (player2score === 10) {  ctx.fillRect(100,60,10,10); ctx.fillStyle="#FFFF00";}
// 	if (player2score === 11) {  ctx.fillRect(110,60,10,10); ctx.fillStyle="#FFFF00";}
// 	if (player2score === 12) {  ctx.fillRect(120,60,10,10); ctx.fillStyle="#FFFF00";}
// 	if (player2score === 13) {  ctx.fillRect(130,60,10,10); ctx.fillStyle="#FFFF00";}
// 	if (player2score === 14) {  ctx.fillRect(140,60,10,10); ctx.fillStyle="#FFFF00";}
// 	if (player2score === 15) {  ctx.fillRect(150,60,10,10); ctx.fillStyle="#FFFF00";}
// 	if (player2score === 16) {  ctx.fillRect(160,60,10,10); ctx.fillStyle="#FFFF00";}
// 	if (player2score === 17) {  ctx.fillRect(170,60,10,10); ctx.fillStyle="#FFFF00";}
// 	if (player2score === 18) {  ctx.fillRect(180,60,10,10); ctx.fillStyle="#FFFF00";}
// 	if (player2score === 19) {  ctx.fillRect(190,60,10,10); ctx.fillStyle="#FFFF00";}
//
//
//
//
// }, speedOfCanvas);