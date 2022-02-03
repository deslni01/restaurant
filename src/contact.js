function contact() {
	let content = document.querySelector('#content');

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

	content.appendChild(headerImg);
	content.appendChild(header);
	content.appendChild(bio);
	content.appendChild(joinUs);
}

export default contact;
