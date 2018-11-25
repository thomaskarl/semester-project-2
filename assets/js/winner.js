/**
 * Fetching the Winner 👥
 */

const winnerKey = localStorage.key(0);
const winner = localStorage.getItem(winnerKey);



/**
 * Creating the shields 🛡️
 */

const shieldWinner = document.querySelector('.shield-winner');

let winnerName = document.createElement('p');
winnerName.innerHTML = winner;
winnerName.classList.add('winner-name');
shieldWinner.appendChild(winnerName);

let shield = document.createElement('img');
shield.classList.add('shield');
shieldWinner.appendChild(shield);


let shieldUrl = 'assets/images/shields/shield';
let winnershield = '';

if (winner === 'Eddard Stark') { shield.src = shieldUrl + '1.svg'; winnershield = shield; }
if (winner === 'Loras Tyrell') { shield.src = shieldUrl + '2.svg'; winnershield = shield; }
if (winner === 'Daenerys Targaryen') { shield.src = shieldUrl + '3.svg'; winnershield = shield; }
if (winner === 'Renly Baratheon') { shield.src = shieldUrl + '4.svg'; winnershield = shield; }
if (winner === 'Cersei Lannister') { shield.src = shieldUrl + '5.svg'; winnershield = shield; }
if (winner === 'Jon Arryn') { shield.src = shieldUrl + '6.svg'; winnershield = shield; }
if (winner === 'Maege Mormont') { shield.src = shieldUrl + '7.svg'; winnershield = shield; }
if (winner === 'Quellon Greyjoy') { shield.src = shieldUrl + '8.svg'; winnershield = shield; }
if (winner === 'Gregor Clegane') { shield.src = shieldUrl + '9.svg'; winnershield = shield; }
if (winner === 'Hoster Tully') { shield.src = shieldUrl + '10.svg'; winnershield = shield; }

