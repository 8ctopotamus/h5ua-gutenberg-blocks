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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _test_block_test_block_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test-block/test-block.js */ \"./src/test-block/test-block.js\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/MzcwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vdGVzdC1ibG9jay90ZXN0LWJsb2NrLmpzJzsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/test-block/editor.scss":
/*!************************************!*\
  !*** ./src/test-block/editor.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGVzdC1ibG9jay9lZGl0b3Iuc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy90ZXN0LWJsb2NrL2VkaXRvci5zY3NzPzE0MmIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/test-block/editor.scss\n");

/***/ }),

/***/ "./src/test-block/style.scss":
/*!***********************************!*\
  !*** ./src/test-block/style.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGVzdC1ibG9jay9zdHlsZS5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3Rlc3QtYmxvY2svc3R5bGUuc2Nzcz85MGZkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/test-block/style.scss\n");

/***/ }),

/***/ "./src/test-block/test-block.js":
/*!**************************************!*\
  !*** ./src/test-block/test-block.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/test-block/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ \"./src/test-block/editor.scss\");\n/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _wp$i18n = wp.i18n,\n    __ = _wp$i18n.__,\n    setLocaleData = _wp$i18n.setLocaleData;\nvar registerBlockType = wp.blocks.registerBlockType;\n\n\nvar blockStyle = {\n\tbackgroundColor: '#900',\n\tcolor: '#fff',\n\tpadding: '20px'\n};\n\nregisterBlockType('h5ua-alpha/test-block', {\n\ttitle: __('HTML5Up: Test (esnext)', 'gutenberg-examples'),\n\ticon: 'universal-access-alt',\n\tcategory: 'layout',\n\tedit: function edit() {\n\t\treturn wp.element.createElement(\n\t\t\t\"div\",\n\t\t\t{ style: blockStyle },\n\t\t\t\"Basic example with JSX! (editor)\"\n\t\t);\n\t},\n\tsave: function save() {\n\t\treturn wp.element.createElement(\n\t\t\t\"div\",\n\t\t\t{ style: blockStyle },\n\t\t\t\"Basic example with JSX! (front)\"\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGVzdC1ibG9jay90ZXN0LWJsb2NrLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3Rlc3QtYmxvY2svdGVzdC1ibG9jay5qcz9hZGZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IFwiLi9lZGl0b3Iuc2Nzc1wiO1xuXG52YXIgX3dwJGkxOG4gPSB3cC5pMThuLFxuICAgIF9fID0gX3dwJGkxOG4uX18sXG4gICAgc2V0TG9jYWxlRGF0YSA9IF93cCRpMThuLnNldExvY2FsZURhdGE7XG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XG5cblxudmFyIGJsb2NrU3R5bGUgPSB7XG5cdGJhY2tncm91bmRDb2xvcjogJyM5MDAnLFxuXHRjb2xvcjogJyNmZmYnLFxuXHRwYWRkaW5nOiAnMjBweCdcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdoNXVhLWFscGhhL3Rlc3QtYmxvY2snLCB7XG5cdHRpdGxlOiBfXygnSFRNTDVVcDogVGVzdCAoZXNuZXh0KScsICdndXRlbmJlcmctZXhhbXBsZXMnKSxcblx0aWNvbjogJ3VuaXZlcnNhbC1hY2Nlc3MtYWx0Jyxcblx0Y2F0ZWdvcnk6ICdsYXlvdXQnLFxuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KCkge1xuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcImRpdlwiLFxuXHRcdFx0eyBzdHlsZTogYmxvY2tTdHlsZSB9LFxuXHRcdFx0XCJCYXNpYyBleGFtcGxlIHdpdGggSlNYISAoZWRpdG9yKVwiXG5cdFx0KTtcblx0fSxcblx0c2F2ZTogZnVuY3Rpb24gc2F2ZSgpIHtcblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XCJkaXZcIixcblx0XHRcdHsgc3R5bGU6IGJsb2NrU3R5bGUgfSxcblx0XHRcdFwiQmFzaWMgZXhhbXBsZSB3aXRoIEpTWCEgKGZyb250KVwiXG5cdFx0KTtcblx0fVxufSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/test-block/test-block.js\n");

/***/ })

/******/ });