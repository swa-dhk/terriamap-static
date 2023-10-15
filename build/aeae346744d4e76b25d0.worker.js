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
/******/ 	__webpack_require__.p = "build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/terriajs/lib/ReactViews/StandardUserInterface/customizable/MenuItem.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/terriajs/lib/ReactViews/HOCs/withControlledVisibility.tsx":
/*!****************************************************************************!*\
  !*** ./packages/terriajs/lib/ReactViews/HOCs/withControlledVisibility.tsx ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  return new Worker(__webpack_require__.p + \"540a75c836e5b78a1576.worker.js\");\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyaWFqcy9saWIvUmVhY3RWaWV3cy9IT0NzL3dpdGhDb250cm9sbGVkVmlzaWJpbGl0eS50c3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90ZXJyaWFqcy9saWIvUmVhY3RWaWV3cy9IT0NzL3dpdGhDb250cm9sbGVkVmlzaWJpbGl0eS50c3g/NjJkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFdvcmtlcihfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNTQwYTc1YzgzNmU1Yjc4YTE1NzYud29ya2VyLmpzXCIpO1xufTsiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/terriajs/lib/ReactViews/HOCs/withControlledVisibility.tsx\n");

/***/ }),

/***/ "./packages/terriajs/lib/ReactViews/Map/MenuButton.jsx":
/*!*************************************************************!*\
  !*** ./packages/terriajs/lib/ReactViews/Map/MenuButton.jsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  return new Worker(__webpack_require__.p + \"70b539e7fbc560fbb203.worker.js\");\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyaWFqcy9saWIvUmVhY3RWaWV3cy9NYXAvTWVudUJ1dHRvbi5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90ZXJyaWFqcy9saWIvUmVhY3RWaWV3cy9NYXAvTWVudUJ1dHRvbi5qc3g/YzU4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFdvcmtlcihfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNzBiNTM5ZTdmYmM1NjBmYmIyMDMud29ya2VyLmpzXCIpO1xufTsiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/terriajs/lib/ReactViews/Map/MenuButton.jsx\n");

/***/ }),

/***/ "./packages/terriajs/lib/ReactViews/Mobile/MobileMenuItem.tsx":
/*!********************************************************************!*\
  !*** ./packages/terriajs/lib/ReactViews/Mobile/MobileMenuItem.tsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  return new Worker(__webpack_require__.p + \"95a5b5e64b753810278e.worker.js\");\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyaWFqcy9saWIvUmVhY3RWaWV3cy9Nb2JpbGUvTW9iaWxlTWVudUl0ZW0udHN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvdGVycmlhanMvbGliL1JlYWN0Vmlld3MvTW9iaWxlL01vYmlsZU1lbnVJdGVtLnRzeD9mNmNhIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgV29ya2VyKF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5NWE1YjVlNjRiNzUzODEwMjc4ZS53b3JrZXIuanNcIik7XG59OyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/terriajs/lib/ReactViews/Mobile/MobileMenuItem.tsx\n");

/***/ }),

/***/ "./packages/terriajs/lib/ReactViews/StandardUserInterface/customizable/MenuItem.jsx":
/*!******************************************************************************************!*\
  !*** ./packages/terriajs/lib/ReactViews/StandardUserInterface/customizable/MenuItem.jsx ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Map_MenuButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Map/MenuButton */ \"./packages/terriajs/lib/ReactViews/Map/MenuButton.jsx\");\n/* harmony import */ var _Map_MenuButton__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Map_MenuButton__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ResponsiveSwitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResponsiveSwitch */ \"./packages/terriajs/lib/ReactViews/StandardUserInterface/customizable/ResponsiveSwitch.jsx\");\n/* harmony import */ var _ResponsiveSwitch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ResponsiveSwitch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _HOCs_withControlledVisibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../HOCs/withControlledVisibility */ \"./packages/terriajs/lib/ReactViews/HOCs/withControlledVisibility.tsx\");\n/* harmony import */ var _HOCs_withControlledVisibility__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_HOCs_withControlledVisibility__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Mobile_MobileMenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Mobile/MobileMenuItem */ \"./packages/terriajs/lib/ReactViews/Mobile/MobileMenuItem.tsx\");\n/* harmony import */ var _Mobile_MobileMenuItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Mobile_MobileMenuItem__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst MenuItem = _HOCs_withControlledVisibility__WEBPACK_IMPORTED_MODULE_2___default()(\n  _ResponsiveSwitch__WEBPACK_IMPORTED_MODULE_1___default()(_Map_MenuButton__WEBPACK_IMPORTED_MODULE_0___default.a, _Mobile_MobileMenuItem__WEBPACK_IMPORTED_MODULE_3___default.a)\n);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuItem);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyaWFqcy9saWIvUmVhY3RWaWV3cy9TdGFuZGFyZFVzZXJJbnRlcmZhY2UvY3VzdG9taXphYmxlL01lbnVJdGVtLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhY2thZ2VzL3RlcnJpYWpzL2xpYi9SZWFjdFZpZXdzL1N0YW5kYXJkVXNlckludGVyZmFjZS9jdXN0b21pemFibGUvTWVudUl0ZW0uanN4P2FmOTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lbnVCdXR0b24gZnJvbSBcIi4uLy4uL01hcC9NZW51QnV0dG9uXCI7XG5pbXBvcnQgcmVzcG9uc2l2ZVN3aXRjaCBmcm9tIFwiLi9SZXNwb25zaXZlU3dpdGNoXCI7XG5pbXBvcnQgd2l0aENvbnRyb2xsZWRWaXNpYmlsaXR5IGZyb20gXCIuLi8uLi9IT0NzL3dpdGhDb250cm9sbGVkVmlzaWJpbGl0eVwiO1xuaW1wb3J0IE1vYmlsZU1lbnVJdGVtIGZyb20gXCIuLi8uLi9Nb2JpbGUvTW9iaWxlTWVudUl0ZW1cIjtcblxuY29uc3QgTWVudUl0ZW0gPSB3aXRoQ29udHJvbGxlZFZpc2liaWxpdHkoXG4gIHJlc3BvbnNpdmVTd2l0Y2goTWVudUJ1dHRvbiwgTW9iaWxlTWVudUl0ZW0pXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBNZW51SXRlbTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/terriajs/lib/ReactViews/StandardUserInterface/customizable/MenuItem.jsx\n");

/***/ }),

/***/ "./packages/terriajs/lib/ReactViews/StandardUserInterface/customizable/ResponsiveSwitch.jsx":
/*!**************************************************************************************************!*\
  !*** ./packages/terriajs/lib/ReactViews/StandardUserInterface/customizable/ResponsiveSwitch.jsx ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  return new Worker(__webpack_require__.p + \"e1d234de3a6924f4ff28.worker.js\");\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyaWFqcy9saWIvUmVhY3RWaWV3cy9TdGFuZGFyZFVzZXJJbnRlcmZhY2UvY3VzdG9taXphYmxlL1Jlc3BvbnNpdmVTd2l0Y2guanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvdGVycmlhanMvbGliL1JlYWN0Vmlld3MvU3RhbmRhcmRVc2VySW50ZXJmYWNlL2N1c3RvbWl6YWJsZS9SZXNwb25zaXZlU3dpdGNoLmpzeD85YzM1Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgV29ya2VyKF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlMWQyMzRkZTNhNjkyNGY0ZmYyOC53b3JrZXIuanNcIik7XG59OyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/terriajs/lib/ReactViews/StandardUserInterface/customizable/ResponsiveSwitch.jsx\n");

/***/ })

/******/ });