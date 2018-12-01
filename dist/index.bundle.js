/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search */ \"./src/search.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n //Control and centerlized DOM\n\nvar controlDOM = {\n  burger: document.querySelector('.burger-menu'),\n  searchInput: document.querySelector('.search__bar'),\n  searchBtn: document.querySelector('.search__button'),\n  menu: document.querySelector('.menu'),\n  cards: document.querySelector('.content__items'),\n  contentHeading: document.querySelector('.content__heading')\n}; //Data structure\n\nvar data = {\n  cardName: ''\n}; //Get input value\n\nvar getInputValue = function getInputValue() {\n  data.cardName = controlDOM.searchInput.value;\n  console.log(data.cardName);\n}; //Loop through data and insert each cards into UI\n\n\nvar createUi = function createUi(array) {\n  array.forEach(function (item) {\n    if (item.imageUrl) {\n      var card = \"\\n      <div class=\\\"content__item\\\"><img src=\\\"\".concat(item.imageUrl, \"\\\" alt=\\\"card 1\\\" class=\\\"content__img\\\"></div>\\n      \");\n      controlDOM.cards.insertAdjacentHTML('beforeend', card);\n    }\n  });\n};\n\nvar showResult = function showResult(array) {\n  controlDOM.contentHeading.textContent = \"\\n  Total \\\"\".concat(array.length, \"\\\" cards where the name includes \\\"\").concat(data.cardName, \"\\\"\\n  \");\n}; // Clear card item\n\n\nvar clearPage = function clearPage() {\n  controlDOM.cards.innerHTML = '';\n}; // Clear input value\n\n\nvar clearInput = function clearInput() {\n  controlDOM.searchInput.value = '';\n}; // Data test\n\n\nvar dataTest = function dataTest() {\n  console.log(data);\n};\n\nvar searchControl =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee() {\n    var result;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            //1. Get the input value from search bar\n            getInputValue(); //2. Clear input\n\n            clearInput();\n            _context.prev = 2;\n            _context.next = 5;\n            return Object(_search__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data.cardName);\n\n          case 5:\n            result = _context.sent;\n\n            //To see if there is a result\n            if (result.cards.length > 0) {\n              //If so, clear page\n              clearPage(); //And get card info and render page\n\n              createUi(result.cards);\n            } //4. Show result and render heading anyway\n\n\n            showResult(result.cards);\n            _context.next = 13;\n            break;\n\n          case 10:\n            _context.prev = 10;\n            _context.t0 = _context[\"catch\"](2);\n            console.log(_context.t0);\n\n          case 13:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this, [[2, 10]]);\n  }));\n\n  return function searchControl() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\ncontrolDOM.burger.addEventListener('click', function (e) {\n  //To see if e.target is the element with class .burger-menu or its children\n  if (e.target.matches('.burger-menu, .burger-menu *')) {\n    /*if (controlDOM.menu.style.height === '0px') {\r\n      controlDOM.menu.style.height = '100%';\r\n      controlDOM.menu.style.opacity = '1';\r\n    } else {\r\n      controlDOM.menu.style.height = '0';\r\n      controlDOM.menu.style.opacity = '0';\r\n    }\r\n    above is not going to work bacause the initial \"inline style\" isn't 0px (not define at all)\r\n    */\n    // console.log(document.querySelectorAll('.burger-menu *'));\n    //Add class can trigger css transition peoperty too\n    controlDOM.menu.classList.toggle('visible');\n  }\n});\ncontrolDOM.searchBtn.addEventListener('click', searchControl);\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getCardInfo; });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction getCardInfo(_x) {\n  return _getCardInfo.apply(this, arguments);\n} // async function getCardInfo() {\n//   try {\n//     const result = await fetch('https://api.magicthegathering.io/v1/cards?name=Archangel Avacyn');\n//     const resData = await result.json();\n//     console.log(resData);\n//   } catch (error) {\n//     alert(error);\n//   }\n// }\n// function getCardInfo () {\n//   fetch('https://api.magicthegathering.io/v1/cards?name=Archangel Avacyn')\n//     .then(result => {\n//       return result.json();\n//     })\n//     .then(resData => {\n//       console.log(resData);\n//     })\n//     .catch(error => console.log(error));\n// }\n// getCardInfo();\n// const getCardInfo = new Promise((resolve, reject) => {\n//   resolve(fetch('https://api.magicthegathering.io/v1/cards?name=Archangel Avacyn'));\n// })\n// getCardInfo\n//   .then(result => {\n//     console.log(result);\n//   })\n//   .catch(error => {\n//     console.log('Error!');\n//   });\n\nfunction _getCardInfo() {\n  _getCardInfo = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(name) {\n    var result, resData;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return fetch(\"https://api.magicthegathering.io/v1/cards?name=\".concat(name));\n\n          case 3:\n            result = _context.sent;\n            resData = result.json(); // console.log(resData);\n\n            return _context.abrupt(\"return\", resData);\n\n          case 8:\n            _context.prev = 8;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this, [[0, 8]]);\n  }));\n  return _getCardInfo.apply(this, arguments);\n}\n\nconsole.log('hello');\n\n//# sourceURL=webpack:///./src/search.js?");

/***/ })

/******/ });