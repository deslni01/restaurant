import Icon from './lily-banse--YHSwy6uqvk-unsplash.jpg';

function menu() {
	let contentDiv = document.querySelector('.content-div');

	let menu = document.createElement('div');
	menu.classList.add('menu');

	let headerImg = new Image();
	headerImg.src = Icon;

	let header = document.createElement('h1');
	header.innerText = `Winter Menu`;

	menu.appendChild(headerImg);
	menu.appendChild(header);
	menu.appendChild(menuItem('Bibim Bap', 'Test test test'));
	menu.appendChild(menuItem('Whipped Cream', 'Cream and sugar and vanilla'));
	contentDiv.appendChild(menu);

	return menu;
}

function menuItem(food, description) {
	let menuItem = document.createElement('div');
	menuItem.classList.add('menu-item');

	let foodName = document.createElement('h3');
	foodName.textContent = food;

	let foodDesc = document.createElement('p');
	foodDesc.textContent = description;

	menuItem.appendChild(foodName);
	menuItem.appendChild(foodDesc);

	return menuItem;
}

export default menu;
