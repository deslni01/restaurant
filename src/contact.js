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

	let thanks = document.createElement('p');
	thanks.innerHTML = `Special Thanks to the following for their awesome photographs:
	<ul>
		<li><a href="https://unsplash.com/@austinban">Austin Ban</a> for the Contact header image</li>
		<li><a href="https://unsplash.com/@lvnatikk">Lily Banse</a> for the Menu header image</li>
		<li><a href="https://unsplash.com/@impatrickt">Patrick Tomasso</a> for the Home header image</li>
	</ul>
	`;

	contentDiv.appendChild(thanks);
	contentDiv.appendChild(headerImg);
	contentDiv.appendChild(header);
	contentDiv.appendChild(list);
}

export default contact;
