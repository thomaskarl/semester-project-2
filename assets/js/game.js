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

let currentXpositionPlayer1 = 0;
let currentYpositionPlayer1 = 115;
let currentXpositionPlayer2 = 0;
let currentYpositionPlayer2 = 115;

let rollSumPlayer1 = 0;
let rollSumPlayer2 = 0;


/**
 * Setting up the game area 🎮
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

const diceUrl = 'assets/images/dice/';

const moveSound = new Audio('assets/sounds/move.mp3');
const obstacleSound = new Audio('assets/sounds/obstacle.mp3');
const winSound = new Audio('assets/sounds/win.mp3');



/**
 * Roll the dices 🎲
 */

const player1are = document.querySelector('#position1');
const player2are = document.querySelector('#position2');

// Roll with keyboard
document.onkeydown = function (e) {
	switch (e.key) {
		case 's':
			rollPlayer1();
			break;
		case 'k':
			rollPlayer2();
	}
};

// Dice for Player 1
const button1 = document.querySelector('#roll1');
button1.style.backgroundColor = '#1B4D8C';

const dice1 = document.querySelector('#dice1');
const diceSvg1 = document.createElement('img');
diceSvg1.classList.add('dice');
dice1.appendChild(diceSvg1);

button1.addEventListener('click', rollPlayer1);

function rollPlayer1() {
	if (whosTurn === 1) {
		rollSumPlayer1++;

		let gameLog1 = document.querySelector('#gamelog1');
		let diceout1 = Math.floor(Math.random() * 6) + 1;

		switch (diceout1) {
			case 1:
				setTimeout(function () { diceSvg1.src = diceUrl + '2.svg'; }, 100);
				setTimeout(function () { diceSvg1.src = diceUrl + '3.svg'; }, 200);
				setTimeout(function () { diceSvg1.src = diceUrl + '4.svg'; }, 300);
				setTimeout(function () { diceSvg1.src = diceUrl + '1.svg'; }, 400);
				break;
			case 2:
				setTimeout(function () { diceSvg1.src = diceUrl + '2.svg'; }, 100);
				setTimeout(function () { diceSvg1.src = diceUrl + '3.svg'; }, 200);
				setTimeout(function () { diceSvg1.src = diceUrl + '4.svg'; }, 300);
				setTimeout(function () { diceSvg1.src = diceUrl + '2.svg'; }, 400);
				break;
			case 3:
				setTimeout(function () { diceSvg1.src = diceUrl + '2.svg'; }, 100);
				setTimeout(function () { diceSvg1.src = diceUrl + '3.svg'; }, 200);
				setTimeout(function () { diceSvg1.src = diceUrl + '4.svg'; }, 300);
				setTimeout(function () { diceSvg1.src = diceUrl + '3.svg'; }, 400);
				break;
			case 4:
				setTimeout(function () { diceSvg1.src = diceUrl + '2.svg'; }, 100);
				setTimeout(function () { diceSvg1.src = diceUrl + '3.svg'; }, 200);
				setTimeout(function () { diceSvg1.src = diceUrl + '1.svg'; }, 300);
				setTimeout(function () { diceSvg1.src = diceUrl + '4.svg'; }, 400);
				break;
			case 5:
				setTimeout(function () { diceSvg1.src = diceUrl + '2.svg'; }, 100);
				setTimeout(function () { diceSvg1.src = diceUrl + '3.svg'; }, 200);
				setTimeout(function () { diceSvg1.src = diceUrl + '4.svg'; }, 300);
				setTimeout(function () { diceSvg1.src = diceUrl + '5.svg'; }, 400);
				break;
			case 6:
				setTimeout(function () { diceSvg1.src = diceUrl + '2.svg'; }, 100);
				setTimeout(function () { diceSvg1.src = diceUrl + '3.svg'; }, 200);
				setTimeout(function () { diceSvg1.src = diceUrl + '4.svg'; }, 300);
				setTimeout(function () { diceSvg1.src = diceUrl + '6.svg'; }, 400);
		}

		let info1 = document.createElement('p');
		gameLog1.appendChild(info1);
		info1.innerHTML = 'Rolled ' + diceout1;

		function resolveAfter3Seconds() {
			return new Promise(resolve => {
				setTimeout(() => {
					resolve('stop');
					checkObstacle();

				}, 3200);
			});
		}

		async function asyncCall() {
			console.log('move');
			for (let i = 0; i < diceout1; i++) {
				(function (ms) {
					setTimeout(function () {
						moveShield();
						moveSound.play();
					}, i * 500);
				})(i);
			}
			let result = await resolveAfter3Seconds();
			console.log(result);
		}
		asyncCall();

		function moveShield() {
			player1score++;
			player1are.innerHTML = player1score;

			if (player1score >= 1 && player1score <= 6) stepRight(); //➡️
			if (player1score === 7) stepDown(); //⬇️
			if (player1score >= 7 && player1score <= 13) stepLeft(); //⬅️
			if (player1score === 14) stepDown(); //⬇️
			if (player1score >= 14 && player1score <= 20) stepRight(); //➡️
			if (player1score === 21) stepDown(); //⬇️
			if (player1score >= 21 && player1score <= 27) stepLeft(); //⬅️
			if (player1score === 28) stepDown(); //⬇️
			if (player1score >= 28 && player1score <= 30) stepRight(); //⬅️

			checkWinner();
			checkWhosTurn();
		}

		function stepDown() {
			gameshield1.style.top = currentYpositionPlayer1 + 'px';
			currentYpositionPlayer1 += 100;
		}

		function stepLeft() {
			console.log(currentXpositionPlayer1);
			gameshield1.style.transform = 'translateX(' + currentXpositionPlayer1 + 'px) rotate(-10deg)';
			currentXpositionPlayer1 -= 100;
		}

		function stepRight() {
			currentXpositionPlayer1 += 100;
			gameshield1.style.transform = 'translateX(' + currentXpositionPlayer1 + 'px) rotate(10deg)';
			console.log(currentXpositionPlayer1);
		}

		function checkWhosTurn() {
			if (diceout1 === 6) {
				info1.innerHTML = '⭐ Rolled 6: one free roll';
				whosTurn = 1;
				button2.style.backgroundColor = 'gray';
				button1.style.backgroundColor = '#1B4D8C';
				button1.disabled = "enable";
			} else {
				whosTurn = 2;
				button1.style.backgroundColor = 'gray';
				button2.style.backgroundColor = '#1B4D8C';
				button1.disabled = "disabled";
			}

		}


		function checkObstacle() {
			if (player1score === obstacle1) {
				obstacleSound.play();
				player1score = player1score - 2;
				info1.innerHTML = ('Hit tile: ' + obstacle1 + ', go back 2 tiles');
				player1are.innerHTML = player1score;
				currentXpositionPlayer1 = 300;
				setTimeout(function(){
					gameshield1.style.transform = 'translateX(' + currentXpositionPlayer1 + 'px)';
					}, 500);
			}
			if (player1score === obstacle2) {
				obstacleSound.play();
				player1score = player1score - 3;
				info1.innerHTML = ('Hit tile: ' + obstacle2 + ', go back 3 tiles');
				player1are.innerHTML = player1score;
				currentXpositionPlayer1 = 600;
				setTimeout(function(){
					gameshield1.style.transform = 'translateX(' + currentXpositionPlayer1 + 'px)';
				}, 500);
			}
			if (player1score === obstacle3) {
				obstacleSound.play();
				player1score = player1score - 1;
				info1.innerHTML = ('Hit tile: ' + obstacle3 + ', go back 1 tiles');
				player1are.innerHTML = player1score;
				currentXpositionPlayer1 = 0;
				setTimeout(function(){
					gameshield1.style.transform = 'translateX(' + currentXpositionPlayer1 + 'px)';
				}, 500);
			}
			if (player1score === obstacle4) {
				obstacleSound.play();
				player1score = player1score - 4;
				info1.innerHTML = ('Hit tile: ' + obstacle4 + ', go back 4 tiles');
				player1are.innerHTML = player1score;
				currentXpositionPlayer1 = 200;
				setTimeout(function(){
					gameshield1.style.transform = 'translateX(' + currentXpositionPlayer1 + 'px)';
				}, 500);
			}
			if (player1score === obstacle5) {
				obstacleSound.play();
				player1score = player1score - 3;
				info1.innerHTML = ('Hit tile: ' + obstacle5 + ', go back 3 tiles');
				player1are.innerHTML = player1score;
				currentXpositionPlayer1 = 500;
				setTimeout(function(){
					gameshield1.style.transform = 'translateX(' + currentXpositionPlayer1 + 'px)';
				}, 500);
			}
		}

		function checkWinner() {
			if (player1score === 30) {
				localStorage.winner = player1;
				localStorage.rolls = rollSumPlayer1;
				winSound.play();
				console.log('Player 1 is the winner');
				setTimeout(function(){
					document.getElementById("winner-button").click();
				}, 2000);
			}
		}
	}
}


// Dice for Player 2
const button2 = document.querySelector('#roll2');

button2.addEventListener('click', rollPlayer2);
button2.style.backgroundColor = 'gray';

const dice2 = document.querySelector('#dice2');
const diceSvg2 = document.createElement('img');
diceSvg2.classList.add('dice');
dice2.appendChild(diceSvg2);

function rollPlayer2() {
	if (whosTurn === 2) {
		rollSumPlayer2++;

		let gameLog2 = document.querySelector('#gamelog2');
		let diceout2 = Math.floor(Math.random() * 6) + 1;

		switch (diceout2) {
			case 1:
				setTimeout(function () { diceSvg2.src = diceUrl + '2.svg'; }, 100);
				setTimeout(function () { diceSvg2.src = diceUrl + '3.svg'; }, 200);
				setTimeout(function () { diceSvg2.src = diceUrl + '4.svg'; }, 300);
				setTimeout(function () { diceSvg2.src = diceUrl + '1.svg'; }, 400);
				break;
			case 2:
				setTimeout(function () { diceSvg2.src = diceUrl + '2.svg'; }, 100);
				setTimeout(function () { diceSvg2.src = diceUrl + '3.svg'; }, 200);
				setTimeout(function () { diceSvg2.src = diceUrl + '4.svg'; }, 300);
				setTimeout(function () { diceSvg2.src = diceUrl + '2.svg'; }, 400);
				break;
			case 3:
				setTimeout(function () { diceSvg2.src = diceUrl + '2.svg'; }, 100);
				setTimeout(function () { diceSvg2.src = diceUrl + '3.svg'; }, 200);
				setTimeout(function () { diceSvg2.src = diceUrl + '4.svg'; }, 300);
				setTimeout(function () { diceSvg2.src = diceUrl + '3.svg'; }, 400);
				break;
			case 4:
				setTimeout(function () { diceSvg2.src = diceUrl + '2.svg'; }, 100);
				setTimeout(function () { diceSvg2.src = diceUrl + '3.svg'; }, 200);
				setTimeout(function () { diceSvg2.src = diceUrl + '1.svg'; }, 300);
				setTimeout(function () { diceSvg2.src = diceUrl + '4.svg'; }, 400);
				break;
			case 5:
				setTimeout(function () { diceSvg2.src = diceUrl + '2.svg'; }, 100);
				setTimeout(function () { diceSvg2.src = diceUrl + '3.svg'; }, 200);
				setTimeout(function () { diceSvg2.src = diceUrl + '4.svg'; }, 300);
				setTimeout(function () { diceSvg2.src = diceUrl + '5.svg'; }, 400);
				break;
			case 6:
				setTimeout(function () { diceSvg2.src = diceUrl + '2.svg'; }, 100);
				setTimeout(function () { diceSvg2.src = diceUrl + '3.svg'; }, 200);
				setTimeout(function () { diceSvg2.src = diceUrl + '4.svg'; }, 300);
				setTimeout(function () { diceSvg2.src = diceUrl + '6.svg'; }, 400);
		}

		let info2 = document.createElement('p');
		gameLog2.appendChild(info2);
		info2.innerHTML = 'Rolled ' + diceout2;

		function resolveAfter3Seconds() {
			return new Promise(resolve => {
				setTimeout(() => {
					resolve('stop');
					checkObstacle();

				}, 3200);
			});
		}

		async function asyncCall() {
			console.log('move');
			for (var i = 0; i < diceout2; i++) {
				(function (ms) {
					setTimeout(function () {
						moveShield();
						moveSound.play();
					}, i * 500);
				})(i);
			}
			var result = await resolveAfter3Seconds();
			console.log(result);
		}
		asyncCall();

		function moveShield() {
			player2score++;
			player2are.innerHTML = player2score;

			if (player2score >= 1 && player2score <= 6) stepRight(); //➡️
			if (player2score === 7) stepDown(); //⬇️
			if (player2score >= 7 && player2score <= 13) stepLeft(); //⬅️
			if (player2score === 14) stepDown(); //⬇️
			if (player2score >= 14 && player2score <= 20) stepRight(); //➡️
			if (player2score === 21) stepDown(); //⬇️
			if (player2score >= 21 && player2score <= 27) stepLeft(); //⬅️
			if (player2score === 28) stepDown(); //⬇️
			if (player2score >= 28 && player2score <= 30) stepRight(); //⬅️

			checkWinner();
			checkWhosTurn();
		}

		function stepDown() {
			gameshield2.style.top = currentYpositionPlayer2 + 'px';
			currentYpositionPlayer2 += 100;
		}

		function stepLeft() {
			console.log(currentXpositionPlayer2);
			gameshield2.style.transform = 'translateX(' + currentXpositionPlayer2 + 'px) rotate(-10deg)';
			currentXpositionPlayer2 -= 100;
		}

		function stepRight() {
			currentXpositionPlayer2 += 100;
			gameshield2.style.transform = 'translateX(' + currentXpositionPlayer2 + 'px) rotate(10deg)';
			console.log(currentXpositionPlayer2);
		}

		function checkWhosTurn() {
			if (diceout2 === 6) {
				info2.innerHTML = '⭐ Rolled 6: one free roll';
				whosTurn = 2;
				button1.style.backgroundColor = 'gray';
				button2.style.backgroundColor = '#1B4D8C';
				button2.disabled = "enable";
			} else {
				whosTurn = 1;
				button2.style.backgroundColor = 'gray';
				button1.style.backgroundColor = '#1B4D8C';
				button2.disabled = "disabled";
			}

		}


		function checkObstacle() {
			if (player2score === obstacle1) {
				obstacleSound.play();
				info2.innerHTML = ('Hit tile: ' + obstacle1 + ', go back 2 tiles');
				player2are.innerHTML = player2score;
				setTimeout(function(){
					player2score = player2score - 2;
					currentXpositionPlayer2 = 300;
					gameshield2.style.transform = 'translateX(' + currentXpositionPlayer2 + 'px)';
				}, 500);
			}
			if (player2score === obstacle2) {
				obstacleSound.play();
				info2.innerHTML = ('Hit tile: ' + obstacle2 + ', go back 3 tiles');
				player2are.innerHTML = player2score;
				setTimeout(function(){
					player2score = player2score - 3;
					currentXpositionPlayer2 = 600;
					gameshield2.style.transform = 'translateX(' + currentXpositionPlayer2 + 'px)';
				}, 500);
			}
			if (player2score === obstacle3) {
				obstacleSound.play();
				info2.innerHTML = ('Hit tile: ' + obstacle3 + ', go back 1 tiles');
				player2are.innerHTML = player2score;
				setTimeout(function(){
					player2score = player2score - 1;
					currentXpositionPlayer2 = 0;
					gameshield2.style.transform = 'translateX(' + currentXpositionPlayer2 + 'px)';
				}, 500);
			}
			if (player2score === obstacle4) {
				obstacleSound.play();
				info2.innerHTML = ('Hit tile: ' + obstacle4 + ', go back 4 tiles');
				player2are.innerHTML = player2score;
				setTimeout(function(){
					player2score = player2score - 4;
					currentXpositionPlayer2 = 200;
					gameshield2.style.transform = 'translateX(' + currentXpositionPlayer2 + 'px)';
				}, 500);
			}
			if (player2score === obstacle5) {
				obstacleSound.play();
				info2.innerHTML = ('Hit tile: ' + obstacle5 + ', go back 3 tiles');
				player2are.innerHTML = player2score;
				setTimeout(function(){
					player2score = player2score - 3;
					currentXpositionPlayer2 = 500;
					gameshield2.style.transform = 'translateX(' + currentXpositionPlayer2 + 'px)';
				}, 500);
			}
		}

		function checkWinner() {
			if (player2score === 30) {
				localStorage.winner = player2;
				localStorage.rolls = rollSumPlayer2;
				winSound.play();
				console.log('Player 2 is the winner');
				setTimeout(function(){
					document.getElementById("winner-button").click();
				}, 2000);
			}
		}
	}
}



/**
 * Silent Winner 'button'
 */
const body = document.querySelector('body');
const winnerButton = document.createElement('a');
winnerButton.id = 'winner-button';
winnerButton.href = 'winner.html';

body.appendChild(winnerButton);





/**
 * Autoroll button 🗞️
 */

let speedOfautoroll = 5000;

let autoRoll = document.querySelector('#autoroll');
autoRoll.addEventListener('click', function () {
	autoRoll.style.backgroundColor = 'grey';
	autoRoll.style.cursor = 'not-allowed';
	autoRoll.disabled = "disabled";
	let positionInterval = setInterval(function () {
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



