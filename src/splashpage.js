function splashPage() {
	createNav();

	let content = document.querySelector('#content');

	let contentDiv = document.createElement('div');
	contentDiv.classList.add('content-div');

	let headerImg = document.createElement('img');
	headerImg.src = '../src/patrick-tomasso-GXXYkSwndP4-unsplash.jpg';

	let header = document.createElement('h1');
	header.innerText = `Welcome to Nick's Restaurant`;

	let bio = document.createElement('p');
	bio.innerText = `This restaurant is the culmination of all of my time making
restaurants. I've worked tirelessly to put inspiration on the
plate to make each dish a representation of my love of food.`;

	let joinUs = document.createElement('p');
	joinUs.innerText = `Come join us and enjoy a great meal!`;

	contentDiv.appendChild(headerImg);
	contentDiv.appendChild(header);
	contentDiv.appendChild(bio);
	contentDiv.appendChild(joinUs);
	content.appendChild(contentDiv);

	createFooter();
}

function createNav() {
	let content = document.querySelector('#content');

	let navMenu = document.createElement('div');
	navMenu.classList = 'nav-menu';

	let splashLink = document.createElement('a');
	splashLink.setAttribute('href', '#');
	splashLink.textContent = 'Home';
	navMenu.appendChild(splashLink);

	let menuLink = document.createElement('a');
	menuLink.setAttribute('href', '#');
	menuLink.textContent = 'Menu';
	navMenu.appendChild(menuLink);

	let contactLink = document.createElement('a');
	contactLink.setAttribute('href', '#');
	contactLink.textContent = 'Contact';
	navMenu.appendChild(contactLink);

	content.appendChild(navMenu);

	// event listeners for each of these items
	// loadMenu(); splashPage(); etc.
}

function createFooter() {
	let content = document.querySelector('#content');

	let footMenu = document.createElement('div');
	footMenu.classList = 'footer';

	let footer = document.createElement('p');
	footer.innerText = `Hi I'm Nick, thanks for stopping by!`;

	footMenu.appendChild(footer);
	content.appendChild(footMenu);
}

export default splashPage;
