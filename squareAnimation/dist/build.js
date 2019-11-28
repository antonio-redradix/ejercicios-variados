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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/js/main.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);
//import "@babel/polyfill"


Object(_main__WEBPACK_IMPORTED_MODULE_0__["main"])();

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! exports provided: main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function main() {
  function ejES6Modules1() {
    console.log(a + ", " + b + ", " + c);
  }

  function ejES6Modules2() {
    console.log(numbersAndLetters.numbers + ", " + numbersAndLetters.letters);
  }

  function ejSideMenu() {
    var menuOptions;
    var menu = document.querySelector('#sideMenu01-options');
    menuOptions = _toConsumableArray(menu.children);

    for (var i = 0; i < menuOptions.length; i++) {
      menuOptions[i].onclick = clickCallback;
    }

    function clickCallback(event) {
      for (var _i = 0; _i < menuOptions.length; _i++) {
        menuOptions[_i].classList.remove("sideMenu--option__selected");
      }

      this.classList.add("sideMenu--option__selected");
    }
  }

  ejSideMenu();

  function ejTemplateString() {
    function getNode(name) {
      var str = "<".concat(name, "></").concat(name, ">");
      return str;
    }

    var tagName = 'div';
    console.log(getNode(tagName));
  }

  function ejTemplateString2() {
    var parent = document.body;
    var timer = document.createElement("div");
    parent.appendChild(timer);
    timer.style.color = "white";
    timer.style.fontFamily = "Helvetica";
    timer.style.fontSize = "32px";

    function showTime() {
      console.clear();
      var date = new Date();
      var str = "".concat(date.getHours(), ":").concat(date.getMinutes(), ":").concat(date.getSeconds());
      console.log(str);
      timer.innerHTML = str;
    }

    setInterval(showTime, 1000);
  }

  function ejTemplateString3() {
    function listElements(arr) {
      var lastEl = arr.pop();
      var str = "".concat(arr, " y ").concat(lastEl);
      return str;
    }

    var myArr = [1, 2, 3, 4];
    console.log(listElements(myArr));
  }

  function ejDestructuring() {
    var _uno$dos = {
      uno: 1,
      dos: 2
    },
        uno = _uno$dos.uno,
        dos = _uno$dos.dos;
    console.log(uno);
    console.log(dos);
  }

  function ejDestructuring2() {
    var a = 1;
    var b = 2;
    var _ref = [b, a];
    a = _ref[0];
    b = _ref[1];
    console.log(a, b);
  }

  function ejDestructuring3() {
    var _uno$lista$cuatro$x = {
      uno: 1,
      lista: [2, 3],
      cuatro: 4,
      x: {
        cinco: 5
      }
    },
        a = _uno$lista$cuatro$x.uno,
        _uno$lista$cuatro$x$l = _slicedToArray(_uno$lista$cuatro$x.lista, 2),
        b = _uno$lista$cuatro$x$l[0],
        c = _uno$lista$cuatro$x$l[1],
        d = _uno$lista$cuatro$x.cuatro,
        e = _uno$lista$cuatro$x.x.cinco;

    console.log(a, b, c, d, e);
  }

  function ejDestructuring4() {
    var minNumber = function minNumber() {
      return Math.min.apply(Math, arguments);
    };

    console.log(minNumber(3, 6, 4, 0, 7));
  }

  function ejClosure() {
    function func(num1) {
      return function (num2) {
        return num1 + num2;
      };
    }

    var suma = func(2);
    console.log(suma(3));
  }

  function ejMap() {
    var array1 = [8, 12, 20];
    var newArray1 = array1.map(function (x) {
      return x / 2;
    });
    var array2 = [1, 7, 50];
    var newArray2 = array2.map(function (x) {
      return x.toString();
    });
    var array3 = [-2, 5, 15, -7, -8];
    var newArray3 = array3.map(function (x) {
      return x >= 0 ? "+" : "-";
    });
    var array4 = ["lorem ipsum dolor", "hello world"];
    var newArray4 = array4.map(function (x) {
      var matches = x.match(/\b(\w)/g);
      return matches.join('');
    });
    var array5 = [[1, 2], [34, 20], [11, 11]];
    var newArray5 = array5.map(function (x) {
      return x.reduce(function (acc, x) {
        return acc + x;
      }, 0);
    });
    var array6 = [{
      name: "Alberto"
    }, {
      name: "Fran"
    }];
    var newArray6 = array6.map(function (x) {
      return x["name"];
    });
  }

  function ejFilter() {
    var array1 = [1, 5, 2, 10, 11, 23, 3, 6];
    var newArray1 = array1.filter(function (x) {
      return x % 2 === 0;
    });
    var array2 = [{
      a: 1,
      b: "hola",
      important: true
    }, {
      a: [1, 2],
      b: {
        c: 2
      }
    }, {
      important: true,
      b: {
        c: 2
      }
    }];
    var newArray2 = array2.filter(function (x) {
      return x["important"] === true;
    });
    console.log(newArray2);
  }

  function ejReduce() {
    var array1 = [100, 20, 6];
    var newArray1 = array1.reduce(function (acc, x) {
      return acc - x;
    }, 0);
    var array2 = ["sum", "ar", "lo"];
    var newArray2 = array2.reduce(function (acc, x) {
      return acc + x;
    }, "");
    var array4 = [2, 4, 18, 24, 7, 11];
    var newArray4 = array4.reduce(function (acc, x) {
      return x < acc ? acc = x : acc = acc;
    }, Infinity);
    console.log(newArray4);
  }

  function ejCreateMapFunction() {
    function myMap(arr, func) {
      var newArr = [];

      for (var i = 0; i < arr.length; i++) {
        func(arr[i]);
      }

      return newArr;
    }

    var arr = [1, 2, 5];
    console.log(myMap(arr, function (x) {
      x + 1;
    }));
  }

  function ejPromises1() {
    function throwOneCoin() {
      var promise = new Promise(function (resolve, reject) {
        console.log('Moneda Lanzada');
        setTimeout(function () {
          var coin = Math.random();
          return coin > 0.5 ? resolve('Cara') : reject('Cruz');
        }, 500);
      });
      return promise;
    }

    var round = throwOneCoin();
    round.then(function (result) {
      return console.log(result);
    });
    round["catch"](function (error) {
      return console.log(error);
    });
  }

  ejPromises1();

  function ejSumAllObjectNums() {
    function sumNums(obj) {
      var aux = 0;

      for (var propt in obj) {
        if (_typeof(obj[propt]) === 'object') {
          aux += sumNums(obj[propt]);
        } else if (typeof obj[propt] === 'number') {
          aux += obj[propt];
        }
      }

      return aux;
    }

    var myObject = {
      a: 1,
      b: {
        c: 2,
        d: 5,
        e: {
          f: 9,
          g: 6
        }
      }
    };
    console.log(sumNums(myObject));
  }
}

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=build.js.map