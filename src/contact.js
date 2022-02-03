import Icon from './austin-ban-IS6RwpuEJpY-unsplash.jpg';
import mapIcon from './map.jpg';

function contact() {
	let contentDiv = document.querySelector('.content-div');

	let headerImg = new Image();
	headerImg.src = Icon;

	let header = document.createElement('h1');
	header.innerText = `Contact Nick`;

	let info = document.createElement('p');
	info.innerText = `You can reach my direct:`;

	let list = document.createElement('ul');

	let phone = document.createElement('li');
	phone.innerText = '(507) 222-2222';

	let email = document.createElement('li');
	email.innerText = 'nick@chefmania.com';

	let map = new Image();
	map.src = mapIcon;
	map.classList.add('map');

	list.appendChild(phone);
	list.appendChild(email);
	list.appendChild(map);

	let joinUs = document.createElement('p');
	joinUs.innerText = `Come join us and enjoy a great meal!`;

	contentDiv.appendChild(headerImg);
	contentDiv.appendChild(header);
	contentDiv.appendChild(list);
}

export default contact;
