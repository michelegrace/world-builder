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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Dice.js":
/*!*********************!*\
  !*** ./src/Dice.js ***!
  \*********************/
/*! exports provided: randomLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomLocation\", function() { return randomLocation; });\nfunction randomLocation() {\n  return Math.floor(Math.random() * 1000)\n}\n\n\n\n\n//# sourceURL=webpack:///./src/Dice.js?");

/***/ }),

/***/ "./src/Outline.js":
/*!************************!*\
  !*** ./src/Outline.js ***!
  \************************/
/*! exports provided: getMousePosition, addClick, redraw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMousePosition\", function() { return getMousePosition; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addClick\", function() { return addClick; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"redraw\", function() { return redraw; });\n/* harmony import */ var _Setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Setup.js */ \"./src/Setup.js\");\n//pass ctx and canvas\n\n\nfunction getMousePosition(canvas, event) {\n  const canvasContainer = canvas.getBoundingClientRect()\n\n  return {\n    x: event.clientX - canvasContainer.left,\n    y: event.clientY - canvasContainer.top,\n  }\n}\n\nlet clickX = new Array()\nlet clickY = new Array()\nlet clickDrag = new Array()\n\nfunction addClick(x, y, dragging) {\n  clickX.push(x)\n  clickY.push(y)\n  clickDrag.push(dragging)\n}\n\nfunction redraw(x, y) {\n  console.log(x, y)\n  //   ctx.strokeStyle = \"#df4b26\"\n  //   ctx.lineJoin = \"round\"\n  //   ctx.lineWidth = 3\n\n  //get redraw to actually DRAW\n}\n\n\n//# sourceURL=webpack:///./src/Outline.js?");

/***/ }),

/***/ "./src/Setup.js":
/*!**********************!*\
  !*** ./src/Setup.js ***!
  \**********************/
/*! exports provided: diceSetup, setupGame, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"diceSetup\", function() { return diceSetup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setupGame\", function() { return setupGame; });\n/* harmony import */ var _Dice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dice.js */ \"./src/Dice.js\");\n/* harmony import */ var _Outline_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Outline.js */ \"./src/Outline.js\");\n\n\n\nlet eventDice\nlet historyDice\nlet settlementDice\nlet paint\n\nconst canvas = document.getElementById(\"worldBuilder\")\nconst beanCanvas = document.getElementById(\"beanLayer\")\ncanvas.setAttribute(\"width\", \"1000\")\ncanvas.setAttribute(\"height\", \"600\")\nbeanCanvas.setAttribute(\"width\", \"1000\")\nbeanCanvas.setAttribute(\"height\", \"600\")\nconst ctx = canvas.getContext(\"2d\")\nconst ct2 = beanCanvas.getContext(\"2d\")\n\nctx.lineWidth = 10\nct2.lineWidth = 10\n\nfunction diceSetup() {\n  let eventDie = document.getElementById(\"eventDie\")\n  let historyDie = document.getElementById(\"historyDie\")\n  let settlementDie = document.getElementById(\"settlementDie\")\n\n  const start = document.getElementById(\"startBtn\")\n\n  start.addEventListener(\"click\", function () {\n    const dieContainer = document.getElementById(\"dieContainer\")\n    dieContainer.style.display = \"none\"\n    eventDice = eventDie.value || 10\n    historyDice = historyDie.value || 10\n    settlementDice = settlementDie.value || 20\n    setupGame()\n  })\n}\n\nfunction setupGame() {\n  let beans\n  let diceShapes = []\n  console.log(\n    `eventDice: ${eventDice}, historyDice: ${historyDice}, settlement: ${settlementDice}`\n  )\n\n  beanCanvas.style.display = \"block\"\n  canvas.style.display = \"block\"\n\n  beans = Math.floor(Math.random() * (500 - 100) + 100)\n\n  for (let i = 0; i < beans; i++) {\n    ct2.beginPath()\n    ct2.fillStyle = \"#442e26\"\n    ct2.fillRect(Object(_Dice_js__WEBPACK_IMPORTED_MODULE_0__[\"randomLocation\"])(), Object(_Dice_js__WEBPACK_IMPORTED_MODULE_0__[\"randomLocation\"])(), 3, 3)\n  }\n\n  function randomizeDiceValue(dieMax) {\n    return Math.floor(Math.random() * (dieMax - 1) + 1)\n  }\n\n  function diceRandomizer(diceType, dieColor, maxDieValue) {\n    let maxValue = maxDieValue\n    let colorValue = dieColor\n    for (let i = 0; i < diceType; i++) {\n      let xCoord = Object(_Dice_js__WEBPACK_IMPORTED_MODULE_0__[\"randomLocation\"])()\n      let yCoord = Object(_Dice_js__WEBPACK_IMPORTED_MODULE_0__[\"randomLocation\"])()\n      diceShapes.push({\n        x: xCoord,\n        y: yCoord,\n        width: 5,\n        height: 5,\n        color: colorValue,\n      })\n      ctx.beginPath()\n      ctx.fillStyle = colorValue\n      ctx.font = \"10px serif\"\n      ctx.textAlign = \"center\"\n      ctx.fillText(randomizeDiceValue(maxValue), xCoord, yCoord)\n      ctx.fillRect(xCoord, yCoord, 5, 5)\n    }\n  }\n\n  diceRandomizer(settlementDice, \"#bd897e\", 20)\n  diceRandomizer(eventDice, \"#f87666\", 6)\n  diceRandomizer(historyDice, \"#885a89\", 4)\n\n  var clearBeans = document.getElementById(\"clearBeans\")\n\n  clearBeans.addEventListener(\"click\", function (e) {\n    ct2.clearRect(0, 0, 1000, 600)\n    //   beanCanvas.style.display = \"none\"\n  })\n\n  //drawing borders\n  canvas.addEventListener(\"mousedown\", function (e) {\n    var mousePosition = Object(_Outline_js__WEBPACK_IMPORTED_MODULE_1__[\"getMousePosition\"])(canvas, e)\n    paint = true\n    //   redraw(mousePosition.x, mousePosition.y)\n  })\n\n  canvas.addEventListener(\"mousemove\", function (e) {\n    if (paint) {\n      var mousePosition = Object(_Outline_js__WEBPACK_IMPORTED_MODULE_1__[\"getMousePosition\"])(canvas, e)\n      Object(_Outline_js__WEBPACK_IMPORTED_MODULE_1__[\"redraw\"])(mousePosition.x, mousePosition.y)\n      // redraw()\n    }\n  })\n\n  canvas.addEventListener(\"mouseup\", function () {\n    paint = false\n  })\n  canvas.addEventListener(\"mouseleave\", function () {\n    paint = false\n  })\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  eventDice,\n  historyDice,\n  settlementDice,\n  canvas,\n  beanCanvas,\n  paint,\n  ctx,\n  ct2,\n});\n\n\n//# sourceURL=webpack:///./src/Setup.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Setup.js */ \"./src/Setup.js\");\n\n\n(function () {\n  let eventDice\n  let historyDice\n  let settlementDice\n\n  function init() {\n    Object(_Setup_js__WEBPACK_IMPORTED_MODULE_0__[\"diceSetup\"])()\n  }\n\n  document.addEventListener(\"DOMContentLoaded\", init)\n})()\n\n//  Initiate Game\n\n// Game Setup\n// select dice\n// toss beans and dice randomly\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });