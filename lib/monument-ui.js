(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rgbcolor"), require("styled-components"));
	else if(typeof define === 'function' && define.amd)
		define("MonumentUI", ["rgbcolor", "styled-components"], factory);
	else if(typeof exports === 'object')
		exports["MonumentUI"] = factory(require("rgbcolor"), require("styled-components"));
	else
		root["MonumentUI"] = factory(root["rgbcolor"], root["styled-components"]);
})(global, function(__WEBPACK_EXTERNAL_MODULE_rgbcolor__, __WEBPACK_EXTERNAL_MODULE_styled_components__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Element.tsx":
/*!************************************!*\
  !*** ./src/components/Element.tsx ***!
  \************************************/
/*! exports provided: Element */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Element", function() { return Element; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_layers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/layers */ "./src/helpers/layers.tsx");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Element = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject(), function (_ref) {
  var _ref$perspective = _ref.perspective,
      perspective = _ref$perspective === void 0 ? {
    x: 5,
    y: 5
  } : _ref$perspective,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#444' : _ref$color,
      _ref$shadow = _ref.shadow,
      shadow = _ref$shadow === void 0 ? '' : _ref$shadow,
      _ref$colorify = _ref.colorify,
      colorify = _ref$colorify === void 0 ? false : _ref$colorify,
      _ref$hoverable = _ref.hoverable,
      hoverable = _ref$hoverable === void 0 ? false : _ref$hoverable,
      _ref$clickable = _ref.clickable,
      clickable = _ref$clickable === void 0 ? false : _ref$clickable;
  return "\n    transition: all 300ms ease;\n\n    &:not(:focus):not(:active) {\n      box-shadow: ".concat(Object(_helpers_layers__WEBPACK_IMPORTED_MODULE_1__["layers"])(perspective.x, perspective.y, color, shadow, colorify), ";\n    }\n\n    ").concat(hoverable && "\n      &:hover {\n        cursor: pointer;\n      }\n\n      &:not(:active):hover {\n        box-shadow: ".concat(Object(_helpers_layers__WEBPACK_IMPORTED_MODULE_1__["layers"])(perspective.x > 0 ? perspective.x + 6 : perspective.x - 6, perspective.y > 0 ? perspective.y + 6 : perspective.y - 6, color, shadow, colorify), ";\n\n        transform: translate(").concat(perspective.x > 0 ? -6 : 6, "px, ").concat(perspective.y > 0 ? -6 : 6, "px);\n      }\n    "), "\n\n    ").concat(clickable && "\n      &:focus,\n      &:active {\n        box-shadow: 0, 0, 0 rgba(0, 0, 0, 0);\n        transform: translate(".concat(perspective.x, "px, ").concat(perspective.y, "px);\n      }\n    "), "\n  ");
});

/***/ }),

/***/ "./src/components/Text.tsx":
/*!*********************************!*\
  !*** ./src/components/Text.tsx ***!
  \*********************************/
/*! exports provided: Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_layers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/layers */ "./src/helpers/layers.tsx");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p(_templateObject(), function (_ref) {
  var _ref$perspective = _ref.perspective,
      perspective = _ref$perspective === void 0 ? {
    x: 5,
    y: 5
  } : _ref$perspective,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#ccc' : _ref$color,
      _ref$shadow = _ref.shadow,
      shadow = _ref$shadow === void 0 ? '' : _ref$shadow,
      _ref$colorify = _ref.colorify,
      colorify = _ref$colorify === void 0 ? false : _ref$colorify;
  return "\n    text-shadow: ".concat(Object(_helpers_layers__WEBPACK_IMPORTED_MODULE_1__["layers"])(perspective.x, perspective.y, color, shadow, colorify), ";\n\n    padding-").concat(perspective.x > 0 ? "right: ".concat(perspective.x) : "left: ".concat(-perspective.x), "px;\n\n    padding-").concat(perspective.y > 0 ? "bottom: ".concat(perspective.y) : "top: ".concat(-perspective.y), "px;\n  ");
});

/***/ }),

/***/ "./src/helpers/checkSize.tsx":
/*!***********************************!*\
  !*** ./src/helpers/checkSize.tsx ***!
  \***********************************/
/*! exports provided: checkSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkSize", function() { return checkSize; });
var checkSize = function checkSize(value) {
  if (value >= 0 && value < 128) return true;else if (value >= 128 && value <= 255) return false;
};

/***/ }),

/***/ "./src/helpers/generateColors.tsx":
/*!****************************************!*\
  !*** ./src/helpers/generateColors.tsx ***!
  \****************************************/
/*! exports provided: generateColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateColors", function() { return generateColors; });
/* harmony import */ var rgbcolor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rgbcolor */ "rgbcolor");
/* harmony import */ var rgbcolor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rgbcolor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _checkSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkSize */ "./src/helpers/checkSize.tsx");


var generateColors = function generateColors(color) {
  var convert = new rgbcolor__WEBPACK_IMPORTED_MODULE_0___default.a(color);
  return "rgba(".concat(Object(_checkSize__WEBPACK_IMPORTED_MODULE_1__["checkSize"])(convert.r) ? convert.r + 1 : convert.r - 1, ", ").concat(Object(_checkSize__WEBPACK_IMPORTED_MODULE_1__["checkSize"])(convert.g) ? convert.g + 1 : convert.g - 1, ", ").concat(Object(_checkSize__WEBPACK_IMPORTED_MODULE_1__["checkSize"])(convert.b) ? convert.b + 1 : convert.b - 1, ", ").concat(convert.alpha, ")");
};

/***/ }),

/***/ "./src/helpers/layers.tsx":
/*!********************************!*\
  !*** ./src/helpers/layers.tsx ***!
  \********************************/
/*! exports provided: layers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layers", function() { return layers; });
/* harmony import */ var _generateColors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateColors */ "./src/helpers/generateColors.tsx");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


var layers = function layers(x, y, color, shadow, colorify) {
  var master, slave;

  if (Math.abs(x) >= Math.abs(y)) {
    master = x;
    slave = y;
  } else {
    master = y;
    slave = x;
  }

  var slaveDifference = Math.abs(slave) / Math.abs(master);
  var depth = [];
  var slaveDepth = 0;

  for (var masterDepth = 1; masterDepth <= Math.abs(master); masterDepth++) {
    slaveDepth += slaveDifference;
    if (colorify) color = Object(_generateColors__WEBPACK_IMPORTED_MODULE_0__["generateColors"])(color);
    var horizontal = Math.abs(x) > Math.abs(y) ? masterDepth : slaveDepth;
    var vertical = Math.abs(x) < Math.abs(y) ? masterDepth : slaveDepth;
    depth = [].concat(_toConsumableArray(depth), ["".concat(x > 0 ? horizontal : -horizontal, "px ").concat(y > 0 ? vertical : -vertical, "px 0 ").concat(color)]);
  }

  if (shadow) depth = [].concat(_toConsumableArray(depth), ["".concat(shadow)]);
  return depth.join(',');
};

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! exports provided: Element, Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Element */ "./src/components/Element.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Element", function() { return _components_Element__WEBPACK_IMPORTED_MODULE_0__["Element"]; });

/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Text */ "./src/components/Text.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _components_Text__WEBPACK_IMPORTED_MODULE_1__["Text"]; });




/***/ }),

/***/ "rgbcolor":
/*!***************************!*\
  !*** external "rgbcolor" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_rgbcolor__;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_styled_components__;

/***/ })

/******/ });
});
//# sourceMappingURL=monument-ui.js.map