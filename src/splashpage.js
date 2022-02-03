import Icon from './patrick-tomasso-GXXYkSwndP4-unsplash.jpg';

function splashPage() {
	let contentDiv = document.querySelector('.content-div');

	let headerImg = new Image();
	headerImg.src = Icon;

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
}

export default splashPage;
