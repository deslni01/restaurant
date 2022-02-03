import './style.css';
import splashPage from './splashpage';
import menu from './menu';
import contact from './contact';

loadPage();

function createNav() {
	let content = document.querySelector('#content');

	let contentDiv = document.createElement('div');
	contentDiv.classList.add('content-div');

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
	content.appendChild(contentDiv);

	splashLink.addEventListener('click', () => {
		let contentDiv = document.querySelector('.content-div');
		contentDiv.innerHTML = '';
		splashPage();
	});

	menuLink.addEventListener('click', () => {
		let contentDiv = document.querySelector('.content-div');
		contentDiv.innerHTML = '';
		menu();
	});

	contactLink.addEventListener('click', () => {
		let contentDiv = document.querySelector('.content-div');
		contentDiv.innerHTML = '';
		contact();
	});

	return contentDiv;
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

function loadPage() {
	createNav();
	splashPage();
	createFooter();
}
