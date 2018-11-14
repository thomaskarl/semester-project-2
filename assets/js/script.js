/**
 * Fetch 10 characters
 */

// 339  - Eddard Stark          - House Stark
// 640  - Loras Tyrell          - House Tyrell
// 1303 - Daenerys Targaryen    - House Targaryen
// 862  - Renly Baratheon       - House Baratheon
// 238  - Cersei Lannister      - House Lannister
// 572  - Jon Arryn             - House Arryn
// 692  - Maege Mormont         - House Mormont
// 836  - Quellon Greyjoy       - House Greyjoy
// 1442 - Gregor Clegane        - House Clegane
// 503  - Hoster Tully          - House Tully

const api = 'https://anapioficeandfire.com/api/characters/';
const characters = [339, 640, 1303, 862, 238, 572, 692, 836, 1442, 503];

for (let i = 0; i < characters.length; i++) {
	let url = api + characters[i];
	console.log(url);

	fetch(url)
		.then(result => result.json())
		.then((res) => {
			createCard(res);
		})
		.catch(err => console.log(err));
}


/**
 * Creating the output
 */

const cards = document.getElementById('cards');
localStorage.clear();

function createCard(result) {

	let div1 = document.createElement('div');
	div1.classList.add('card');
	cards.appendChild(div1);

	let name = document.createElement('p');
	name.classList.add('name');
	div1.appendChild(name);
	name.innerHTML = 'Name: <b>' + result['name'] + '</b>';

	if (result['name'] === 'Eddard Stark') div1.style.backgroundColor = '#343434';
	if (result['name'] === 'Loras Tyrell') div1.style.backgroundColor = '#44892A';
	if (result['name'] === 'Daenerys Targaryen') div1.style.backgroundColor = '#161616';
	if (result['name'] === 'Renly Baratheon') div1.style.backgroundColor = '#EBA000';
	if (result['name'] === 'Cersei Lannister') div1.style.backgroundColor = '#2E3248';
	if (result['name'] === 'Jon Arryn') div1.style.backgroundColor = '#312B3C';
	if (result['name'] === 'Maege Mormont') div1.style.backgroundColor = '#79AB61';
	if (result['name'] === 'Quellon Greyjoy') div1.style.backgroundColor = '#6C5F45';
	if (result['name'] === 'Gregor Clegane') div1.style.backgroundColor = '#CF9723';
	if (result['name'] === 'Hoster Tully') div1.style.backgroundColor = '#7E828D';

	let gender = document.createElement('p');
	gender.classList.add('gender');
	div1.appendChild(gender);
	gender.innerHTML = 'Gender: <b>' + result['gender'] + '</b>';

	let culture = document.createElement('p');
	culture.classList.add('culture');
	div1.appendChild(culture);
	if (result['culture'] === '') culture.innerHTML = 'Culture: <b>Unknown</b>';
	else culture.innerHTML = 'Culture: <b>' + result['culture'] + '</b>';

	let born = document.createElement('p');
	born.classList.add('born');
	div1.appendChild(born);
	if (result['born'] === '') {
		born.innerHTML = 'Born: <b>Unknown</b>';
	} else {
		born.innerHTML = 'Born: <b>' + result['born'] + '</b>';
	}


	div1.addEventListener('click', function () {
		if (localStorage.player1 && localStorage.player2) {
			localStorage.clear();
			resetBackground();
			removeBadge();
			localStorage.player1 = result['name'];
			div1.style.outline = '5px solid Gold';
			createBadgePlayer1();
		} else if (localStorage.player1) {
			localStorage.player2 = result['name'];
			div1.style.outline = '5px solid Gold';
			createBadgePlayer2();
		} else {
			localStorage.player1 = result['name'];
			div1.style.outline = '5px solid Gold';
			createBadgePlayer1();
		}
	});

	function createBadgePlayer1() {
		let badge = document.createElement('div');
		badge.classList.add('badge');
		badge.classList.add('badge1');
		div1.appendChild(badge);
	}

	function createBadgePlayer2() {
		let badge = document.createElement('div');
		badge.classList.add('badge');
		badge.classList.add('badge2');
		div1.appendChild(badge);
	}


	// function setLocalStore(key, value) {
	// 	localStorage.setItem(key, value);
	// }


	console.log(name);
	console.log(gender);
	console.log(culture);
	console.log(born);
	console.log('---');


	// img.style.width = '100%';
	// img.src = myCard[i].imageUrl;
}

function removeBadge() {
	document.querySelectorAll(".badge").forEach(function (elem) {
		elem.remove();
	});
	document.querySelectorAll(".badge").forEach(function (elem) {
		elem.remove();
	});
}

function resetBackground() {
	document.querySelectorAll(".card").forEach(function (elem) {
		elem.style.outline = 'none';
	});
}
