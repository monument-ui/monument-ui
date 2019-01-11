(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("styled-components"));
	else if(typeof define === 'function' && define.amd)
		define("MonumentUI", ["react", "styled-components"], factory);
	else if(typeof exports === 'object')
		exports["MonumentUI"] = factory(require("react"), require("styled-components"));
	else
		root["MonumentUI"] = factory(root["react"], root["styled-components"]);
})(global, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_styled_components__) {
return /******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
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
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__("./src/index.js");
/******/ 	};
/******/ 	// initialize runtime
/******/ 	runtime(__webpack_require__);
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/*! runtime requirements: module */
/***/ (function(module) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/*! runtime requirements: __webpack_require__, module */
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          )

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/*! runtime requirements: __webpack_require__, module */
/***/ (function(module, __unusedexports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/*! runtime requirements: module, __webpack_require__ */
/***/ (function(module, __unusedexports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/*! runtime requirements: module */
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./src/Alert/index.js":
/*!****************************!*\
  !*** ./src/Alert/index.js ***!
  \****************************/
/*! exports provided: default */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, __webpack_require__.n, __webpack_require__.d */
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px 12px;\n  border-radius: 4px;\n  min-height: 40px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n\n  ", "\n\n  span {\n    font-weight: 500;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var deepPurple = _helpers__WEBPACK_IMPORTED_MODULE_2__["colors"].deepPurple,
    blueGrey = _helpers__WEBPACK_IMPORTED_MODULE_2__["colors"].blueGrey,
    blue = _helpers__WEBPACK_IMPORTED_MODULE_2__["colors"].blue,
    green = _helpers__WEBPACK_IMPORTED_MODULE_2__["colors"].green,
    orange = _helpers__WEBPACK_IMPORTED_MODULE_2__["colors"].orange,
    red = _helpers__WEBPACK_IMPORTED_MODULE_2__["colors"].red,
    white = _helpers__WEBPACK_IMPORTED_MODULE_2__["colors"].white,
    black = _helpers__WEBPACK_IMPORTED_MODULE_2__["colors"].black;
var Base = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject(), function (_ref) {
  var type = _ref.type;
  return type === 'primary' && "background-color: ".concat(deepPurple.light[1]) || type === 'secondary' && "background-color: ".concat(blueGrey.light[2]) || type === 'info' && "background-color: ".concat(blue.default) || type === 'success' && "background-color: ".concat(green.default) || type === 'warning' && "background-color: ".concat(orange.dark[0]) || type === 'error' && "background-color: ".concat(red.dark[1]) || type === 'light' && "background-color: ".concat(white) || type === 'dark' && "background-color: ".concat(black);
});

var Alert = function Alert(_ref2) {
  var type = _ref2.type,
      title = _ref2.title,
      info = _ref2.info,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["type", "title", "info", "children"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Base, _extends({
    type: type
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, title), ": ", info), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, children));
};

Alert.defaultProps = {
  type: 'info'
};
/* harmony default export */ __webpack_exports__["default"] = (Alert);

/***/ }),

/***/ "./src/Button/index.js":
/*!*****************************!*\
  !*** ./src/Button/index.js ***!
  \*****************************/
/*! exports provided: default */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, __webpack_require__.n, __webpack_require__.d */
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 500;\n  cursor: pointer;\n  border-radius: ", ";\n  border: 0;\n  display: inline-block;\n\n  ", "\n\n  :not(:disabled) {\n    ", "\n  }\n\n  :disabled {\n    opacity: 0.6;\n    cursor: not-allowed;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button(_templateObject(), function (_ref) {
  var circle = _ref.circle;
  return circle ? '999px' : '4px';
}, function (_ref2) {
  var size = _ref2.size;
  return size === 'xl' && "\n      font-size: 28px;\n      padding: 12px 30px;" || size === 'lg' && "\n      font-size: 24px;\n      padding: 10px 26px;" || size === 'md' && "\n      font-size: 20px;\n      padding: 8px 20px;" || size === 'sm' && "\n      font-size: 16px;\n      padding: 6px 14px;" || size === 'xs' && "\n      font-size: 14px;\n      padding: 4px 10px;";
}, function (_ref3) {
  var monument = _ref3.monument,
      perspective = _ref3.perspective;
  return monument ? Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../helpers/monument */ "./src/helpers/monument.js")).then(function (style) {
    return style(perspective);
  }) : '';
});
Button.propTypes = {
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['xl', 'lg', 'md', 'sm', 'xs']),
  circle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  monument: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  perspective: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    x: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    y: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  })
};
Button.defaultProps = {
  size: 'md',
  circle: false,
  monument: false,
  perspective: {
    x: 5,
    y: 5
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/Card/Card.js":
/*!**************************!*\
  !*** ./src/Card/Card.js ***!
  \**************************/
/*! exports provided: default */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, __webpack_require__.n, __webpack_require__.d */
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  overflow: hidden;\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Card = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.article(_templateObject(), function (_ref) {
  var monument = _ref.monument;
  return monument ? Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../helpers/monument */ "./src/helpers/monument.js")).then(function (style) {
    return style;
  }) : '';
});
Card.propTypes = {
  monument: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Card.defaultProps = {
  monument: false
};
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./src/Card/Content.js":
/*!*****************************!*\
  !*** ./src/Card/Content.js ***!
  \*****************************/
/*! exports provided: default */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, __webpack_require__.n, __webpack_require__.d */
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 0px 18px 8px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./src/Card/Footer.js":
/*!****************************!*\
  !*** ./src/Card/Footer.js ***!
  \****************************/
/*! exports provided: default */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, __webpack_require__.n, __webpack_require__.d */
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-top: 1px solid #ddd;\n  padding: 14px 16px;\n  overflow-x: auto;\n  white-space: nowrap;\n\n  > span {\n    line-height: 2;\n    padding: 4px 7px;\n    margin: 0 1px;\n    border-radius: 4px;\n    background: rgb(66, 165, 245);\n    color: #fff;\n\n    :last-child {\n      margin-right: 16px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Footer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/Card/Image.js":
/*!***************************!*\
  !*** ./src/Card/Image.js ***!
  \***************************/
/*! exports provided: default */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, __webpack_require__.n, __webpack_require__.d */
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Base = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.figure(_templateObject());

var Image = function Image(_ref) {
  var style = _ref.style,
      src = _ref.src,
      alt = _ref.alt,
      props = _objectWithoutProperties(_ref, ["style", "src", "alt"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Base, {
    style: style
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", _extends({
    src: src,
    alt: alt
  }, props)));
};

Image.defaultProps = {
  alt: ''
};
/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/Card/Title.js":
/*!***************************!*\
  !*** ./src/Card/Title.js ***!
  \***************************/
/*! exports provided: default */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, __webpack_require__.n, __webpack_require__.d */
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 500;\n  padding: 3px 16px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./src/Card/index.js":
/*!***************************!*\
  !*** ./src/Card/index.js ***!
  \***************************/
/*! exports provided: default */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__ */
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ "./src/Card/Card.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Image */ "./src/Card/Image.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Title */ "./src/Card/Title.js");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Content */ "./src/Card/Content.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./src/Card/Footer.js");





_Card__WEBPACK_IMPORTED_MODULE_0__["default"].Image = _Image__WEBPACK_IMPORTED_MODULE_1__["default"];
_Card__WEBPACK_IMPORTED_MODULE_0__["default"].Title = _Title__WEBPACK_IMPORTED_MODULE_2__["default"];
_Card__WEBPACK_IMPORTED_MODULE_0__["default"].Content = _Content__WEBPACK_IMPORTED_MODULE_3__["default"];
_Card__WEBPACK_IMPORTED_MODULE_0__["default"].Footer = _Footer__WEBPACK_IMPORTED_MODULE_4__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_Card__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/Col/index.js":
/*!**************************!*\
  !*** ./src/Col/index.js ***!
  \**************************/
/*! exports provided: default */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, __webpack_require__.n, __webpack_require__.d */
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n\n  @media screen and (max-width: 768px) {\n    grid-column: span ", ";\n    grid-column-start: ", ";\n  }\n\n  @media screen and (min-width: 768px) and (max-width: 992px) {\n    grid-column: span ", ";\n    grid-column-start: ", ";\n  }\n\n  @media screen and (min-width: 992px) and (max-width: 1200px) {\n    grid-column: span ", ";\n    grid-column-start: ", ";\n  }\n\n  @media screen and (min-width: 1200px) {\n    grid-column: span ", ";\n    grid-column-start: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Col = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject(), function (_ref) {
  var sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl;
  return sm || md || lg || xl || 12;
}, function (_ref2) {
  var smOffset = _ref2.smOffset;
  return smOffset || 0;
}, function (_ref3) {
  var sm = _ref3.sm,
      md = _ref3.md,
      lg = _ref3.lg,
      xl = _ref3.xl;
  return md || sm || lg || xl || 12;
}, function (_ref4) {
  var mdOffset = _ref4.mdOffset;
  return mdOffset || 0;
}, function (_ref5) {
  var sm = _ref5.sm,
      md = _ref5.md,
      lg = _ref5.lg,
      xl = _ref5.xl;
  return lg || md || xl || sm || 12;
}, function (_ref6) {
  var lgOffset = _ref6.lgOffset;
  return lgOffset || 0;
}, function (_ref7) {
  var sm = _ref7.sm,
      md = _ref7.md,
      lg = _ref7.lg,
      xl = _ref7.xl;
  return xl || lg || md || sm || 12;
}, function (_ref8) {
  var xlOffset = _ref8.xlOffset;
  return xlOffset || 0;
});
Col.propTypes = {
  sm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  md: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  lg: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  xl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  smOffset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  mdOffset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  lgOffset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  xlOffset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (Col);

/***/ }),

/***/ "./src/Container/index.js":
/*!********************************!*\
  !*** ./src/Container/index.js ***!
  \********************************/
/*! exports provided: default */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, __webpack_require__.n, __webpack_require__.d */
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 auto;\n  max-width: ", "em;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main(_templateObject(), function (_ref) {
  var maxWidth = _ref.maxWidth,
      fluid = _ref.fluid;
  return fluid ? 100 : maxWidth;
});
Container.propTypes = {
  maxWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  fluid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Container.defaultProps = {
  maxWidth: 72,
  fluid: false
};
/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./src/Dropdown/index.js":
/*!*******************************!*\
  !*** ./src/Dropdown/index.js ***!
  \*******************************/
/*! exports provided: default */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, __webpack_require__.n, __webpack_require__.d */
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Dropdown = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.dialog(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ }),

/***/ "./src/Footer/index.js":
/*!*****************************!*\
  !*** ./src/Footer/index.js ***!
  \*****************************/
/*! exports provided: default */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, __webpack_require__.n, __webpack_require__.d */
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Footer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.footer(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/Inputs/CheckBox.js":
/*!********************************!*\
  !*** ./src/Inputs/CheckBox.js ***!
  \********************************/
/*! exports provided: default */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, __webpack_require__.n, __webpack_require__.d */
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var types = ['box', 'switch'];

var CheckBox = function CheckBox(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$monument = _ref.monument,
      monument = _ref$monument === void 0 ? false : _ref$monument,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$checked = _ref.checked,
      checked = _ref$checked === void 0 ? false : _ref$checked,
      onChange = _ref.onChange,
      name = _ref.name,
      type = _ref.type,
      value = _ref.value;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    className: "input input-checkbox ".concat(className, " ").concat(monument ? 'monument' : '', " ").concat(types.includes(type) ? type : 'box'),
    style: style,
    checked: checked,
    onChange: onChange,
    name: name,
    value: value,
    onClick: !checked
  });
};

/* harmony default export */ __webpack_exports__["default"] = (CheckBox);

/***/ }),

/***/ "./src/Inputs/Input.js":
/*!*****************************!*\
  !*** ./src/Inputs/Input.js ***!
  \*****************************/
/*! exports provided: default */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, __webpack_require__.n, __webpack_require__.d */
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 20px;\n  font-weight: 500;\n  border: 0;\n  border-radius: 4px;\n  padding: 8px 14px;\n  display: block;\n  -webkit-appearance: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var input = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (input);

/***/ }),

/***/ "./src/Inputs/Number.js":
/*!******************************!*\
  !*** ./src/Inputs/Number.js ***!
  \******************************/
/*! exports provided: default */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, __webpack_require__.n, __webpack_require__.d */
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button */ "./src/Button/index.js");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Text */ "./src/Inputs/Text.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  -moz-appearance: textfield;\n\n  ::-webkit-inner-spin-button,\n  ::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Base = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var Input = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Text__WEBPACK_IMPORTED_MODULE_3__["default"])(_templateObject2());

var Number = function Number(_ref) {
  var monument = _ref.monument,
      props = _objectWithoutProperties(_ref, ["monument"]);

  var ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Base, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      padding: 0
    },
    monument: monument,
    onClick: function onClick() {
      return ref.current.stepDown();
    },
    value: "-"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, _extends({
    type: "number",
    ref: ref
  }, props)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      padding: 0
    },
    monument: monument,
    onClick: function onClick() {
      return ref.current.stepUp();
    },
    value: "+"
  }));
};

Number.defaultProps = {
  monument: false
};
/* harmony default export */ __webpack_exports__["default"] = (Number);

/***/ }),

/***/ "./src/Inputs/Radio.js":
/*!*****************************!*\
  !*** ./src/Inputs/Radio.js ***!
  \*****************************/
/*! exports provided: default */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, __webpack_require__.n, __webpack_require__.d */
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Radio = function Radio(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$monument = _ref.monument,
      monument = _ref$monument === void 0 ? false : _ref$monument,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$checked = _ref.checked,
      checked = _ref$checked === void 0 ? false : _ref$checked,
      onChange = _ref.onChange,
      name = _ref.name,
      value = _ref.value;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "radio",
    className: "input input-radio ".concat(className, " ").concat(monument ? 'monument' : ''),
    style: style,
    checked: checked,
    onChange: onChange,
    name: name,
    value: value,
    onClick: !checked
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Radio);

/***/ }),

/***/ "./src/Inputs/Select.js":
/*!******************************!*\
  !*** ./src/Inputs/Select.js ***!
  \******************************/
/*! exports provided: default */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, __webpack_require__.n, __webpack_require__.d */
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Select = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.select(_templateObject(), function (_ref) {
  var monument = _ref.monument;
  return monument ? Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../helpers/monument */ "./src/helpers/monument.js")).then(function (style) {
    return style;
  }) : '';
});
Select.propTypes = {
  monument: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Select);

/***/ }),

/***/ "./src/Inputs/Text.js":
/*!****************************!*\
  !*** ./src/Inputs/Text.js ***!
  \****************************/
/*! exports provided: default */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, __webpack_require__.n, __webpack_require__.d */
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input */ "./src/Inputs/Input.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input(_templateObject(), _Input__WEBPACK_IMPORTED_MODULE_2__["default"], function (_ref) {
  var monument = _ref.monument;
  return monument ? Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../helpers/monument */ "./src/helpers/monument.js")).then(function (style) {
    return style;
  }) : '';
});
Text.propTypes = {
  monument: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Text.defaultProps = {
  monument: false
};
/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./src/Inputs/Textarea.js":
/*!********************************!*\
  !*** ./src/Inputs/Textarea.js ***!
  \********************************/
/*! exports provided: default */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, __webpack_require__.n, __webpack_require__.d */
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input */ "./src/Inputs/Input.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  min-height: 140px;\n\n  ", "\n\n  resize: ", ";\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Textarea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.textarea(_templateObject(), _Input__WEBPACK_IMPORTED_MODULE_2__["default"], function (_ref) {
  var resize = _ref.resize;
  return resize;
}, function (_ref2) {
  var monument = _ref2.monument,
      perspective = _ref2.perspective;
  return monument ? Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../helpers/monument */ "./src/helpers/monument.js")).then(function (style) {
    return style(perspective);
  }) : '';
});
Textarea.propTypes = {
  resize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  monument: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  perspective: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    x: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    y: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  })
};
Textarea.defaultProps = {
  resize: 'none',
  monument: false,
  perspective: {
    x: 5,
    y: 5
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Textarea);

/***/ }),

/***/ "./src/Inputs/index.js":
/*!*****************************!*\
  !*** ./src/Inputs/index.js ***!
  \*****************************/
/*! exports provided: Text, Textarea, Number, Select, Radio, CheckBox */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, __webpack_require__.d */
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _Text__WEBPACK_IMPORTED_MODULE_0__["default"]; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _Textarea__WEBPACK_IMPORTED_MODULE_1__["default"]; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Number", function() { return _Number__WEBPACK_IMPORTED_MODULE_2__["default"]; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _Select__WEBPACK_IMPORTED_MODULE_3__["default"]; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _Radio__WEBPACK_IMPORTED_MODULE_4__["default"]; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckBox", function() { return _CheckBox__WEBPACK_IMPORTED_MODULE_5__["default"]; });
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Text */ "./src/Inputs/Text.js");
/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Textarea */ "./src/Inputs/Textarea.js");
/* harmony import */ var _Number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Number */ "./src/Inputs/Number.js");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Select */ "./src/Inputs/Select.js");
/* harmony import */ var _Radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Radio */ "./src/Inputs/Radio.js");
/* harmony import */ var _CheckBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CheckBox */ "./src/Inputs/CheckBox.js");







/***/ }),

/***/ "./src/Label/index.js":
/*!****************************!*\
  !*** ./src/Label/index.js ***!
  \****************************/
/*! exports provided: default */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, __webpack_require__.n, __webpack_require__.d */
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 0.9em;\n  font-weight: 500;\n  line-height: 1.6em;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.label(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (Label);

/***/ }),

/***/ "./src/Loader/index.js":
/*!*****************************!*\
  !*** ./src/Loader/index.js ***!
  \*****************************/
/*! exports provided: default */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, __webpack_require__.n, __webpack_require__.d */
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  animation: ", " ", "ms infinite ease-in-out\n    ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  margin: 100px auto;\n\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0%,\n  100% {\n    transform: scale(0);\n  }\n\n  50% {\n    transform: scale(1);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var bounce = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject());
var Base = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2(), function (_ref) {
  var size = _ref.size;
  return size === 'xl' && "\n      width: 85px;\n      height: 85px;" || size === 'lg' && "\n      width: 70px;\n      height: 70px;" || size === 'md' && "  \n      width: 55px;\n      height: 55px;" || size === 'sm' && "\n      width: 40px;\n      height: 40px;" || size === 'xs' && "\n      width: 25px;\n      height: 25px;";
});
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3(), function (_ref2) {
  var color = _ref2.color;
  return color;
}, bounce, function (_ref3) {
  var speed = _ref3.speed;
  return speed;
}, function (_ref4) {
  var delay = _ref4.delay;
  return delay ? '700ms' : '';
});

var Loader = function Loader(_ref5) {
  var size = _ref5.size,
      color = _ref5.color,
      speed = _ref5.speed,
      props = _objectWithoutProperties(_ref5, ["size", "color", "speed"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Base, _extends({
    size: size
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Inner, {
    color: color,
    speed: speed
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Inner, {
    color: color,
    speed: speed,
    delay: true
  }));
};

Loader.defaultProps = {
  size: 'md',
  color: '',
  speed: 1400
};
/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./src/Nav/index.js":
/*!**************************!*\
  !*** ./src/Nav/index.js ***!
  \**************************/
/*! exports provided: default */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, __webpack_require__.n, __webpack_require__.d */
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  top: 0;\n  position: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Nav = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav(_templateObject(), function (_ref) {
  var type = _ref.type;
  return type === 'normal' && 'relative' || type === 'sticky' && 'sticky' || type === 'fixed' && 'fixed';
});
Nav.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['normal', 'sticky', 'fixed', 'vertical'])
};
Nav.defaultProps = {
  type: 'normal'
};
/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./src/Row/index.js":
/*!**************************!*\
  !*** ./src/Row/index.js ***!
  \**************************/
/*! exports provided: default */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, __webpack_require__.n, __webpack_require__.d */
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  grid-column-gap: 1em;\n  grid-row-gap: 1em;\n\n  justify-items: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Row = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject(), function (_ref) {
  var align = _ref.align;
  return align;
});
Row.propTypes = {
  align: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['start', 'center', 'end'])
};
Row.defaultProps = {
  align: 'start'
};
/* harmony default export */ __webpack_exports__["default"] = (Row);

/***/ }),

/***/ "./src/Table/Cell.js":
/*!***************************!*\
  !*** ./src/Table/Cell.js ***!
  \***************************/
/*! exports provided: default */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, __webpack_require__.n, __webpack_require__.d */
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Cell = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.td(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (Cell);

/***/ }),

/***/ "./src/Table/Row.js":
/*!**************************!*\
  !*** ./src/Table/Row.js ***!
  \**************************/
/*! exports provided: default */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, __webpack_require__.n, __webpack_require__.d */
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Row = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.tr(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (Row);

/***/ }),

/***/ "./src/Table/Table.js":
/*!****************************!*\
  !*** ./src/Table/Table.js ***!
  \****************************/
/*! exports provided: default */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, __webpack_require__.n, __webpack_require__.d */
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Table = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.table(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),

/***/ "./src/Table/index.js":
/*!****************************!*\
  !*** ./src/Table/index.js ***!
  \****************************/
/*! exports provided: default */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__ */
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table */ "./src/Table/Table.js");
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Row */ "./src/Table/Row.js");
/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cell */ "./src/Table/Cell.js");



_Table__WEBPACK_IMPORTED_MODULE_0__["default"].Row = _Row__WEBPACK_IMPORTED_MODULE_1__["default"];
_Table__WEBPACK_IMPORTED_MODULE_0__["default"].Cell = _Cell__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_Table__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/helpers/Reset.js":
/*!******************************!*\
  !*** ./src/helpers/Reset.js ***!
  \******************************/
/*! exports provided: default */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, __webpack_require__.n, __webpack_require__.d */
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  html {\n    box-sizing: border-box;\n    font-size: 16px;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  body,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p,\n  ol,\n  ul,\n  figure {\n    margin: 0;\n    padding: 0;\n    font-weight: normal;\n  }\n\n  ol,\n  ul {\n    list-style: none;\n  }\n  \n  img {\n    max-width: 100%;\n    height: auto;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Reset = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (Reset);

/***/ }),

/***/ "./src/helpers/colors.js":
/*!*******************************!*\
  !*** ./src/helpers/colors.js ***!
  \*******************************/
/*! exports provided: default */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__ */
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var colors = {
  red: {
    default: '#f44336',
    light: ['#ef5350', '#e57373', '#ef9a9a', '#ffcdd2', '#ffebee'],
    dark: ['#e53935', '#d32f2f', '#d32f2f', '#b71c1c']
  },
  pink: {
    default: '#ef5350',
    light: ['#ec407a', '#f06292', '#f48fb1', '#f8bbd0', '#fce4ec'],
    dark: ['#ef5350', '#ef5350', '#ef5350', '#ef5350']
  },
  purple: {
    default: '#9c27b0',
    light: ['#ab47bc', '#ba68c8', '#ce93d8', '#e1bee7', '#f3e5f5'],
    dark: ['#8e24aa', '#7b1fa2', '#6a1b9a', '#4a148c']
  },
  deepPurple: {
    default: '#673ab7',
    light: ['#7e57c2', '#9575cd', '#b39ddb', '#d1c4e9', '#ede7f6'],
    dark: ['#5e35b1', '#512da8', '#4527a0', '#311b92']
  },
  indigo: {
    default: '#3f51b5',
    light: ['#5c6bc0', '#7986cb', '#9fa8da', '#c5cae9', '#e8eaf6'],
    dark: ['#3949ab', '#303f9f', '#283593', '#1a237e']
  },
  blue: {
    default: '#2196f3',
    light: ['#42a5f5', '#64b5f6', '#90caf9', '#bbdefb', '#e3f2fd'],
    dark: ['#1e88e5', '#1976d2', '#1565c0', '#0d47a1']
  },
  lightBlue: {
    default: '#03a9f4',
    light: ['#29b6f6', '#4fc3f7', '#81d4fa', '#b3e5fc', '#e1f5fe'],
    dark: ['#039be5', '#0288d1', '#0277bd', '#01579b']
  },
  cyan: {
    default: '#00bcd4',
    light: ['#26c6da', '#4dd0e1', '#80deea', '#b2ebf2', '#e0f7fa'],
    dark: ['#00acc1', '#0097a7', '#00838f', '#006064']
  },
  teal: {
    default: '#009688',
    light: ['#26a69a', '#4db6ac', '#80cbc4', '#b2dfdb', '#e0f2f1'],
    dark: ['#00897b', '#00796b', '#00695c', '#004d40']
  },
  green: {
    default: '#4caf50',
    light: ['#66bb6a', '#81c784', '#a5d6a7', '#c8e6c9', '#e8f5e9'],
    dark: ['#43a047', '#388e3c', '#2e7d32', '#1b5e20']
  },
  lightGreen: {
    default: '#8bc34a',
    light: ['#9ccc65', '#aed581', '#c5e1a5', '#dcedc8', '#f1f8e9'],
    dark: ['#7cb342', '#689f38', '#558b2f', '#33691e']
  },
  lime: {
    default: '#cddc39',
    light: ['#d4e157', '#dce775', '#e6ee9c', '#f0f4c3', '#f9fbe7'],
    dark: ['#c0ca33', '#afb42b', '#9e9d24', '#827717']
  },
  yellow: {
    default: '#ffeb3b',
    light: ['#ffee58', '#fff176', '#fff59d', '#fff9c4', '#fffde7'],
    dark: ['#fdd835', '#fbc02d', '#f9a825', '#f57f17']
  },
  amber: {
    default: '#ffc107',
    light: ['#ffca28', '#ffd54f', '#ffe082', '#ffecb3', '#fff8e1'],
    dark: ['#ffb300', '#ffa000', '#ff8f00', '#ff6f00']
  },
  orange: {
    default: '#ff9800',
    light: ['#ffa726', '#ffb74d', '#ffcc80', '#ffe0b2', '#fff3e0'],
    dark: ['#fb8c00', '#f57c00', '#ef6c00', '#e65100']
  },
  deepOrange: {
    default: '#ff5722',
    light: ['#fbe9e7', '#ffccbc', '#ffab91', '#ff8a65', '#ff7043'],
    dark: ['#f4511e', '#e64a19', '#d84315', '#bf360c']
  },
  brown: {
    default: '#795548',
    light: ['#8d6e63', '#a1887f', '#bcaaa4', '#d7ccc8', '#efebe9'],
    dark: ['#6d4c41', '#5d4037', '#4e342e', '#3e2723']
  },
  grey: {
    default: '#9e9e9e',
    light: ['#bdbdbd', '#e0e0e0', '#eeeeee', '#f5f5f5', '#fafafa'],
    dark: ['#757575', '#616161', '#424242', '#212121']
  },
  blueGrey: {
    default: '#607d8b',
    light: ['#78909c', '#90a4ae', '#b0bec5', '#cfd8dc', '#eceff1'],
    dark: ['#546e7a', '#455a64', '#37474f', '#263238']
  },
  black: '#000',
  white: '#fff'
};
var mixes = {
  gold: [colors.amber.light[0], colors.amber.light[4]],
  midnight: [colors.deepPurple.dark[2], colors.indigo.dark[0]],
  fire: [colors.red.dark[3], colors.deepOrange.dark[1]],
  sand: [colors.orange.light[0], colors.yellow.default],
  waves: [colors.lightBlue.default, colors.cyan.light[1]],
  jelly: [colors.pink.default, colors.purple.light[0]],
  wood: [colors.brown.dark[0], colors.deepOrange.light[1]],
  grass: [colors.green.light[0], colors.lightGreen.dark[1]],
  plasma: [colors.purple.dark[3], colors.purple.dark[0]],
  ruby: [colors.red.dark[3], colors.red.dark[0]]
};
colors.mixes = mixes;
/* harmony default export */ __webpack_exports__["default"] = (colors);

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/*! exports provided: Reset, colors, monument */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, __webpack_require__.d */
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reset", function() { return _Reset__WEBPACK_IMPORTED_MODULE_0__["default"]; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return _colors__WEBPACK_IMPORTED_MODULE_1__["default"]; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "monument", function() { return _monument__WEBPACK_IMPORTED_MODULE_2__["default"]; });
/* harmony import */ var _Reset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reset */ "./src/helpers/Reset.js");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colors */ "./src/helpers/colors.js");
/* harmony import */ var _monument__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./monument */ "./src/helpers/monument.js");




/***/ }),

/***/ "./src/helpers/monument.js":
/*!*********************************!*\
  !*** ./src/helpers/monument.js ***!
  \*********************************/
/*! exports provided: default */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, __webpack_require__.n, __webpack_require__.d */
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  :hover {\n  }\n\n  :focus {\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var monument = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject(), function (_ref) {
  var perspective = _ref.perspective;
  return perspective.x + perspective.y;
});
/* harmony default export */ __webpack_exports__["default"] = (monument);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Reset, colors, monument, Alert, Button, Card, Col, Container, Dropdown, Footer, Text, Textarea, Number, CheckBox, Select, Radio, Nav, Label, Loader, Row, Table */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, __webpack_require__.d */
/***/ (function(__unusedmodule, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reset", function() { return _helpers__WEBPACK_IMPORTED_MODULE_0__["Reset"]; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return _helpers__WEBPACK_IMPORTED_MODULE_0__["colors"]; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "monument", function() { return _helpers__WEBPACK_IMPORTED_MODULE_0__["monument"]; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return _Alert__WEBPACK_IMPORTED_MODULE_1__["default"]; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_2__["default"]; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _Card__WEBPACK_IMPORTED_MODULE_3__["default"]; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return _Col__WEBPACK_IMPORTED_MODULE_4__["default"]; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _Container__WEBPACK_IMPORTED_MODULE_5__["default"]; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return _Dropdown__WEBPACK_IMPORTED_MODULE_6__["default"]; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _Footer__WEBPACK_IMPORTED_MODULE_7__["default"]; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _Inputs__WEBPACK_IMPORTED_MODULE_8__["Text"]; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _Inputs__WEBPACK_IMPORTED_MODULE_8__["Textarea"]; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Number", function() { return _Inputs__WEBPACK_IMPORTED_MODULE_8__["Number"]; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckBox", function() { return _Inputs__WEBPACK_IMPORTED_MODULE_8__["CheckBox"]; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _Inputs__WEBPACK_IMPORTED_MODULE_8__["Select"]; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _Inputs__WEBPACK_IMPORTED_MODULE_8__["Radio"]; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return _Nav__WEBPACK_IMPORTED_MODULE_9__["default"]; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _Label__WEBPACK_IMPORTED_MODULE_10__["default"]; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return _Loader__WEBPACK_IMPORTED_MODULE_11__["default"]; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return _Row__WEBPACK_IMPORTED_MODULE_12__["default"]; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return _Table__WEBPACK_IMPORTED_MODULE_13__["default"]; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers/index.js");
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alert */ "./src/Alert/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./src/Button/index.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card */ "./src/Card/index.js");
/* harmony import */ var _Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Col */ "./src/Col/index.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Container */ "./src/Container/index.js");
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Dropdown */ "./src/Dropdown/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Footer */ "./src/Footer/index.js");
/* harmony import */ var _Inputs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Inputs */ "./src/Inputs/index.js");
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Nav */ "./src/Nav/index.js");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Label */ "./src/Label/index.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Loader */ "./src/Loader/index.js");
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Row */ "./src/Row/index.js");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Table */ "./src/Table/index.js");















/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/*! runtime requirements: module */
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/*! runtime requirements: module */
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE_styled_components__;

/***/ })

/******/ },
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getter */
/******/ 	!function() {
/******/ 		// define getter function for harmony exports
/******/ 		var hasOwnProperty = Object.prototype.hasOwnProperty;
/******/ 		__webpack_require__.d = function(exports, name, getter) {
/******/ 			if(!hasOwnProperty.call(exports, name)) {
/******/ 				Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function getDefault() { return module['default']; } :
/******/ 				function getModuleExports() { return module; };
/******/ 			__webpack_require__.d(getter, 'a', getter);
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ }
);
});
//# sourceMappingURL=monument-ui.js.map