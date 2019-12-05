module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bases/Element.ts":
/*!******************************!*\
  !*** ./src/bases/Element.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "styled-components"));
var pushed = "\n  transform: translate3d(0, 0, 0);\n  box-shadow: 0 0 0 0 #0000;\n";
exports.Base = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var depth = _a.depth, layers = _a.layers, animate = _a.animate, clickable = _a.clickable, hoverable = _a.hoverable, touchable = _a.touchable;
    return "\n    transform: translate3d(" + -depth.x + "px, " + -depth.y + "px, 0);\n    will-change: transform;\n    box-shadow: " + layers + ";\n    \n    " + (animate && "transition: transform 300ms ease, box-shadow 300ms ease;") + "\n\n    " + (clickable === 'push'
        ? "\n      &:focus,\n      &:active {\n        " + pushed + "\n      }\n    "
        : "") + "\n    \n    " + (hoverable === 'push'
        ? "\n      &:not(:focus):hover,\n      &:not(:active):hover {\n        " + pushed + "\n      }\n    "
        : "") + "\n\n    " + (touchable === 'push'
        ? "\n      &:hover {\n        " + pushed + "\n      }\n    "
        : "") + "\n ";
});
var templateObject_1;


/***/ }),

/***/ "./src/bases/Text.ts":
/*!***************************!*\
  !*** ./src/bases/Text.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "styled-components"));
exports.Base = styled_components_1.default.p(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var depth = _a.depth, layers = _a.layers;
    return "\n    transform: translate3d(" + -depth.x / 2 + "px, " + -depth.y / 2 + "px, 0);\n    text-shadow: " + layers + ";\n  ";
});
var templateObject_1;


/***/ }),

/***/ "./src/components/Element.tsx":
/*!************************************!*\
  !*** ./src/components/Element.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var Element_1 = __webpack_require__(/*! ../bases/Element */ "./src/bases/Element.ts");
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers/index.ts");
exports.Element = function (_a) {
    var color = _a.color, _b = _a.shadow, shadow = _b === void 0 ? '' : _b, _c = _a.colorify, colorify = _c === void 0 ? false : _c, _d = _a.perspective, perspective = _d === void 0 ? { x: 5, y: 5 } : _d, clickable = _a.clickable, hoverable = _a.hoverable, touchable = _a.touchable, children = _a.children, props = __rest(_a, ["color", "shadow", "colorify", "perspective", "clickable", "hoverable", "touchable", "children"]);
    var el = react_1.useRef(null);
    var _e = react_1.useState(''), layers = _e[0], setLayers = _e[1];
    var _f = react_1.useState(false), animate = _f[0], setAnimate = _f[1];
    var _g = react_1.useState(), clickEvent = _g[0], setClickEvent = _g[1];
    var _h = react_1.useState(), hoverEvent = _h[0], setHoverEvent = _h[1];
    var _j = react_1.useState(), touchEvent = _j[0], setTouchEvent = _j[1];
    var _k = react_1.useState({
        x: helpers_1.convertUnits(perspective.x),
        y: helpers_1.convertUnits(perspective.y)
    }), depth = _k[0], setDepth = _k[1];
    react_1.useEffect(function () {
        var generateLayers = function () {
            var x = helpers_1.convertUnits(perspective.x);
            var y = helpers_1.convertUnits(perspective.y);
            var extraX;
            var extraY;
            if ((clickEvent && clickable === 'pull') ||
                (hoverEvent && hoverable === 'pull') ||
                (touchEvent && touchable === 'pull')) {
                extraX = x > 0 ? x / 2 : x < 0 ? -x / 2 : 0;
                extraY = y > 0 ? y / 2 : y < 0 ? -y / 2 : 0;
            }
            else {
                extraX = 0;
                extraY = 0;
            }
            var axis = { x: x, y: y };
            if (clickEvent || hoverEvent || touchEvent)
                setAnimate(true);
            axis.x = Math.round(axis.x > 0 ? axis.x + extraX : axis.x < 0 ? axis.x - extraX : axis.x);
            axis.y = Math.round(axis.y > 0 ? axis.y + extraY : axis.y < 0 ? axis.y - extraY : axis.y);
            var levels = helpers_1.countLevels({
                x: axis.x,
                y: axis.y,
                color: color,
                shadow: shadow,
                colorify: colorify
            });
            setLayers(levels);
            setDepth({
                x: axis.x,
                y: axis.y
            });
        };
        generateLayers();
        el.current.addEventListener('mousedown', function () { return setClickEvent(clickable); });
        el.current.addEventListener('mouseup', function () { return setClickEvent(undefined); });
        el.current.addEventListener('mouseenter', function () { return setHoverEvent(hoverable); });
        el.current.addEventListener('mouseleave', function () { return setHoverEvent(undefined); });
        el.current.addEventListener('touchstart', function () { return setTouchEvent(touchable); }, {
            passive: true
        });
        el.current.addEventListener('touchend', function () { return setTouchEvent(undefined); });
        window.addEventListener('resize', generateLayers);
        window.removeEventListener('resize', generateLayers);
    }, [
        clickEvent,
        clickable,
        color,
        colorify,
        layers,
        hoverEvent,
        hoverable,
        perspective.x,
        perspective.y,
        shadow,
        touchable,
        touchEvent
    ]);
    return (react_1.default.createElement(Element_1.Base, __assign({}, props, { ref: el, depth: depth, layers: layers, animate: animate, clickable: clickEvent, hoverable: hoverEvent, touchable: touchEvent }), children));
};


/***/ }),

/***/ "./src/components/Text.tsx":
/*!*********************************!*\
  !*** ./src/components/Text.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var Text_1 = __webpack_require__(/*! ../bases/Text */ "./src/bases/Text.ts");
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers/index.ts");
exports.Text = function (_a) {
    var color = _a.color, _b = _a.shadow, shadow = _b === void 0 ? '' : _b, _c = _a.colorify, colorify = _c === void 0 ? false : _c, _d = _a.perspective, perspective = _d === void 0 ? { x: 5, y: 5 } : _d, children = _a.children, props = __rest(_a, ["color", "shadow", "colorify", "perspective", "children"]);
    var _e = react_1.useState(''), layers = _e[0], setLayers = _e[1];
    var depth = {
        x: helpers_1.convertUnits(perspective.x),
        y: helpers_1.convertUnits(perspective.y)
    };
    react_1.useEffect(function () {
        var generateLayers = function () {
            var levels = helpers_1.countLevels({
                x: helpers_1.convertUnits(perspective.x),
                y: helpers_1.convertUnits(perspective.y),
                color: color,
                shadow: shadow,
                colorify: colorify
            });
            setLayers(levels);
        };
        generateLayers();
        window.addEventListener('resize', generateLayers);
        window.removeEventListener('resize', generateLayers);
    }, [color, colorify, perspective.x, perspective.y, shadow]);
    return (react_1.default.createElement(Text_1.Base, __assign({}, props, { depth: depth, layers: layers }), children));
};


/***/ }),

/***/ "./src/helpers/convertUnits.ts":
/*!*************************************!*\
  !*** ./src/helpers/convertUnits.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var to_px_1 = __importDefault(__webpack_require__(/*! to-px */ "to-px"));
function convertUnits(unit) {
    return Math.round(typeof unit === 'string' ? to_px_1.default(unit) : unit);
}
exports.convertUnits = convertUnits;


/***/ }),

/***/ "./src/helpers/countLevels.ts":
/*!************************************!*\
  !*** ./src/helpers/countLevels.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var setColors_1 = __webpack_require__(/*! ./setColors */ "./src/helpers/setColors.ts");
exports.countLevels = function (_a) {
    var x = _a.x, y = _a.y, color = _a.color, shadow = _a.shadow, colorify = _a.colorify;
    var abs = function (value) { return Math.abs(value); };
    var _b = abs(x) > abs(y) ? [x, y] : [y, x], master = _b[0], slave = _b[1];
    var slaveDifference = abs(slave) / abs(master);
    var depth = [];
    var slaveDepth = 0;
    for (var masterDepth = 1; masterDepth <= abs(master); masterDepth++) {
        slaveDepth += slaveDifference;
        if (colorify)
            color = setColors_1.setColors(color, abs(master));
        var _c = abs(x) > abs(y) ? [masterDepth, slaveDepth] : [slaveDepth, masterDepth], horizontal = _c[0], vertical = _c[1];
        depth.push((x > 0 ? horizontal : -horizontal) + "px " + (y > 0 ? vertical : -vertical) + "px 0 " + color);
    }
    if (shadow)
        depth.push(shadow);
    return depth.join(',');
};


/***/ }),

/***/ "./src/helpers/index.ts":
/*!******************************!*\
  !*** ./src/helpers/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var convertUnits_1 = __webpack_require__(/*! ./convertUnits */ "./src/helpers/convertUnits.ts");
exports.convertUnits = convertUnits_1.convertUnits;
var countLevels_1 = __webpack_require__(/*! ./countLevels */ "./src/helpers/countLevels.ts");
exports.countLevels = countLevels_1.countLevels;


/***/ }),

/***/ "./src/helpers/setColors.ts":
/*!**********************************!*\
  !*** ./src/helpers/setColors.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __importDefault(__webpack_require__(/*! color */ "color"));
exports.setColors = function (item, levels) {
    var color = color_1.default(item);
    return color[color.isDark() ? 'lighten' : 'darken'](1 / (levels * 5)).toString();
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Element_1 = __webpack_require__(/*! ./components/Element */ "./src/components/Element.tsx");
exports.Element = Element_1.Element;
var Text_1 = __webpack_require__(/*! ./components/Text */ "./src/components/Text.tsx");
exports.Text = Text_1.Text;


/***/ }),

/***/ "color":
/*!************************!*\
  !*** external "color" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("color");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "to-px":
/*!************************!*\
  !*** external "to-px" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("to-px");

/***/ })

/******/ });
//# sourceMappingURL=monument-ui.js.map