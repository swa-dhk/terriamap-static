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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/terriajs/lib/ViewModels/updateApplicationOnMessageFromParentWindow.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/terriajs-cesium/Source/Core/defined.js":
/*!*************************************************************!*\
  !*** ./node_modules/terriajs-cesium/Source/Core/defined.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * @function\n *\n * @param {*} value The object.\n * @returns {Boolean} Returns true if the object is defined, returns false otherwise.\n *\n * @example\n * if (Cesium.defined(positions)) {\n *      doSomething();\n * } else {\n *      doSomethingElse();\n * }\n */\nfunction defined(value) {\n  return value !== undefined && value !== null;\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (defined);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdGVycmlhanMtY2VzaXVtL1NvdXJjZS9Db3JlL2RlZmluZWQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGVycmlhanMtY2VzaXVtL1NvdXJjZS9Db3JlL2RlZmluZWQuanM/NmNiNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIG9iamVjdC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIG9iamVjdCBpcyBkZWZpbmVkLCByZXR1cm5zIGZhbHNlIG90aGVyd2lzZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaWYgKENlc2l1bS5kZWZpbmVkKHBvc2l0aW9ucykpIHtcbiAqICAgICAgZG9Tb21ldGhpbmcoKTtcbiAqIH0gZWxzZSB7XG4gKiAgICAgIGRvU29tZXRoaW5nRWxzZSgpO1xuICogfVxuICovXG5mdW5jdGlvbiBkZWZpbmVkKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsO1xufVxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lZDtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/terriajs-cesium/Source/Core/defined.js\n");

/***/ }),

/***/ "./packages/terriajs/lib/Core/TerriaError.ts":
/*!***************************************************!*\
  !*** ./packages/terriajs/lib/Core/TerriaError.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n  return new Worker(__webpack_require__.p + \"6cdb70c5c99215875475.worker.js\");\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyaWFqcy9saWIvQ29yZS9UZXJyaWFFcnJvci50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhY2thZ2VzL3RlcnJpYWpzL2xpYi9Db3JlL1RlcnJpYUVycm9yLnRzP2ZlMjMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBXb3JrZXIoX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjZjZGI3MGM1Yzk5MjE1ODc1NDc1Lndvcmtlci5qc1wiKTtcbn07Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/terriajs/lib/Core/TerriaError.ts\n");

/***/ }),

/***/ "./packages/terriajs/lib/ViewModels/updateApplicationOnMessageFromParentWindow.js":
/*!****************************************************************************************!*\
  !*** ./packages/terriajs/lib/ViewModels/updateApplicationOnMessageFromParentWindow.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst { TerriaErrorSeverity } = __webpack_require__(/*! ../Core/TerriaError */ \"./packages/terriajs/lib/Core/TerriaError.ts\");\n\nvar defined = __webpack_require__(/*! terriajs-cesium/Source/Core/defined */ \"./node_modules/terriajs-cesium/Source/Core/defined.js\").default;\nvar updateApplicationOnMessageFromParentWindow = function (terria, window) {\n  var allowOrigin;\n\n  window.addEventListener(\n    \"message\",\n    async function (event) {\n      var origin = event.origin;\n      if (!defined(origin) && defined(event.originalEvent)) {\n        // For Chrome, the origin property is in the event.originalEvent object.\n        origin = event.originalEvent.origin;\n      }\n\n      if (\n        (!defined(allowOrigin) || origin !== allowOrigin) && // allowed origin in url hash parameter\n        event.source !== window.parent && // iframe parent\n        event.source !== window.opener\n      ) {\n        // caller of window.open\n        return;\n      }\n\n      // receive allowOrigin\n      if (\n        (event.source === window.opener || event.source === window.parent) &&\n        event.data.allowOrigin\n      ) {\n        allowOrigin = event.data.allowOrigin;\n        delete event.data.allowOrigin;\n      }\n\n      // Ignore react devtools\n      if (/^react-devtools/gi.test(event.data.source)) {\n        return;\n      }\n\n      (\n        await terria.updateFromStartData(\n          event.data,\n          \"Start data from message from parent window\",\n          TerriaErrorSeverity.Error\n        )\n      ).raiseError(terria);\n    },\n    false\n  );\n\n  if (window.parent !== window) {\n    window.parent.postMessage(\"ready\", \"*\");\n  }\n\n  if (window.opener) {\n    window.opener.postMessage(\"ready\", \"*\");\n  }\n};\n\nmodule.exports = updateApplicationOnMessageFromParentWindow;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyaWFqcy9saWIvVmlld01vZGVscy91cGRhdGVBcHBsaWNhdGlvbk9uTWVzc2FnZUZyb21QYXJlbnRXaW5kb3cuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90ZXJyaWFqcy9saWIvVmlld01vZGVscy91cGRhdGVBcHBsaWNhdGlvbk9uTWVzc2FnZUZyb21QYXJlbnRXaW5kb3cuanM/M2JkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgeyBUZXJyaWFFcnJvclNldmVyaXR5IH0gPSByZXF1aXJlKFwiLi4vQ29yZS9UZXJyaWFFcnJvclwiKTtcblxudmFyIGRlZmluZWQgPSByZXF1aXJlKFwidGVycmlhanMtY2VzaXVtL1NvdXJjZS9Db3JlL2RlZmluZWRcIikuZGVmYXVsdDtcbnZhciB1cGRhdGVBcHBsaWNhdGlvbk9uTWVzc2FnZUZyb21QYXJlbnRXaW5kb3cgPSBmdW5jdGlvbiAodGVycmlhLCB3aW5kb3cpIHtcbiAgdmFyIGFsbG93T3JpZ2luO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwibWVzc2FnZVwiLFxuICAgIGFzeW5jIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIG9yaWdpbiA9IGV2ZW50Lm9yaWdpbjtcbiAgICAgIGlmICghZGVmaW5lZChvcmlnaW4pICYmIGRlZmluZWQoZXZlbnQub3JpZ2luYWxFdmVudCkpIHtcbiAgICAgICAgLy8gRm9yIENocm9tZSwgdGhlIG9yaWdpbiBwcm9wZXJ0eSBpcyBpbiB0aGUgZXZlbnQub3JpZ2luYWxFdmVudCBvYmplY3QuXG4gICAgICAgIG9yaWdpbiA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQub3JpZ2luO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgICghZGVmaW5lZChhbGxvd09yaWdpbikgfHwgb3JpZ2luICE9PSBhbGxvd09yaWdpbikgJiYgLy8gYWxsb3dlZCBvcmlnaW4gaW4gdXJsIGhhc2ggcGFyYW1ldGVyXG4gICAgICAgIGV2ZW50LnNvdXJjZSAhPT0gd2luZG93LnBhcmVudCAmJiAvLyBpZnJhbWUgcGFyZW50XG4gICAgICAgIGV2ZW50LnNvdXJjZSAhPT0gd2luZG93Lm9wZW5lclxuICAgICAgKSB7XG4gICAgICAgIC8vIGNhbGxlciBvZiB3aW5kb3cub3BlblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIHJlY2VpdmUgYWxsb3dPcmlnaW5cbiAgICAgIGlmIChcbiAgICAgICAgKGV2ZW50LnNvdXJjZSA9PT0gd2luZG93Lm9wZW5lciB8fCBldmVudC5zb3VyY2UgPT09IHdpbmRvdy5wYXJlbnQpICYmXG4gICAgICAgIGV2ZW50LmRhdGEuYWxsb3dPcmlnaW5cbiAgICAgICkge1xuICAgICAgICBhbGxvd09yaWdpbiA9IGV2ZW50LmRhdGEuYWxsb3dPcmlnaW47XG4gICAgICAgIGRlbGV0ZSBldmVudC5kYXRhLmFsbG93T3JpZ2luO1xuICAgICAgfVxuXG4gICAgICAvLyBJZ25vcmUgcmVhY3QgZGV2dG9vbHNcbiAgICAgIGlmICgvXnJlYWN0LWRldnRvb2xzL2dpLnRlc3QoZXZlbnQuZGF0YS5zb3VyY2UpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgKFxuICAgICAgICBhd2FpdCB0ZXJyaWEudXBkYXRlRnJvbVN0YXJ0RGF0YShcbiAgICAgICAgICBldmVudC5kYXRhLFxuICAgICAgICAgIFwiU3RhcnQgZGF0YSBmcm9tIG1lc3NhZ2UgZnJvbSBwYXJlbnQgd2luZG93XCIsXG4gICAgICAgICAgVGVycmlhRXJyb3JTZXZlcml0eS5FcnJvclxuICAgICAgICApXG4gICAgICApLnJhaXNlRXJyb3IodGVycmlhKTtcbiAgICB9LFxuICAgIGZhbHNlXG4gICk7XG5cbiAgaWYgKHdpbmRvdy5wYXJlbnQgIT09IHdpbmRvdykge1xuICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UoXCJyZWFkeVwiLCBcIipcIik7XG4gIH1cblxuICBpZiAod2luZG93Lm9wZW5lcikge1xuICAgIHdpbmRvdy5vcGVuZXIucG9zdE1lc3NhZ2UoXCJyZWFkeVwiLCBcIipcIik7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdXBkYXRlQXBwbGljYXRpb25Pbk1lc3NhZ2VGcm9tUGFyZW50V2luZG93O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/terriajs/lib/ViewModels/updateApplicationOnMessageFromParentWindow.js\n");

/***/ })

/******/ });