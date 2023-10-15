(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "../../node_modules/geotiff/dist-module/compression/deflate.js":
/*!**************************************************************************************************!*\
  !*** /Users/staffordsmith/dev/TerriaMap/node_modules/geotiff/dist-module/compression/deflate.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DeflateDecoder; });\n/* harmony import */ var pako__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pako */ \"../../node_modules/geotiff/node_modules/pako/dist/pako.esm.mjs\");\n/* harmony import */ var _basedecoder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basedecoder.js */ \"../../node_modules/geotiff/dist-module/compression/basedecoder.js\");\n\n\n\nclass DeflateDecoder extends _basedecoder_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  decodeBlock(buffer) {\n    return Object(pako__WEBPACK_IMPORTED_MODULE_0__[\"inflate\"])(new Uint8Array(buffer)).buffer;\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL2dlb3RpZmYvZGlzdC1tb2R1bGUvY29tcHJlc3Npb24vZGVmbGF0ZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8vVXNlcnMvc3RhZmZvcmRzbWl0aC9kZXYvVGVycmlhTWFwL25vZGVfbW9kdWxlcy9nZW90aWZmL2Rpc3QtbW9kdWxlL2NvbXByZXNzaW9uL2RlZmxhdGUuanM/ZmEyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmZsYXRlIH0gZnJvbSAncGFrbyc7XG5pbXBvcnQgQmFzZURlY29kZXIgZnJvbSAnLi9iYXNlZGVjb2Rlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmxhdGVEZWNvZGVyIGV4dGVuZHMgQmFzZURlY29kZXIge1xuICBkZWNvZGVCbG9jayhidWZmZXIpIHtcbiAgICByZXR1cm4gaW5mbGF0ZShuZXcgVWludDhBcnJheShidWZmZXIpKS5idWZmZXI7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../node_modules/geotiff/dist-module/compression/deflate.js\n");

/***/ })

}]);