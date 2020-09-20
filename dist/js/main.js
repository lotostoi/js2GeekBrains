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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/style.scss":
/*!*******************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/style.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"body {\\n  margin: 0;\\n  padding: 0;\\n  font-size: 14px;\\n}\\n\\n.wrapper {\\n  width: 100%;\\n  max-width: 1200px;\\n  margin: 0 auto;\\n}\\n\\nmain {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\nheader {\\n  display: flex;\\n  min-height: 30px;\\n  background-color: black;\\n  padding: 20px;\\n  justify-content: space-between;\\n}\\nheader > a {\\n  display: flex;\\n  text-decoration: none;\\n  font-size: 2em;\\n  color: #d4d3d3;\\n}\\nheader > a:hover {\\n  color: orange;\\n}\\nheader > a:active {\\n  color: #a06904;\\n}\\nheader > button {\\n  outline: none;\\n  border: none;\\n  transition: transform 0.3;\\n}\\nheader > button:hover {\\n  color: orange;\\n  background-color: #535353;\\n}\\nheader > button:active {\\n  transform: scale(0.9);\\n}\\n\\n.products {\\n  display: flex;\\n  width: 100%;\\n  flex-wrap: wrap;\\n  justify-content: space-evenly;\\n  padding: 20px;\\n  margin-top: 10px;\\n  border: 1px solid #cecdcd;\\n  box-sizing: border-box;\\n}\\n\\n.product-item {\\n  align-items: center;\\n  display: flex;\\n  flex-direction: column;\\n  width: 40%;\\n  border: 1px solid gray;\\n  padding: 20px 0;\\n  margin-bottom: 20px;\\n}\\n.product-item > button {\\n  width: 40%;\\n}\\n\\n.cart {\\n  position: fixed;\\n  width: 100vw;\\n  height: 100vh;\\n  display: none;\\n  background-color: rgba(128, 128, 128, 0.678);\\n  padding: 20px;\\n  box-sizing: border-box;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.cart__close {\\n  cursor: pointer;\\n  display: flex;\\n  width: 30px;\\n  height: 30px;\\n  border-radius: 50%;\\n  justify-content: center;\\n  align-items: center;\\n  color: white;\\n  background-color: rgba(0, 0, 0, 0.788);\\n  position: absolute;\\n  top: 30px;\\n  right: 30px;\\n}\\n.cart__close:hover {\\n  background-color: #c72306;\\n}\\n.cart__close:active {\\n  transform: scale(0.9);\\n}\\n.cart__body {\\n  position: relative;\\n  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);\\n  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);\\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);\\n  display: flex;\\n  flex-direction: column;\\n  width: 50vw;\\n  padding: 20px;\\n  box-sizing: border-box;\\n  background-color: #11abda;\\n}\\n.cart__body > hr {\\n  width: 100%;\\n}\\n.cart__headerBody {\\n  width: 100%;\\n  display: flex;\\n  height: 40px;\\n}\\n.cart__headerBody p {\\n  display: flex;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.cart__headerBody p.colImage {\\n  width: 20%;\\n}\\n.cart__headerBody p.colTitle {\\n  width: 20%;\\n}\\n.cart__headerBody p.colPrice {\\n  width: 20%;\\n}\\n.cart__headerBody p.colAllPrice {\\n  width: 20%;\\n}\\n.cart__headerBody p.colQuantity {\\n  width: 20%;\\n}\\n.cart__products {\\n  display: flex;\\n  width: 100%;\\n  flex-direction: column;\\n}\\n.cart__prodact {\\n  margin: 5px 0;\\n  display: flex;\\n  width: 100%;\\n}\\n.cart__imgCont, .cart__title, .cart__price, .cart__all-price, .cart__quantity {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 20%;\\n}\\n.cart__quantity > span {\\n  margin: 0 10px;\\n}\\n.cart__resalts > button {\\n  cursor: pointer;\\n  background-color: grey;\\n  outline: none;\\n  border: none;\\n  color: black;\\n  padding: 10px;\\n  font-size: 1.2em;\\n  border-radius: 3px;\\n}\\n.cart__resalts > button:hover {\\n  background-color: #c72306;\\n}\\n.cart__resalts > button:active {\\n  transform: scale(0.9);\\n}\\n\\n.cart-active {\\n  display: flex;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./css/style.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./css/style.scss":
/*!************************!*\
  !*** ./css/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./css/style.scss?");

/***/ }),

/***/ "./js/Cart.js":
/*!********************!*\
  !*** ./js/Cart.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GoodInCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoodInCart */ \"./js/GoodInCart.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./js/constants.js\");\n\r\n\r\n\r\nlet baseURL = _constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].baseURL\r\n\r\nclass Cart {\r\n\r\n    constructor(container = '.cart__products') {\r\n\r\n\r\n        this.container = document.querySelector(container)\r\n\r\n        this._goodsInCart = []\r\n\r\n        this.prodCart = []\r\n\r\n        this.allSum = null\r\n\r\n        this.allAmount = null\r\n\r\n        this.url = \"getBasket.json\"\r\n\r\n        this._init()\r\n\r\n    }\r\n\r\n    async _init() {\r\n\r\n        await this._fetchGoodsInCart()\r\n\r\n        this.calcAllSumm()\r\n\r\n        this.calcAllAmount()\r\n\r\n        this.rander()\r\n\r\n    }\r\n\r\n    async _fetchGoodsInCart() {\r\n\r\n\r\n        let res = await fetch(baseURL + this.url)\r\n\r\n        res = await res.json()\r\n\r\n        console.log(res)\r\n\r\n        this._goodsInCart = res.contents\r\n\r\n    }\r\n\r\n    rander() {\r\n\r\n        this.container.innerHTML = ''\r\n\r\n        for (let good of this._goodsInCart) {\r\n\r\n            const newGood = new _GoodInCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"](good)\r\n\r\n            this.container.insertAdjacentHTML('beforeend', newGood.rander())\r\n\r\n        }\r\n\r\n    }\r\n\r\n \r\n    addToCart(good) {\r\n\r\n        console.log(good)\r\n\r\n        if (!this._isInCartId(good.id)) {\r\n\r\n            good.quantity = 1\r\n\r\n            this.prodCart.push(good)\r\n\r\n           \r\n\r\n        } else {\r\n            let index = this._indexInCartId(good.id)\r\n            this.prodCart[index].quantity++\r\n        }\r\n\r\n        this.rander()\r\n\r\n    }\r\n\r\n    // removing good((with id = id)) from the cart\r\n\r\n    removeFromCart(id) { }\r\n\r\n    //claer  all cart \r\n\r\n    claerCart() { }\r\n\r\n    calcAllAmount() { }\r\n\r\n    calcAllSumm() { }\r\n\r\n    _isInCartId(id) {\r\n\r\n        return this._goodsInCart.find(good => good.id == id)\r\n\r\n    }\r\n\r\n    _indexInCartId(id) {\r\n\r\n        return this._goodsInCart.findIndex(good => good.id == id)\r\n\r\n    }\r\n\r\n}\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cart);\n\n//# sourceURL=webpack:///./js/Cart.js?");

/***/ }),

/***/ "./js/Good.js":
/*!********************!*\
  !*** ./js/Good.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n//\r\n\r\nclass Good {\r\n\r\n    constructor(good, img = 'http://placehold.it/150x200/') {\r\n\r\n        let { id_product, product_name, price } = good\r\n\r\n        this.id = id_product\r\n        this.title = product_name\r\n        this.price = price\r\n        this.img = img\r\n    }\r\n\r\n    rander() {\r\n        return `<div class=\"product-item\" data-id=\"${this.id}\">\r\n                  <img src=\"${this.img}\" alt=\"Some img\">\r\n                    <div class=\"desc\">\r\n                        <h3>${this.title}</h3>\r\n                        <p>${this.price} \\u20bd</p>\r\n                        <button class=\"addToCart\" data-id=\"${this.id}\">Add to cart</button>\r\n                        <button class=\"dellFromCart\" data-id=\"${this.id}\">Del from cart</button>\r\n                    </div>\r\n                </div>`;\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Good);\n\n//# sourceURL=webpack:///./js/Good.js?");

/***/ }),

/***/ "./js/GoodInCart.js":
/*!**************************!*\
  !*** ./js/GoodInCart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Good__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Good */ \"./js/Good.js\");\n\r\n\r\n\r\nclass GoodInCart extends _Good__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n    constructor(goodInCart, img = 'http://placehold.it/100x100/') {\r\n\r\n        super(goodInCart, img)\r\n\r\n        this.amount = goodInCart.quantity\r\n    }\r\n\r\n    rander() {\r\n\r\n\r\n        return `                \r\n                <div class=\"cart__prodact\" data-id=\"${this.id}\">\r\n\r\n                    <div class = \"cart__imgCont\">\r\n\r\n                        <img class=\"cart__img\" src=\"${this.img}\" alt=\"${this.title}\">\r\n\r\n                    </div>\r\n\r\n                    <h3 class = \"cart__title\" data-name=\"${this.id}\">${this.title} </h3>\r\n\r\n                    <span class=\"cart__price\" data-price=\"${this.id}\">${this.price}\\u20bd</span>\r\n\r\n                    <span class=\"cart__all-price\" data-all-price=\"${this.id}\">${this.amount * this.price} \\u20bd</span>\r\n\r\n                    <div class=\"cart__quantity\">\r\n\r\n                        <button data-inc=\"${this.id}\"> + </button>\r\n\r\n                        <span data-quantity=\"${this.id}\">${this.amount}</span>\r\n\r\n                        <button data-dec=\"${this.id}\"> - </button>\r\n\r\n                    </div>\r\n\r\n                </div>`;\r\n\r\n    }\r\n}\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (GoodInCart);\n\n//# sourceURL=webpack:///./js/GoodInCart.js?");

/***/ }),

/***/ "./js/ListGoods.js":
/*!*************************!*\
  !*** ./js/ListGoods.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Good__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Good */ \"./js/Good.js\");\n/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cart */ \"./js/Cart.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./js/constants.js\");\n/* harmony import */ var _toPromis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toPromis */ \"./js/toPromis.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet baseURL = _constants__WEBPACK_IMPORTED_MODULE_2__[\"default\"].baseURL\r\n\r\nclass ListGoods {\r\n\r\n    constructor(container = '.products') {\r\n\r\n        this.container = document.querySelector(container)\r\n\r\n        this._goods = []\r\n\r\n        this.allGoods = []\r\n\r\n        this.url = baseURL + 'catalogData.json'\r\n\r\n        this.resolve\r\n\r\n        this.cart = new _Cart__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n\r\n        this.ready()\r\n\r\n        this._init()\r\n\r\n    }\r\n\r\n    ready() { return new Promise(res => { this.resolve = res }) }\r\n\r\n    async _init() {\r\n\r\n        await this._fetchGoods()\r\n        this._rander()\r\n        this._handler()\r\n\r\n\r\n    }\r\n\r\n    async _fetchGoods() {\r\n\r\n        let res = await Object(_toPromis__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this.url)\r\n        this._goods = await JSON.parse(res)\r\n\r\n\r\n    }\r\n\r\n\r\n    _rander() {\r\n\r\n        for (let good of this._goods) {\r\n\r\n            const newGood = new _Good__WEBPACK_IMPORTED_MODULE_0__[\"default\"](good)\r\n            this.allGoods.push(newGood)\r\n            this.container.insertAdjacentHTML('beforeend', newGood.rander())\r\n\r\n        }\r\n        this.resolve()\r\n\r\n    }\r\n\r\n    _handler() {\r\n\r\n        this.container.addEventListener('click', (e) => {\r\n\r\n            if (e.target.className === 'addToCart') {\r\n\r\n                let id = e.target.dataset.id\r\n\r\n\r\n\r\n                this.cart.addToCart(this.allGoods.find(good => good.id.toString() === id.toString()))\r\n\r\n            }\r\n\r\n\r\n        })\r\n\r\n\r\n    }\r\n\r\n    // method for calculating of all sum \r\n\r\n    async allSummAllGoods() {\r\n\r\n        await this.ready()\r\n\r\n        return this.allGoods.length > 0 ? this.allGoods.reduce((accum, good) => accum + good.price, 0) : 0\r\n\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListGoods);\n\n//# sourceURL=webpack:///./js/ListGoods.js?");

/***/ }),

/***/ "./js/constants.js":
/*!*************************!*\
  !*** ./js/constants.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst constants = {\r\n    baseURL : 'https://raw.githubusercontent.com/lotostoi/js2GeekBrains/lesson3/responses/'\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (constants);\n\n//# sourceURL=webpack:///./js/constants.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.scss */ \"./css/style.scss\");\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ListGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListGoods */ \"./js/ListGoods.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(async () => {\r\n\r\n\r\n\r\n    const cotalog = new _ListGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\r\n\r\n\r\n    const cartWrapper = document.querySelector('.cart')\r\n\r\n    const closeCart = document.querySelector('.cart__close')\r\n\r\n    const showCart = document.querySelector('.btn-cart')\r\n\r\n    const cartProducts = document.querySelector('.cart__products')\r\n\r\n\r\n    const hidenShowCart = (e) => {\r\n\r\n        cartWrapper.classList.toggle('cart-active')\r\n\r\n    }\r\n\r\n    closeCart.addEventListener('click', hidenShowCart)\r\n\r\n    showCart.addEventListener('click', hidenShowCart)\r\n\r\n\r\n\r\n\r\n})()\r\n\r\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/toPromis.js":
/*!************************!*\
  !*** ./js/toPromis.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Переделать в ДЗ не fetch!!!!! а new Promise()\r\nlet getRequest = (url) => new Promise((res, rej) => {\r\n    let xhr = new XMLHttpRequest();\r\n    xhr.open('GET', url, true);\r\n    xhr.onreadystatechange = () => {\r\n        if (xhr.readyState === 4) {\r\n            if (xhr.status !== 200) {\r\n                rej('Error');\r\n            } else {\r\n                res(xhr.responseText);\r\n            }\r\n        }\r\n    };\r\n    xhr.send();\r\n}\r\n)\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (getRequest);\n\n//# sourceURL=webpack:///./js/toPromis.js?");

/***/ })

/******/ });