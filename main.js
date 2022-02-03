/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/splashpage.js":
/*!***************************!*\
  !*** ./src/splashpage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (splashPage);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _splashpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splashpage */ "./src/splashpage.js");


(0,_splashpage__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsZ0JBQWdCLGNBQWM7QUFDOUI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7OztVQ3ZFMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05zQzs7QUFFdEMsdURBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3NwbGFzaHBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc3BsYXNoUGFnZSgpIHtcblx0Y3JlYXRlTmF2KCk7XG5cblx0bGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5cdGxldCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZCgnY29udGVudC1kaXYnKTtcblxuXHRsZXQgaGVhZGVySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdGhlYWRlckltZy5zcmMgPSAnLi4vc3JjL3BhdHJpY2stdG9tYXNzby1HWFhZa1N3bmRQNC11bnNwbGFzaC5qcGcnO1xuXG5cdGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXHRoZWFkZXIuaW5uZXJUZXh0ID0gYFdlbGNvbWUgdG8gTmljaydzIFJlc3RhdXJhbnRgO1xuXG5cdGxldCBiaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdGJpby5pbm5lclRleHQgPSBgVGhpcyByZXN0YXVyYW50IGlzIHRoZSBjdWxtaW5hdGlvbiBvZiBhbGwgb2YgbXkgdGltZSBtYWtpbmdcbnJlc3RhdXJhbnRzLiBJJ3ZlIHdvcmtlZCB0aXJlbGVzc2x5IHRvIHB1dCBpbnNwaXJhdGlvbiBvbiB0aGVcbnBsYXRlIHRvIG1ha2UgZWFjaCBkaXNoIGEgcmVwcmVzZW50YXRpb24gb2YgbXkgbG92ZSBvZiBmb29kLmA7XG5cblx0bGV0IGpvaW5VcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0am9pblVzLmlubmVyVGV4dCA9IGBDb21lIGpvaW4gdXMgYW5kIGVuam95IGEgZ3JlYXQgbWVhbCFgO1xuXG5cdGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVhZGVySW1nKTtcblx0Y29udGVudERpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXHRjb250ZW50RGl2LmFwcGVuZENoaWxkKGJpbyk7XG5cdGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoam9pblVzKTtcblx0Y29udGVudC5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcblxuXHRjcmVhdGVGb290ZXIoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xuXHRsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cblx0bGV0IG5hdk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0bmF2TWVudS5jbGFzc0xpc3QgPSAnbmF2LW1lbnUnO1xuXG5cdGxldCBzcGxhc2hMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRzcGxhc2hMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyk7XG5cdHNwbGFzaExpbmsudGV4dENvbnRlbnQgPSAnSG9tZSc7XG5cdG5hdk1lbnUuYXBwZW5kQ2hpbGQoc3BsYXNoTGluayk7XG5cblx0bGV0IG1lbnVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRtZW51TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycpO1xuXHRtZW51TGluay50ZXh0Q29udGVudCA9ICdNZW51Jztcblx0bmF2TWVudS5hcHBlbmRDaGlsZChtZW51TGluayk7XG5cblx0bGV0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRjb250YWN0TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycpO1xuXHRjb250YWN0TGluay50ZXh0Q29udGVudCA9ICdDb250YWN0Jztcblx0bmF2TWVudS5hcHBlbmRDaGlsZChjb250YWN0TGluayk7XG5cblx0Y29udGVudC5hcHBlbmRDaGlsZChuYXZNZW51KTtcblxuXHQvLyBldmVudCBsaXN0ZW5lcnMgZm9yIGVhY2ggb2YgdGhlc2UgaXRlbXNcblx0Ly8gbG9hZE1lbnUoKTsgc3BsYXNoUGFnZSgpOyBldGMuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcblx0bGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5cdGxldCBmb290TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRmb290TWVudS5jbGFzc0xpc3QgPSAnZm9vdGVyJztcblxuXHRsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRmb290ZXIuaW5uZXJUZXh0ID0gYEhpIEknbSBOaWNrLCB0aGFua3MgZm9yIHN0b3BwaW5nIGJ5IWA7XG5cblx0Zm9vdE1lbnUuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblx0Y29udGVudC5hcHBlbmRDaGlsZChmb290TWVudSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNwbGFzaFBhZ2U7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBzcGxhc2hQYWdlIGZyb20gJy4vc3BsYXNocGFnZSc7XG5cbnNwbGFzaFBhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==