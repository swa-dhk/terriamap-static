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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/terriajs/lib/ReactViews/StandardUserInterface/customizable/Groups.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/terriajs/lib/ReactViews/StandardUserInterface/customizable/Groups.jsx":
/*!****************************************************************************************!*\
  !*** ./packages/terriajs/lib/ReactViews/StandardUserInterface/customizable/Groups.jsx ***!
  \****************************************************************************************/
/*! exports provided: Menu, MenuLeft, Nav, ExperimentalMenu, Feedback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Menu\", function() { return Menu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MenuLeft\", function() { return MenuLeft; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Nav\", function() { return Nav; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExperimentalMenu\", function() { return ExperimentalMenu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Feedback\", function() { return Feedback; });\n/**\n * The elements specified in this aren't actually ever rendered directly, rather they serve to provide a nice way\n * to define a customised StandardUserInterface - elements are defined in these groups as the children of\n * StandardUserInterface, and StandardUserInterface then looks for the children of these elements, scoops them out\n * and puts them in the correct place.\n */\n\n/** No-op grouping element for elements that should be added to the menu */\nfunction Menu() {}\n/** No-op grouping element for elements that should be added to the left menu */\nfunction MenuLeft() {}\n/** No-op grouping element for elements that should be added to the nav*/\nfunction Nav() {}\n/** No-op grouping element for elements that should be added to the experimental features*/\nfunction ExperimentalMenu() {}\n/** No-op grouping element for elements that should be added to the Feedback*/\nfunction Feedback() {}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyaWFqcy9saWIvUmVhY3RWaWV3cy9TdGFuZGFyZFVzZXJJbnRlcmZhY2UvY3VzdG9taXphYmxlL0dyb3Vwcy5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90ZXJyaWFqcy9saWIvUmVhY3RWaWV3cy9TdGFuZGFyZFVzZXJJbnRlcmZhY2UvY3VzdG9taXphYmxlL0dyb3Vwcy5qc3g/Y2YxOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoZSBlbGVtZW50cyBzcGVjaWZpZWQgaW4gdGhpcyBhcmVuJ3QgYWN0dWFsbHkgZXZlciByZW5kZXJlZCBkaXJlY3RseSwgcmF0aGVyIHRoZXkgc2VydmUgdG8gcHJvdmlkZSBhIG5pY2Ugd2F5XG4gKiB0byBkZWZpbmUgYSBjdXN0b21pc2VkIFN0YW5kYXJkVXNlckludGVyZmFjZSAtIGVsZW1lbnRzIGFyZSBkZWZpbmVkIGluIHRoZXNlIGdyb3VwcyBhcyB0aGUgY2hpbGRyZW4gb2ZcbiAqIFN0YW5kYXJkVXNlckludGVyZmFjZSwgYW5kIFN0YW5kYXJkVXNlckludGVyZmFjZSB0aGVuIGxvb2tzIGZvciB0aGUgY2hpbGRyZW4gb2YgdGhlc2UgZWxlbWVudHMsIHNjb29wcyB0aGVtIG91dFxuICogYW5kIHB1dHMgdGhlbSBpbiB0aGUgY29ycmVjdCBwbGFjZS5cbiAqL1xuXG4vKiogTm8tb3AgZ3JvdXBpbmcgZWxlbWVudCBmb3IgZWxlbWVudHMgdGhhdCBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIG1lbnUgKi9cbmV4cG9ydCBmdW5jdGlvbiBNZW51KCkge31cbi8qKiBOby1vcCBncm91cGluZyBlbGVtZW50IGZvciBlbGVtZW50cyB0aGF0IHNob3VsZCBiZSBhZGRlZCB0byB0aGUgbGVmdCBtZW51ICovXG5leHBvcnQgZnVuY3Rpb24gTWVudUxlZnQoKSB7fVxuLyoqIE5vLW9wIGdyb3VwaW5nIGVsZW1lbnQgZm9yIGVsZW1lbnRzIHRoYXQgc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSBuYXYqL1xuZXhwb3J0IGZ1bmN0aW9uIE5hdigpIHt9XG4vKiogTm8tb3AgZ3JvdXBpbmcgZWxlbWVudCBmb3IgZWxlbWVudHMgdGhhdCBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIGV4cGVyaW1lbnRhbCBmZWF0dXJlcyovXG5leHBvcnQgZnVuY3Rpb24gRXhwZXJpbWVudGFsTWVudSgpIHt9XG4vKiogTm8tb3AgZ3JvdXBpbmcgZWxlbWVudCBmb3IgZWxlbWVudHMgdGhhdCBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIEZlZWRiYWNrKi9cbmV4cG9ydCBmdW5jdGlvbiBGZWVkYmFjaygpIHt9XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/terriajs/lib/ReactViews/StandardUserInterface/customizable/Groups.jsx\n");

/***/ })

/******/ });