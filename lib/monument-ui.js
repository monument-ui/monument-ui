(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("color"), require("react"), require("styled-components"), require("to-px"));
	else if(typeof define === 'function' && define.amd)
		define("MonumentUI", ["color", "react", "styled-components", "to-px"], factory);
	else if(typeof exports === 'object')
		exports["MonumentUI"] = factory(require("color"), require("react"), require("styled-components"), require("to-px"));
	else
		root["MonumentUI"] = factory(root["color"], root["react"], root["styled-components"], root["to-px"]);
})(global, function(__WEBPACK_EXTERNAL_MODULE_color__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_styled_components__, __WEBPACK_EXTERNAL_MODULE_to_px__) {
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

/***/ "./src/bases/Element.tsx":
/*!*******************************!*\
  !*** ./src/bases/Element.tsx ***!
  \*******************************/
/*! exports provided: Base */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return Base; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  will-change: transform;\n  box-shadow: ", ";\n\n  ", "\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var onClick = "\n  transform: translate(0, 0);\n  box-shadow: 0 0 0 0 #0000;\n";
var Base = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject(), function (_ref) {
  var layers = _ref.layers;
  return layers;
}, function (_ref2) {
  var _ref2$depth = _ref2.depth,
      x = _ref2$depth.x,
      y = _ref2$depth.y;
  return "\n    transform: translate(".concat(-x, "px, ").concat(-y, "px);\n  ");
}, function (_ref3) {
  var animate = _ref3.animate;
  return animate ? "transition: transform 300ms ease, box-shadow 300ms ease;" : "";
}, function (_ref4) {
  var clickable = _ref4.clickable;
  return clickable ? "\n      &:focus,\n      &:active {\n        ".concat(onClick, "\n      }\n\n      @media not all and (hover: hover) {\n        &:hover {\n          ").concat(onClick, "\n        }\n      }\n      ") : "";
});

/***/ }),

/***/ "./src/bases/Text.tsx":
/*!****************************!*\
  !*** ./src/bases/Text.tsx ***!
  \****************************/
/*! exports provided: Base */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return Base; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-shadow: ", ";\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Base = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p(_templateObject(), function (_ref) {
  var layers = _ref.layers;
  return layers;
}, function (_ref2) {
  var _ref2$depth = _ref2.depth,
      x = _ref2$depth.x,
      y = _ref2$depth.y;
  return "\n    margin-left: ".concat(x > 0 ? x : -x, "px;\n    margin-top: ").concat(y > 0 ? y : -y, "px;\n  ");
});

/***/ }),

/***/ "./src/components/Element.tsx":
/*!************************************!*\
  !*** ./src/components/Element.tsx ***!
  \************************************/
/*! exports provided: Element */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Element", function() { return Element; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bases_Element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bases/Element */ "./src/bases/Element.tsx");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.tsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Element = function Element(_ref) {
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
      clickable = _ref$clickable === void 0 ? false : _ref$clickable,
      props = _objectWithoutProperties(_ref, ["perspective", "color", "shadow", "colorify", "hoverable", "clickable"]);

  var el = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      layers = _useState2[0],
      setLayers = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    x: 0,
    y: 0
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      depth = _useState4[0],
      setDepth = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      animate = _useState6[0],
      setAnimate = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      clickEvent = _useState8[0],
      setClickEvent = _useState8[1];

  var generateLayers = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (mode) {
    var x = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["convertUnits"])(perspective.x);
    var y = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["convertUnits"])(perspective.y);
    var extraX;
    var extraY;

    if (mode === 'mouseenter' && hoverable) {
      extraX = el.current.offsetWidth / 10;
      extraY = el.current.offsetHeight / 10;
    } else {
      extraX = 0;
      extraY = 0;
    }

    if (mode) setAnimate(true);
    var max = {
      x: el.current.offsetWidth + extraX / 2,
      y: el.current.offsetHeight + extraY / 2
    };
    var axis = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["checkMax"])(max, {
      x: x,
      y: y
    });
    axis.x = Math.round(axis.x > 0 ? axis.x + extraX : axis.x < 0 ? axis.x - extraX : axis.x);
    axis.y = Math.round(axis.y > 0 ? axis.y + extraY : axis.y < 0 ? axis.y - extraY : axis.y);
    setLayers(Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["countLayers"])({
      x: axis.x,
      y: axis.y,
      color: color,
      shadow: shadow,
      colorify: colorify
    }));
    setDepth({
      x: axis.x,
      y: axis.y
    });
    setClickEvent(clickable);
  }, [clickable, color, colorify, hoverable, perspective.x, perspective.y, shadow]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    generateLayers();
    window.addEventListener('resize', function () {
      return generateLayers();
    });
  }, [generateLayers]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bases_Element__WEBPACK_IMPORTED_MODULE_1__["Base"], _extends({
    ref: el,
    onMouseEnter: function onMouseEnter() {
      return generateLayers('mouseenter');
    },
    onMouseLeave: function onMouseLeave() {
      return generateLayers('mouseleave');
    },
    layers: layers,
    depth: depth,
    animate: animate,
    clickable: clickEvent
  }, props));
};

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bases_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bases/Text */ "./src/bases/Text.tsx");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.tsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Text = function Text(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#ccc' : _ref$color,
      _ref$colorify = _ref.colorify,
      colorify = _ref$colorify === void 0 ? false : _ref$colorify,
      _ref$perspective = _ref.perspective,
      perspective = _ref$perspective === void 0 ? {
    x: 5,
    y: 5
  } : _ref$perspective,
      _ref$shadow = _ref.shadow,
      shadow = _ref$shadow === void 0 ? '' : _ref$shadow,
      props = _objectWithoutProperties(_ref, ["color", "colorify", "perspective", "shadow"]);

  var el = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      layers = _useState2[0],
      setLayers = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    x: 0,
    y: 0
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      depth = _useState4[0],
      setDepth = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var generateLayers = function generateLayers() {
      var x = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["convertUnits"])(perspective.x);
      var y = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["convertUnits"])(perspective.y);
      setLayers(Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["countLayers"])({
        x: x,
        y: y,
        color: color,
        shadow: shadow,
        colorify: colorify
      }));
      setDepth({
        x: x,
        y: y
      });
    };

    generateLayers();
    window.addEventListener('resize', function () {
      return generateLayers();
    });
    el.current.addEventListener('mouseover', function () {
      return generateLayers();
    });
  }, [color, colorify, perspective.x, perspective.y, shadow]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bases_Text__WEBPACK_IMPORTED_MODULE_1__["Base"], _extends({
    ref: el,
    layers: layers,
    depth: depth
  }, props));
};

/***/ }),

/***/ "./src/helpers/checkMax.tsx":
/*!**********************************!*\
  !*** ./src/helpers/checkMax.tsx ***!
  \**********************************/
/*! exports provided: checkMax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkMax", function() { return checkMax; });
function checkMax(max, perspective) {
  if (perspective.x > max.x) perspective.x = max.x;
  if (perspective.y > max.y) perspective.y = max.y;
  return perspective;
}

/***/ }),

/***/ "./src/helpers/convertUnits.tsx":
/*!**************************************!*\
  !*** ./src/helpers/convertUnits.tsx ***!
  \**************************************/
/*! exports provided: convertUnits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertUnits", function() { return convertUnits; });
/* harmony import */ var to_px__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! to-px */ "to-px");
/* harmony import */ var to_px__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(to_px__WEBPACK_IMPORTED_MODULE_0__);

function convertUnits(unit) {
  return typeof unit === 'string' ? to_px__WEBPACK_IMPORTED_MODULE_0___default()(unit) : unit;
}

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
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! color */ "color");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_0__);

var generateColors = function generateColors(color) {
  return color__WEBPACK_IMPORTED_MODULE_0___default()(color).isDark() ? color__WEBPACK_IMPORTED_MODULE_0___default()(color).lighten(1 / 128).toString() : color__WEBPACK_IMPORTED_MODULE_0___default()(color).darken(1 / 128).toString();
};

/***/ }),

/***/ "./src/helpers/index.tsx":
/*!*******************************!*\
  !*** ./src/helpers/index.tsx ***!
  \*******************************/
/*! exports provided: convertUnits, countLayers, checkMax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _convertUnits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convertUnits */ "./src/helpers/convertUnits.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertUnits", function() { return _convertUnits__WEBPACK_IMPORTED_MODULE_0__["convertUnits"]; });

/* harmony import */ var _layers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layers */ "./src/helpers/layers.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countLayers", function() { return _layers__WEBPACK_IMPORTED_MODULE_1__["countLayers"]; });

/* harmony import */ var _checkMax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkMax */ "./src/helpers/checkMax.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkMax", function() { return _checkMax__WEBPACK_IMPORTED_MODULE_2__["checkMax"]; });





/***/ }),

/***/ "./src/helpers/layers.tsx":
/*!********************************!*\
  !*** ./src/helpers/layers.tsx ***!
  \********************************/
/*! exports provided: countLayers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countLayers", function() { return countLayers; });
/* harmony import */ var _generateColors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateColors */ "./src/helpers/generateColors.tsx");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


function countLayers(_ref) {
  var x = _ref.x,
      y = _ref.y,
      color = _ref.color,
      shadow = _ref.shadow,
      colorify = _ref.colorify;
  var master;
  var slave;

  if (Math.abs(x) >= Math.abs(y)) {
    master = x;
    slave = y;
  } else {
    master = y;
    slave = x;
  }

  var slaveDiff = Math.abs(slave) / Math.abs(master);
  var depth = [];
  var slaveDepth = 0;

  for (var masterDepth = 1; masterDepth <= Math.abs(master); masterDepth++) {
    slaveDepth += slaveDiff;
    if (colorify) color = Object(_generateColors__WEBPACK_IMPORTED_MODULE_0__["generateColors"])(color);
    var horizontal = Math.abs(x) > Math.abs(y) ? masterDepth : slaveDepth;
    var vertical = Math.abs(x) < Math.abs(y) ? masterDepth : slaveDepth;
    depth.push("".concat(x > 0 ? horizontal : -horizontal, "px ").concat(y > 0 ? vertical : -vertical, "px 0 ").concat(color));
  }

  if (shadow) depth = [].concat(_toConsumableArray(depth), ["".concat(shadow)]);
  return depth.join(',');
}

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

/***/ "color":
/*!************************!*\
  !*** external "color" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_color__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_styled_components__;

/***/ }),

/***/ "to-px":
/*!************************!*\
  !*** external "to-px" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_to_px__;

/***/ })

/******/ });
});
//# sourceMappingURL=monument-ui.js.map