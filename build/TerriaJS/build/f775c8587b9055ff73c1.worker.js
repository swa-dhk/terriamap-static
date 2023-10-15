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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../node_modules/string-replace-webpack-plugin/loader.js?id=b0mzr82r6sh!./buildprocess/removeCesiumDebugPragmas.js!../../node_modules/terriajs-cesium/Source/Workers/transferTypedArrayTest.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/string-replace-webpack-plugin/loader.js?id=b0mzr82r6sh!./buildprocess/removeCesiumDebugPragmas.js!../../node_modules/terriajs-cesium/Source/Workers/transferTypedArrayTest.js":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/staffordsmith/dev/TerriaMap/node_modules/string-replace-webpack-plugin/loader.js?id=b0mzr82r6sh!./buildprocess/removeCesiumDebugPragmas.js!/Users/staffordsmith/dev/TerriaMap/node_modules/terriajs-cesium/Source/Workers/transferTypedArrayTest.js ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// make sure self is defined so that the Dojo build can evaluate this file without crashing.\nif (typeof self === \"undefined\") {\n  //eslint-disable-next-line no-implicit-globals, no-global-assign\n  self = {};\n}\n\nself.onmessage = function (event) {\n  var array = event.data.array;\n  var postMessage = self.webkitPostMessage || self.postMessage;\n\n  try {\n    // transfer the test array back to the caller\n    postMessage(\n      {\n        array: array,\n      },\n      [array.buffer]\n    );\n  } catch (e) {\n    postMessage({});\n  }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL3N0cmluZy1yZXBsYWNlLXdlYnBhY2stcGx1Z2luL2xvYWRlci5qcz9pZD1iMG16cjgycjZzaCEuL2J1aWxkcHJvY2Vzcy9yZW1vdmVDZXNpdW1EZWJ1Z1ByYWdtYXMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3RlcnJpYWpzLWNlc2l1bS9Tb3VyY2UvV29ya2Vycy90cmFuc2ZlclR5cGVkQXJyYXlUZXN0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy9Vc2Vycy9zdGFmZm9yZHNtaXRoL2Rldi9UZXJyaWFNYXAvbm9kZV9tb2R1bGVzL3RlcnJpYWpzLWNlc2l1bS9Tb3VyY2UvV29ya2Vycy90cmFuc2ZlclR5cGVkQXJyYXlUZXN0LmpzP2NiNjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbWFrZSBzdXJlIHNlbGYgaXMgZGVmaW5lZCBzbyB0aGF0IHRoZSBEb2pvIGJ1aWxkIGNhbiBldmFsdWF0ZSB0aGlzIGZpbGUgd2l0aG91dCBjcmFzaGluZy5cbmlmICh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAvL2VzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1pbXBsaWNpdC1nbG9iYWxzLCBuby1nbG9iYWwtYXNzaWduXG4gIHNlbGYgPSB7fTtcbn1cblxuc2VsZi5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdmFyIGFycmF5ID0gZXZlbnQuZGF0YS5hcnJheTtcbiAgdmFyIHBvc3RNZXNzYWdlID0gc2VsZi53ZWJraXRQb3N0TWVzc2FnZSB8fCBzZWxmLnBvc3RNZXNzYWdlO1xuXG4gIHRyeSB7XG4gICAgLy8gdHJhbnNmZXIgdGhlIHRlc3QgYXJyYXkgYmFjayB0byB0aGUgY2FsbGVyXG4gICAgcG9zdE1lc3NhZ2UoXG4gICAgICB7XG4gICAgICAgIGFycmF5OiBhcnJheSxcbiAgICAgIH0sXG4gICAgICBbYXJyYXkuYnVmZmVyXVxuICAgICk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBwb3N0TWVzc2FnZSh7fSk7XG4gIH1cbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../node_modules/string-replace-webpack-plugin/loader.js?id=b0mzr82r6sh!./buildprocess/removeCesiumDebugPragmas.js!../../node_modules/terriajs-cesium/Source/Workers/transferTypedArrayTest.js\n");

/***/ })

/******/ });