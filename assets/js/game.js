/**
 * Fetching the players
 */

const playerKey1 = localStorage.key(0);
const playerKey2 = localStorage.key(1);
const player1 = localStorage.getItem(playerKey1);
const player2 = localStorage.getItem(playerKey2);

console.log(player1);
console.log(player2);

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

console.log(player1shield);
console.log(player2shield);



/**
 * The Dice
 */

function roll1() {
	let dice1 = document.querySelector('#dice1');
	let gameLog1 = document.querySelector('#gamelog1');
	let diceout1 = Math.floor(Math.random() * 6) + 1;
	dice1.innerText = diceout1;
	let info1 = document.createElement('p');
	gameLog1.appendChild(info1);
	info1.innerHTML = 'Player 1 rolled ' + diceout1;

	if (diceout1 === 6) {
		info1.innerHTML = 'You rolled a 6, will get one free roll'

	}
}

function roll2() {
	let dice2 = document.querySelector('#dice2');
	let gameLog2 = document.querySelector('#gamelog2');
	let diceout2 = Math.floor(Math.random() * 6) + 1;
	dice2.innerText = diceout2;
	let info2 = document.createElement('p');
	gameLog2.appendChild(info2);
	info2.innerHTML = 'Player 2 rolled ' + diceout2;

	if (diceout2 === 6) {
		info2.innerHTML = 'You rolled a 6, will get one free roll'
	}
}



const button1 = document.querySelector('#roll1');
button1.addEventListener('click', function () {
	roll1();
}, false);

const button2 = document.querySelector('#roll2');
button2.addEventListener('click', function () {
	roll2();
}, false);



/**
 * Register where the player are
 */

let player1are = document.querySelector('.position1');
let player2are = document.querySelector('.position2');


console.log(player1are);
console.log(player2are);



/**
 * Setting up the canvas
 */

const canvas = document.getElementById("canvas");
canvas.style.border = '1px solid black';
canvas.style.width = '600px';
const ctx = canvas.getContext("2d");

const speed = 10;

let start = -165;
setInterval(function () {
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.font = "30px Verdana";
	ctx.strokeStyle = "#52ce90";


}, speed);