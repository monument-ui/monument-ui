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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bases/Element.tsx":
/*!*******************************!*\
  !*** ./src/bases/Element.tsx ***!
  \*******************************/
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
var onClick = "\n  transform: translate(0, 0);\n  box-shadow: 0 0 0 0 #0000;\n";
exports.Base = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var depth = _a.depth, layers = _a.layers, animate = _a.animate, clickable = _a.clickable;
    return "\n    will-change: transform;\n    box-shadow: " + layers + ";\n    transform: translate(" + -depth.x + "px, " + -depth.y + "px);\n    \n    " + (animate ? "transition: transform 300ms ease, box-shadow 300ms ease;" : "") + "\n    \n    " + (clickable
        ? "\n    &:focus,\n    &:active {\n      " + onClick + "\n    }\n\n    @media not all and (hover: hover) {\n      &:hover {\n        " + onClick + "\n      }\n    }"
        : "") + "\n ";
});
var templateObject_1;


/***/ }),

/***/ "./src/bases/Text.tsx":
/*!****************************!*\
  !*** ./src/bases/Text.tsx ***!
  \****************************/
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
    var layers = _a.layers, depth = _a.depth;
    return "\n    text-shadow: " + layers + ";\n    margin-left: " + -depth.x + "px;\n    margin-top: " + -depth.y + "px;\n  ";
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
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
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
var Element_1 = __webpack_require__(/*! ../bases/Element */ "./src/bases/Element.tsx");
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers/index.tsx");
exports.Element = function (_a) {
    var _b = _a.perspective, perspective = _b === void 0 ? { x: 5, y: 5 } : _b, _c = _a.color, color = _c === void 0 ? '#444' : _c, _d = _a.shadow, shadow = _d === void 0 ? '' : _d, _e = _a.colorify, colorify = _e === void 0 ? false : _e, _f = _a.hoverable, hoverable = _f === void 0 ? false : _f, _g = _a.clickable, clickable = _g === void 0 ? false : _g, props = __rest(_a, ["perspective", "color", "shadow", "colorify", "hoverable", "clickable"]);
    var el = react_1.useRef(null);
    var _h = react_1.useState(''), layers = _h[0], setLayers = _h[1];
    var _j = react_1.useState(false), animate = _j[0], setAnimate = _j[1];
    var _k = react_1.useState(false), clickEvent = _k[0], setClickEvent = _k[1];
    var _l = react_1.useState(null), mode = _l[0], setMode = _l[1];
    var _m = react_1.useState({
        x: helpers_1.convertUnits(perspective.x),
        y: helpers_1.convertUnits(perspective.y)
    }), depth = _m[0], setDepth = _m[1];
    react_1.useEffect(function () {
        var generateLayers = function () {
            var x = helpers_1.convertUnits(perspective.x);
            var y = helpers_1.convertUnits(perspective.y);
            var extraX;
            var extraY;
            if (mode === 'mouseenter' && hoverable) {
                extraX = x > 0 ? x / 2 : x < 0 ? -x / 2 : 0;
                extraY = y > 0 ? y / 2 : y < 0 ? -y / 2 : 0;
            }
            else {
                extraX = 0;
                extraY = 0;
            }
            if (mode)
                setAnimate(true);
            var max = {
                x: el.current.offsetWidth / 10,
                y: el.current.offsetHeight / 10
            };
            var axis = helpers_1.setMax(max, { x: x, y: y });
            axis.x = Math.round(axis.x > 0 ? axis.x + extraX : axis.x < 0 ? axis.x - extraX : axis.x);
            axis.y = Math.round(axis.y > 0 ? axis.y + extraY : axis.y < 0 ? axis.y - extraY : axis.y);
            setLayers(helpers_1.countLevels({
                x: axis.x,
                y: axis.y,
                color: color,
                shadow: shadow,
                colorify: colorify
            }));
            setDepth({ x: axis.x, y: axis.y });
            setClickEvent(clickable);
        };
        generateLayers();
        window.addEventListener('resize', function () { return generateLayers(); });
        window.removeEventListener('resize', function () { return generateLayers(); });
    }, [
        clickable,
        color,
        colorify,
        hoverable,
        mode,
        perspective.x,
        perspective.y,
        shadow
    ]);
    return (react_1.default.createElement(Element_1.Base, __assign({ ref: el, onMouseEnter: function () { return setMode('mouseenter'); }, onMouseLeave: function () { return setMode(null); }, layers: layers, depth: depth, animate: animate, clickable: clickEvent }, props)));
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
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
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
var Text_1 = __webpack_require__(/*! ../bases/Text */ "./src/bases/Text.tsx");
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers/index.tsx");
exports.Text = function (_a) {
    var _b = _a.color, color = _b === void 0 ? '#ccc' : _b, _c = _a.colorify, colorify = _c === void 0 ? false : _c, _d = _a.perspective, perspective = _d === void 0 ? { x: 5, y: 5 } : _d, _e = _a.shadow, shadow = _e === void 0 ? '' : _e, props = __rest(_a, ["color", "colorify", "perspective", "shadow"]);
    var _f = react_1.useState(''), layers = _f[0], setLayers = _f[1];
    var depth = {
        x: helpers_1.convertUnits(perspective.x),
        y: helpers_1.convertUnits(perspective.y)
    };
    react_1.useEffect(function () {
        var generateLayers = function () {
            setLayers(helpers_1.countLevels({
                x: helpers_1.convertUnits(perspective.x),
                y: helpers_1.convertUnits(perspective.y),
                color: color,
                shadow: shadow,
                colorify: colorify
            }));
        };
        generateLayers();
        window.addEventListener('resize', function () { return generateLayers(); });
        window.removeEventListener('resize', function () { return generateLayers(); });
    }, [color, colorify, perspective.x, perspective.y, shadow]);
    return react_1.default.createElement(Text_1.Base, __assign({ layers: layers, depth: depth }, props));
};


/***/ }),

/***/ "./src/helpers/convertUnits.tsx":
/*!**************************************!*\
  !*** ./src/helpers/convertUnits.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var to_px_1 = __importDefault(__webpack_require__(/*! to-px */ "to-px"));
function convertUnits(unit) {
    return typeof unit === 'string' ? to_px_1.default(unit) : unit;
}
exports.convertUnits = convertUnits;


/***/ }),

/***/ "./src/helpers/countLevels.tsx":
/*!*************************************!*\
  !*** ./src/helpers/countLevels.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var setColors_1 = __webpack_require__(/*! ./setColors */ "./src/helpers/setColors.tsx");
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

/***/ "./src/helpers/index.tsx":
/*!*******************************!*\
  !*** ./src/helpers/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var convertUnits_1 = __webpack_require__(/*! ./convertUnits */ "./src/helpers/convertUnits.tsx");
exports.convertUnits = convertUnits_1.convertUnits;
var countLevels_1 = __webpack_require__(/*! ./countLevels */ "./src/helpers/countLevels.tsx");
exports.countLevels = countLevels_1.countLevels;
var setMax_1 = __webpack_require__(/*! ./setMax */ "./src/helpers/setMax.tsx");
exports.setMax = setMax_1.setMax;


/***/ }),

/***/ "./src/helpers/setColors.tsx":
/*!***********************************!*\
  !*** ./src/helpers/setColors.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __importDefault(__webpack_require__(/*! color */ "color"));
exports.setColors = function (color, levels) {
    return color_1.default(color).isDark()
        ? color_1.default(color)
            .lighten(1 / (levels * 5))
            .toString()
        : color_1.default(color)
            .darken(1 / (levels * 5))
            .toString();
};


/***/ }),

/***/ "./src/helpers/setMax.tsx":
/*!********************************!*\
  !*** ./src/helpers/setMax.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function setMax(max, perspective) {
    // if (perspective.x > max.x) perspective.x = max.x;
    // if (perspective.y > max.y) perspective.y = max.y;
    return perspective;
}
exports.setMax = setMax;


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
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