function menu() {
	let menu = document.createElement('div');
	menu.classList.add('menu');

	let headerImg = document.createElement('img');
	headerImg.src = './src/lily-banse--YHSwy6uqvk-unspash.jpg';

	let header = document.createElement('h1');
	header.innerText = `Winter Menu`;
	menu.appendChild(header);

	menu.appendChild(menuItem('Bibim Bap', 'Test test test'));
	menu.appendChild(menuItem('Whipped Cream', 'Cream and sugar and vanilla'));

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

function loadMenu() {
	let content = document.querySelector('#content');
	content.innerHTML = '';
	content.appendChild(menu());
}

export default loadMenu;
