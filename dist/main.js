/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/butts.js":
/*!**********************!*\
  !*** ./src/butts.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   butts: () => (/* binding */ butts),\n/* harmony export */   tabs: () => (/* binding */ tabs)\n/* harmony export */ });\nfunction butts() {\n    let content = document.querySelector('#content');\n     //Buttons\n     let home = document.createElement('button');\n     home.classList.add('home');\n     home.innerText = 'Home';\n     content.appendChild(home);\n \n     let menu = document.createElement('button');\n     menu.classList.add('menu');\n     menu.innerText = 'Menu';\n     content.appendChild(menu);\n \n     let contact = document.createElement('button');\n     contact.classList.add('contact');\n     contact.innerText = 'contact';\n     content.appendChild(contact);\n}\n\nfunction tabs() {\n    let homeB = document.querySelector('.home');\nlet menuB = document.querySelector('.menu');\nlet contactB = document.querySelector('.contact');\n\nmenuB.addEventListener('click', () => {\n    let content = document.querySelector('#content');\n    content.innerHTML = '';\n    menu();\n});\ncontactB.addEventListener('click', () => {\n    let content = document.querySelector('#content');\n    content.innerHTML = '';\n    contact();\n});\n\n\nhomeB.addEventListener('click', () => {\n    let content = document.querySelector('#content');\n    content.innerHTML = '';\n    load();\n});\n}\n\n\n\n\n//# sourceURL=webpack://resturant/./src/butts.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contact: () => (/* binding */ contact)\n/* harmony export */ });\n/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load */ \"./src/load.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\nfunction contact() {\n    let content = document.querySelector('#content');\n\n    let title = document.createElement('h1');\n    title.innerText = 'Contact us!!';\n    content.appendChild(title);\n\n    let image = document.createElement('img');\n    image.src = '/src/diner.png';\n    content.appendChild(image);\n\n    //Buttons\n    let home = document.createElement('button');\n    home.classList.add('home');\n    home.innerText = 'Home';\n    content.appendChild(home);\n\n    let menu = document.createElement('button');\n    menu.classList.add('menu');\n    menu.innerText = 'Menu';\n    content.appendChild(menu);\n\n    let contact = document.createElement('button');\n    contact.classList.add('contact');\n    contact.innerText = 'contact';\n    content.appendChild(contact);\n\n    let homeB = document.querySelector('.home');\nlet menuB = document.querySelector('.menu');\nlet contactB = document.querySelector('.contact');\n\nmenuB.addEventListener('click', () => {\n    let content = document.querySelector('#content');\n    content.innerHTML = '';\n    menu;\n});\ncontactB.addEventListener('click', () => {\n    let content = document.querySelector('#content');\n    content.innerHTML = '';\n    contact;\n});\n\n\nhomeB.addEventListener('click', () => {\n    let content = document.querySelector('#content');\n    content.innerHTML = '';\n    _load__WEBPACK_IMPORTED_MODULE_0__.load;\n});\n}\n\n\n\n//# sourceURL=webpack://resturant/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load */ \"./src/load.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _butts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./butts */ \"./src/butts.js\");\n\n\n\n\n\n\nconsole.log(\"This is working!\")\n;(0,_load__WEBPACK_IMPORTED_MODULE_0__.load)();\n(0,_butts__WEBPACK_IMPORTED_MODULE_3__.butts)();\n(0,_butts__WEBPACK_IMPORTED_MODULE_3__.tabs)();\n\nlet homeB = document.querySelector('.home');\nlet menuB = document.querySelector('.menu');\nlet contactB = document.querySelector('.contact');\n\nmenuB.addEventListener('click', () => {\n    let content = document.querySelector('#content');\n    content.innerHTML = '';\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menu)();\n});\ncontactB.addEventListener('click', () => {\n    let content = document.querySelector('#content');\n    content.innerHTML = '';\n    (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contact)();\n});\n\n\nhomeB.addEventListener('click', () => {\n    let content = document.querySelector('#content');\n    content.innerHTML = '';\n    (0,_load__WEBPACK_IMPORTED_MODULE_0__.load)();\n});\n\n//# sourceURL=webpack://resturant/./src/index.js?");

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   load: () => (/* binding */ load)\n/* harmony export */ });\n/* harmony import */ var _butts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./butts */ \"./src/butts.js\");\n\n\nfunction load() {\n    let content = document.querySelector('#content');\n\n    let title = document.createElement('h1');\n    title.innerText = 'Awesome Resturant';\n    content.appendChild(title);\n\n    let image = document.createElement('img');\n    image.src = '/src/image.jpg';\n    content.appendChild(image);\n\n    let text = document.createElement('p');\n    text.innerText = 'This resturant is sooooo awesome!!';\n    content.appendChild(text);\n    \n}\n\n\n\n//# sourceURL=webpack://resturant/./src/load.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load */ \"./src/load.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\nfunction menu() {\n    let content = document.querySelector('#content');\n\n    let soda = document.createElement('h1');\n    soda.innerText = 'Sodas';\n    content.appendChild(soda);\n\n    let text = document.createElement('p');\n    text.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum justo sem, consequat vel suscipit eget, congue nec dui. Donec aliquam.';\n    content.appendChild(text);\n\n     //Buttons\n     let home = document.createElement('button');\n     home.classList.add('home');\n     home.innerText = 'Home';\n     content.appendChild(home);\n \n     let menu = document.createElement('button');\n     menu.classList.add('menu');\n     menu.innerText = 'Menu';\n     content.appendChild(menu);\n \n     let contact = document.createElement('button');\n     contact.classList.add('contact');\n     contact.innerText = 'contact';\n     content.appendChild(contact);\n\n     let homeB = document.querySelector('.home');\nlet menuB = document.querySelector('.menu');\nlet contactB = document.querySelector('.contact');\n\nmenuB.addEventListener('click', () => {\n    let content = document.querySelector('#content');\n    content.innerHTML = '';\n    menu;\n});\ncontactB.addEventListener('click', () => {\n    let content = document.querySelector('#content');\n    content.innerHTML = '';\n    contact;\n});\n\n\nhomeB.addEventListener('click', () => {\n    let content = document.querySelector('#content');\n    content.innerHTML = '';\n    _load__WEBPACK_IMPORTED_MODULE_0__.load;\n});\n     \n\n}\n\n\n\n//# sourceURL=webpack://resturant/./src/menu.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;