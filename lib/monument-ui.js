(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("styled-components"));
	else if(typeof define === 'function' && define.amd)
		define("MonumentUI", ["styled-components"], factory);
	else if(typeof exports === 'object')
		exports["MonumentUI"] = factory(require("styled-components"));
	else
		root["MonumentUI"] = factory(root["styled-components"]);
})(global, function(__WEBPACK_EXTERNAL_MODULE_styled_components__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Element.js":
/*!************************!*\
  !*** ./src/Element.js ***!
  \************************/
/*! exports provided: Element */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Element", function() { return Element; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layers */ "./src/layers.js");
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
      _ref$hoverable = _ref.hoverable,
      hoverable = _ref$hoverable === void 0 ? true : _ref$hoverable,
      _ref$focusable = _ref.focusable,
      focusable = _ref$focusable === void 0 ? true : _ref$focusable;
  return "\n    transition: all 300ms ease;\n\n    &:not(:focus):not(:active) {\n      box-shadow: ".concat(Object(_layers__WEBPACK_IMPORTED_MODULE_1__["layers"])(perspective.x, perspective.y, color), ";\n    }\n\n    ").concat(hoverable && "\n      &:hover {\n        cursor: pointer;\n      }\n    ", "\n\n    ").concat(focusable && "\n      &:focus,\n      &:active {\n        box-shadow: 0, 0, 0 rgba(0, 0, 0, 0);\n        transform: translate(".concat(perspective.x, "px, ").concat(perspective.y, "px);\n      }\n    "), "\n  ");
});
/*&:not(:active):hover {
  box-shadow: ${layers(
    perspective.x > 0 ? perspective.x + 2 : perspective.x - 2,
    perspective.y > 0 ? perspective.y + 2 : perspective.y - 2,
    color
  )};
  transform: translate(${perspective.x > 0 ? -2 : 2}px, ${
  perspective.y > 0 ? -2 : 2
}px);
}*/

/*{
  hoverable: 'up' || 'down' || 'reverseDir',
  focusable: 'up' || 'down' || 'reverseDir',
  onScroll:
    {
      mode: 'move' || 'roundAbout',
      speed: 100,
      direction: 'straight' || 'reverse'
    } || false
}*/

/***/ }),

/***/ "./src/Text.js":
/*!*********************!*\
  !*** ./src/Text.js ***!
  \*********************/
/*! exports provided: Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layers */ "./src/layers.js");
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
      color = _ref$color === void 0 ? '#ccc' : _ref$color;
  return "\n    text-shadow: ".concat(Object(_layers__WEBPACK_IMPORTED_MODULE_1__["layers"])(perspective.x, perspective.y, color), ";\n\n    padding-").concat(perspective.x > 0 ? "right: ".concat(perspective.x) : "left: ".concat(-perspective.x), "px;\n\n    padding-").concat(perspective.y > 0 ? "bottom: ".concat(perspective.y) : "top: ".concat(-perspective.y), "px;\n  ");
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Element, Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Element */ "./src/Element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Element", function() { return _Element__WEBPACK_IMPORTED_MODULE_0__["Element"]; });

/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Text */ "./src/Text.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _Text__WEBPACK_IMPORTED_MODULE_1__["Text"]; });




/***/ }),

/***/ "./src/layers.js":
/*!***********************!*\
  !*** ./src/layers.js ***!
  \***********************/
/*! exports provided: layers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layers", function() { return layers; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var layers = function layers(x, y, color) {
  /*if (x > Element.offsetWidth / 2) x = Element.offsetWidth / 2;
  if (y > Element.offsetHeight / 2) y = Element.offsetHeight / 2;*/
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
    var horizontal = Math.abs(x) > Math.abs(y) ? masterDepth : slaveDepth;
    var vertical = Math.abs(x) < Math.abs(y) ? masterDepth : slaveDepth;
    depth = [].concat(_toConsumableArray(depth), ["".concat(x > 0 ? horizontal : -horizontal, "px ").concat(y > 0 ? vertical : -vertical, "px 0 ").concat(color)]);
  }

  return depth.join(',');
};

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