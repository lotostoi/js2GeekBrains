/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index~._c": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./js/main.js","vendors~index~.._node_modules_a","vendors~index~.._node_modules_vue_dist_vue.js~26ddbdfe"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/style.scss":
/*!************************!*\
  !*** ./css/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./css/style.scss?");

/***/ }),

/***/ "./js/aboutShop.js":
/*!*************************!*\
  !*** ./js/aboutShop.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"../node_modules/vue/dist/vue.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('myform', {\r\n    template: `\r\n     <div class=\"container-fuild mt-1 mb-1 body rounded\">\r\n        <h1 class=\"col-11 ml-auto mr-auto mt-3\"> About shop </h1>\r\n        <p class=\"col-11 ml-auto mr-auto mt-3\">\r\n            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod repellat maiores quam odit. Harum esse velit vero sunt voluptatum expedita voluptatibus dolor a! Numquam laboriosam excepturi ad ratione veritatis dolore veniam ex porro temporibus repudiandae rerum, ea ullam quibusdam accusamus, enim, aut cumque debitis. Quasi, nulla doloremque? Architecto at numquam eum minus? Debitis aperiam sed nostrum voluptatum rerum necessitatibus neque accusantium quos doloribus, distinctio veniam quasi amet tempore sit quidem, magnam provident tenetur repudiandae dolor aut laborum id quisquam. Veritatis, veniam. Repellendus incidunt facere soluta nam fugit iusto cum atque sapiente asperiores deserunt. Voluptatibus harum culpa natus deserunt, laudantium eius maxime sed nihil? Sit nemo rem nihil delectus debitis eos, aperiam soluta, ducimus dolor molestias vero dignissimos recusandae quidem tenetur deleniti architecto dicta? Sed at culpa odit repudiandae alias hic in temporibus eos dolor voluptates eaque reprehenderit blanditiis pariatur dolorum, excepturi praesentium quas, reiciendis quaerat nobis neque error ut ratione quos. Quibusdam nesciunt voluptates quas, velit in molestias cum optio provident doloremque quidem, quae iste accusamus repellat amet sunt, nobis expedita omnis distinctio iusto adipisci porro quia! Maxime dicta harum natus incidunt voluptates saepe voluptatibus vitae, accusantium error ex, consequuntur reprehenderit illum cupiditate nemo. Dolores omnis minima impedit quae ipsa.\r\n        </p>\r\n    </div>\r\n    `\r\n}));\r\n\n\n//# sourceURL=webpack:///./js/aboutShop.js?");

/***/ }),

/***/ "./js/api/cartApi.js":
/*!***************************!*\
  !*** ./js/api/cartApi.js ***!
  \***************************/
/*! exports provided: all, inc, dec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"all\", function() { return all; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inc\", function() { return inc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dec\", function() { return dec; });\n/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http */ \"./js/api/http.js\");\n\r\n\r\nconst all = async () => {\r\n\r\n    let {data:{contents}} = await _http__WEBPACK_IMPORTED_MODULE_0__[\"http\"].get(Math.random() < 0.9 ?'getBasket.json': 'empty')\r\n    return contents\r\n\r\n}\r\nconst inc = async () => {\r\n\r\n    let {data:{result}} = await _http__WEBPACK_IMPORTED_MODULE_0__[\"http\"].get(Math.random() < 0.8 ?'addToBasket.json':'empty')\r\n    return result\r\n\r\n}\r\nconst dec = async () => {\r\n\r\n    let {data:{result}} = await _http__WEBPACK_IMPORTED_MODULE_0__[\"http\"].get(Math.random() < 0.8 ?'deleteFromBasket.json': 'empty')\r\n    return result\r\n\r\n}\n\n//# sourceURL=webpack:///./js/api/cartApi.js?");

/***/ }),

/***/ "./js/api/catalogApi.js":
/*!******************************!*\
  !*** ./js/api/catalogApi.js ***!
  \******************************/
/*! exports provided: all */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"all\", function() { return all; });\n/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http */ \"./js/api/http.js\");\n\r\n\r\nconst all = async () => {\r\n\r\n    let {data} = await _http__WEBPACK_IMPORTED_MODULE_0__[\"http\"].get( Math.random() < 0.9 ? 'catalogData.json': 'empty')\r\n    return data\r\n\r\n}\n\n//# sourceURL=webpack:///./js/api/catalogApi.js?");

/***/ }),

/***/ "./js/api/http.js":
/*!************************!*\
  !*** ./js/api/http.js ***!
  \************************/
/*! exports provided: http */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"http\", function() { return http; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n\r\nconst http = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\r\n    baseURL: 'https://raw.githubusercontent.com/lotostoi/js2GeekBrains/lesson3/responses/',\r\n    timeout: 10000,\r\n})\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/api/http.js?");

/***/ }),

/***/ "./js/cart.js":
/*!********************!*\
  !*** ./js/cart.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"../node_modules/vue/dist/vue.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_prodInCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/prodInCart */ \"./js/components/prodInCart.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ \"../node_modules/vuex/dist/vuex.esm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('cart', {\r\n    template: `\r\n    <div class=\"conteiner mt-1 mb-1 border border border-light rounded body\">\r\n        <table v-if = \"!loading\" class=\"table \">\r\n            <tbody>\r\n                <tr class=\"row ml-auto mr-auto mt-2\" style=\"border-bottom:1px solid lightgray; \">\r\n                    <td class=\"col-2 ml-auto mr-auto cent\"><strong>Image</strong></td>\r\n                    <td class=\"col-2 ml-auto mr-auto cent\"><strong>Title</strong></td>\r\n                    <td class=\"col-2 ml-auto mr-auto cent\"><strong>Price</strong></td>\r\n                    <td class=\"col-2 ml-auto mr-auto cent\"><strong>All price</strong></td>\r\n                    <td class=\"col-2 ml-auto mr-auto cent\"><strong>Quantity</strong></td>     \r\n                </tr>\r\n                <prod v-for=\"prod in  goodsInCart\" :prod='prod' :key=\"prod.name\" @addtocart=\"$emit('addtocart', $event)\" @removefromcart=\"$emit('removefromcart', $event)\"/>\r\n                <tr class=\"row ml-auto mr-auto mt-2\" style=\"border-bottom:1px solid lightgray; \">\r\n                    <td class=\"col-2 ml-auto mr-auto cent\"></td>\r\n                    <td class=\"col-2 ml-auto mr-auto cent\"></td>\r\n                    <td class=\"col-2 ml-auto mr-auto cent\"><strong>Result:</strong></td>\r\n                    <td class=\"col-2 ml-auto mr-auto cent\"><strong>{{sum}} \\u20bd</strong></td>\r\n                    <td class=\"col-2 ml-auto mr-auto cent\"><strong>{{quantity}}</strong></td>     \r\n                </tr>\r\n           \r\n                </tbody>\r\n        </table>\r\n        <div v-else class=\"m-auto   col-1\">\r\n            <div class=\"spinner-grow mt-5\" style=\"width: 7rem; height: 7rem;\" role=\"status\">\r\n                <span class=\"sr-only\">Loading...</span>\r\n            </div>    \r\n        </div>\r\n    </div> \r\n    `,\r\n    props: {\r\n\r\n    },\r\n    componets: {\r\n        prod: _components_prodInCart__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n    },\r\n    computed: {\r\n        ...Object(vuex__WEBPACK_IMPORTED_MODULE_2__[\"mapGetters\"])({\r\n            goodsInCart:['cart/cart'],\r\n            sum:['cart/sum'],\r\n            quantity:['cart/quantity'],\r\n            loading:['cart/loading'],\r\n        })\r\n    },\r\n    mounted() {\r\n\r\n    }\r\n\r\n}));\n\n//# sourceURL=webpack:///./js/cart.js?");

/***/ }),

/***/ "./js/components/alerts.js":
/*!*********************************!*\
  !*** ./js/components/alerts.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"../node_modules/vue/dist/vue.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"../node_modules/vuex/dist/vuex.esm.js\");\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('alert', {\r\n    template: `\r\n    <transition-group class=\"cont-arlet\" tag=\"div\" leave-active-class=\"leave\" enter-active-class=\"enter\" mode=\"out-in\">\r\n        <div class=\"message\" v-for=\"(alert) in alerts\" :key=\"alert.id\">\r\n                <p>{{alert.text}}</p>\r\n        </div>\r\n    </transition-group>\r\n    `,\r\n    computed: {\r\n        ...Object(vuex__WEBPACK_IMPORTED_MODULE_1__[\"mapGetters\"])({\r\n            alerts: \"alerts/all\",\r\n        }),\r\n    },\r\n}));\r\n\n\n//# sourceURL=webpack:///./js/components/alerts.js?");

/***/ }),

/***/ "./js/components/bot.js":
/*!******************************!*\
  !*** ./js/components/bot.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"../node_modules/vue/dist/vue.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('top', {\r\n    template: `\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                Footer\r\n            </div>  \r\n        </div>\r\n    `\r\n}));\n\n//# sourceURL=webpack:///./js/components/bot.js?");

/***/ }),

/***/ "./js/components/header.js":
/*!*********************************!*\
  !*** ./js/components/header.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"../node_modules/vue/dist/vue.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"../node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var _js_components_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/js/components/search */ \"./js/components/search.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('top', {\r\n    template: `\r\n    <nav class=\"navbar navbar-expand-lg navbar-light border rounded bg-light\" >\r\n        <a class=\"navbar-brand\" href=\"#\">E-Shop</a>\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n            <ul class=\"navbar-nav mr-auto border rounded\">\r\n\r\n                <router-link :to=\"{name: 'main'}\" class =\"link\"  exact active-class=\"link-active\">Main</router-link> \r\n                <router-link :to=\"{name: 'catalog'}\" class =\"link\"  exact active-class=\"link-active\">Products</router-link> \r\n                <router-link :to=\"{name: 'form'}\" class =\"link\"  exact active-class=\"link-active\">Contacts us</router-link> \r\n                 \r\n            </ul>\r\n            <filt></filt>\r\n            \r\n            <router-link :to=\"{name: 'cart'}\" type=\"button\" class=\"btn btn-secondary ml-3\" exact active-class=\"but-active\">\r\n                   Cart<span class=\"badge badge-light ml-3\">{{quantity}}</span>\r\n               \r\n            </router-link> \r\n       \r\n        </div>\r\n    </nav> \r\n    `,\r\n    components: {\r\n        filt: _js_components_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\n    },\r\n\r\n    data: () => ({\r\n        searchValue: '',\r\n        fields: [\r\n            { name: 'Main', active: true },\r\n            { name: 'Products', active: false },\r\n            { name: 'Contacts us', active: false },\r\n            { name: 'Cart', active: false },\r\n        ]\r\n    }),\r\n    methods: {\r\n        active(e) {\r\n\r\n            this.fields.forEach((f, i) => {\r\n                (e === f.name) ?\r\n                    (vue__WEBPACK_IMPORTED_MODULE_0___default.a.set(this.fields[i], 'active', true) && this.$emit('showpage', f.name)) :\r\n                    vue__WEBPACK_IMPORTED_MODULE_0___default.a.set(this.fields[i], 'active', false)\r\n            })\r\n        },\r\n        search() {\r\n            this.active(\"Products\")\r\n            this.$emit('search', this.searchValue)\r\n        },\r\n\r\n\r\n    },\r\n    computed: {\r\n        ...Object(vuex__WEBPACK_IMPORTED_MODULE_1__[\"mapGetters\"])({\r\n            quantity: ['cart/quantity'],\r\n        })\r\n    }\r\n\r\n\r\n\r\n}));\r\n\r\n\n\n//# sourceURL=webpack:///./js/components/header.js?");

/***/ }),

/***/ "./js/components/prod.js":
/*!*******************************!*\
  !*** ./js/components/prod.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"../node_modules/vue/dist/vue.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"../node_modules/vuex/dist/vuex.esm.js\");\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('good', {\r\n    template: `\r\n            <div class=\"card col-3 m-2\">\r\n                    <img class=\"card-img-top mt-2\" :src=\"prod.link\" :key=\"prod.id\" alt=\"Card image cap\">\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">{{prod.title}}</h5>\r\n                        <h5 class=\"card-title\">{{prod.price}}\\u20bd </h5>\r\n                        <button v-if = \"!inCart(prod.id)\"  href=\"#\" class=\"btn btn-primary\" @click=\"addToCart(prod.id)\" :disabled=\"cartLoading\" >Add to cart</button>\r\n                        <button v-else  href=\"#\" class=\"btn btn-danger\" @click=\"delFromCart(prod.id)\" :disabled=\"cartLoading\" >Remove </button>\r\n                    </div>\r\n            </div>      \r\n    `,\r\n    props: {\r\n        prod: {\r\n            type: Object,\r\n            required: true\r\n        }\r\n    },\r\n\r\n    methods: {\r\n        ...Object(vuex__WEBPACK_IMPORTED_MODULE_1__[\"mapActions\"])({\r\n            addToCart: 'cart/incCart',\r\n            delFromCart: 'cart/decCart',\r\n        }),\r\n        test() {\r\n            console.log(this.addToCart);\r\n        }\r\n    },\r\n    computed: {\r\n        ...Object(vuex__WEBPACK_IMPORTED_MODULE_1__[\"mapGetters\"])({\r\n            inCart: ['catalog/inCart'],\r\n            cartLoading:['cart/loading'],\r\n        })\r\n    },\r\n\r\n}));\r\n\n\n//# sourceURL=webpack:///./js/components/prod.js?");

/***/ }),

/***/ "./js/components/prodInCart.js":
/*!*************************************!*\
  !*** ./js/components/prodInCart.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"../node_modules/vue/dist/vue.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"../node_modules/vuex/dist/vuex.esm.js\");\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('prod', {\r\n    template: `\r\n            <tr class=\"row ml-auto mr-auto mt-2\" style=\"border-bottom:1px solid lightgray; \">\r\n                <td class=\"col-2 ml-auto mr-auto cent\">\r\n                       <img class=\"card-img-top mt-2\" :src=\"prod.link\" :key=\"prod.id\" style=\"width:100px; height:100px\">\r\n                </td>\r\n                <td class=\"col-2 ml-auto mr-auto cent\">{{prod.title}}</td>\r\n                <td class=\"col-2 ml-auto mr-auto cent\">{{prod.price}} \\u20bd</td>\r\n                <td class=\"col-2 ml-auto mr-auto cent\">{{prod.price * prod.quantity}} \\u20bd</td>\r\n                <td class=\"col-2 ml-auto mr-auto cent\">  \r\n                    <button class=\"btn btn-warning\" type=\"submit\" @click=\"delFromCart(prod.id)\" :disabled=\"catalogLoading\">-</button>      \r\n                    <div class=\"ml-1 mr-1 cent\"> <span>{{prod.quantity}}</span> </div>\r\n                    <button class=\"btn btn-warning\" type=\"submit\" @click=\"addToCart(prod.id)\" :disabled=\"catalogLoading\">+</button>\r\n                </td>\r\n            </tr>   \r\n    `,\r\n    props: {\r\n        prod: {\r\n            type: Object,\r\n            required: true\r\n        }\r\n    },\r\n    computed: {\r\n        ...Object(vuex__WEBPACK_IMPORTED_MODULE_1__[\"mapGetters\"])({\r\n            catalog:['catalog/catalog'],\r\n            catalogLoading:['catalog/loading'],\r\n        })\r\n    },\r\n    methods: {\r\n        ...Object(vuex__WEBPACK_IMPORTED_MODULE_1__[\"mapActions\"])({\r\n            addToCart:'cart/incCart',\r\n            delFromCart:'cart/decCart',   \r\n        })\r\n    },\r\n\r\n}));\n\n//# sourceURL=webpack:///./js/components/prodInCart.js?");

/***/ }),

/***/ "./js/components/search.js":
/*!*********************************!*\
  !*** ./js/components/search.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"../node_modules/vue/dist/vue.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"../node_modules/vuex/dist/vuex.esm.js\");\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('search', {\r\n    template: ` \r\n        <form class=\"form-inline my-2 my-lg-0\" id = \"filter\"  v-on:submit.prevent=\"filter(searchValue)\">\r\n            <input class=\"form-control mr-sm-2\" type=\"search\" name=\"search\" placeholder=\"Search\" v-model = \"searchValue\">\r\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n        </form> \r\n    `,\r\n    data:()=> ({\r\n        searchValue:''\r\n    }),\r\n    methods:{\r\n        ...Object(vuex__WEBPACK_IMPORTED_MODULE_1__[\"mapActions\"])({\r\n            filter:'catalog/filter'\r\n        })\r\n    }\r\n}));\n\n//# sourceURL=webpack:///./js/components/search.js?");

/***/ }),

/***/ "./js/form.js":
/*!********************!*\
  !*** ./js/form.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"../node_modules/vue/dist/vue.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('myform', {\r\n    template: `\r\n     <div >\r\n       <form class=\"mt-1 mb-1 body rounded\" id=\"form\">\r\n            <h1 class=\"col-11 ml-auto mr-auto mt-3\"> Contacts us </h1>\r\n            <div v-for=\"field,i in fields\" class=\"form-group col-11 ml-auto mr-auto  mt-2\">\r\n                <label >{{field.name}}</label>\r\n                <input v-if = \"field.tagName === 'input'\"\r\n                 :type=\"field.type\" \r\n                 class=\"form-control\" \r\n                 :name=\"field.name\" \r\n                 v-model=\"field.value\"\r\n                 v-on:input=\"valid(i)\"\r\n                 :class=\"getClass(i)\"                \r\n                 >\r\n                <textarea v-else  \r\n                :type=\"field.type\" \r\n                 class=\"form-control\" \r\n                 :name=\"field.name\" \r\n                 v-model=\"field.value\"\r\n                 v-on:input=\"valid(i)\"\r\n                 :class=\"getClass(i)\"     ></textarea>\r\n                <small v-if=\"getClass(i) === 'error'\" class=\"form-text text-danger fontSize\">{{field.errorMessage}}</small>\r\n            </div>      \r\n            <div class=\"col-11 ml-auto mr-auto\"> \r\n                  <button type=\"submit\" \r\n                   class=\"btn btn-primary ml-auto mr-auto\" \r\n                   :class=\"!validForm ?'disabled':''\" \r\n                   :disabled=\"!validForm\"\r\n                   @click.prevent = \"clearForm\"\r\n                   >Sent</button>\r\n            </div>   \r\n        </form> \r\n    </div>\r\n    `,\r\n    data: () => ({\r\n        fields: [\r\n            {\r\n                name: 'Name',\r\n                errorMessage: \"Minimum length name is 3\",\r\n                type: 'text',\r\n                tagName: 'input',\r\n                regExp: ['^[а-яА-ЯёЁA-z]{3,}$', 'i']\r\n            },\r\n            {\r\n                name: 'Phone',\r\n                errorMessage: \"Required format:+7(000)000-0000\",\r\n                type: 'phone',\r\n                tagName: 'input',\r\n                regExp: ['^[+]\\\\d{1}[(]\\\\d{3}[)]\\\\d{3}\\-\\\\d{4}$']\r\n            },\r\n            {\r\n                name: 'Email',\r\n                errorMessage: \"Required format : mymail@mail.ru or my.mail@mail.ru or my - mail@mail.ru.\",\r\n                type: 'email',\r\n                tagName: 'input',\r\n                regExp: ['^\\\\S+@mail.ru$', 'i']\r\n            },\r\n            {\r\n                name: 'Text',\r\n                errorMessage: \"Minimum length messege is 3\",\r\n                type: 'text',\r\n                tagName: 'textarea',\r\n                regExp: ['^[?!,.а-яА-ЯёЁA-z ]{3,}$', 'i']\r\n            },\r\n        ]\r\n    }),\r\n    created() {\r\n\r\n        this.fields.map(f => ({ ...f, valid: false, value: '', active: false }))\r\n\r\n    },\r\n    methods: {\r\n        valid(i) {\r\n\r\n            vue__WEBPACK_IMPORTED_MODULE_0___default.a.set(this.fields[i], 'active', true)\r\n\r\n            if ((new RegExp(...this.fields[i].regExp)).test(this.fields[i].value)) {\r\n                vue__WEBPACK_IMPORTED_MODULE_0___default.a.set(this.fields[i], 'valid', true)\r\n                console.log('dfd')\r\n            }\r\n            else {\r\n                vue__WEBPACK_IMPORTED_MODULE_0___default.a.set(this.fields[i], 'valid', false)\r\n            }\r\n            this.getClass(i)\r\n        },\r\n        getClass(i) {\r\n            let field = this.fields[i]\r\n            if (field.active && field.valid) {\r\n                return 'valid'\r\n            } else if (field.active && !field.valid) {\r\n                return 'error'\r\n            } else {\r\n                return ''\r\n            }\r\n        }, \r\n        clearForm() { \r\n\r\n            this.fields.forEach((f,i) => { \r\n                vue__WEBPACK_IMPORTED_MODULE_0___default.a.set(this.fields[i], 'valid', false)\r\n                vue__WEBPACK_IMPORTED_MODULE_0___default.a.set(this.fields[i], 'active', false)\r\n                vue__WEBPACK_IMPORTED_MODULE_0___default.a.set(this.fields[i], 'value', '')\r\n            })\r\n\r\n        }\r\n    },\r\n    computed: {\r\n        validForm() {\r\n            return this.fields.every(f => f.active)\r\n        }\r\n    }\r\n\r\n}));\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/form.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"../node_modules/vue/dist/vue.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/store/index */ \"./js/store/index.js\");\n/* harmony import */ var _js_router_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/js/router/index */ \"./js/router/index.js\");\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/style.scss */ \"./css/style.scss\");\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_style_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ \"../node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var _js_components_header_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/js/components/header.js */ \"./js/components/header.js\");\n/* harmony import */ var _js_components_bot_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/js/components/bot.js */ \"./js/components/bot.js\");\n/* harmony import */ var _js_components_alerts_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/js/components/alerts.js */ \"./js/components/alerts.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nnew vue__WEBPACK_IMPORTED_MODULE_0___default.a({\r\n    el: '#el',\r\n    store: _js_store_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n    router: _js_router_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n    components: { top: _js_components_header_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], bot: _js_components_bot_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], alerts: _js_components_alerts_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"] },\r\n    created() {\r\n        _js_store_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dispatch('cart/getCart')\r\n        _js_store_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dispatch('catalog/getCatalog')\r\n    },\r\n    computed: {\r\n        ...Object(vuex__WEBPACK_IMPORTED_MODULE_4__[\"mapGetters\"])({\r\n            cartLoading: ['cart/loading'],\r\n            catalogLoading: ['catalog/loading'],\r\n        })\r\n    }\r\n})\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/prodacts.js":
/*!************************!*\
  !*** ./js/prodacts.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"../node_modules/vue/dist/vue.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/prod */ \"./js/components/prod.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ \"../node_modules/vuex/dist/vuex.esm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('products', {\r\n    template: `\r\n    <div class=\"conteiner mt-1 mb-1 border border border-light rounded body\">\r\n        <div class=\"row center \">\r\n            <good v-for=\"prod in catalog\" :prod='prod' :key=\"prod.name\" />      \r\n        </div>  \r\n        <div class=\"ml-auto  mr-auto mt-5 col-4\">\r\n             <h4 v-if = \"catalog.length === 0 && !loading\">Not found for \"{{bodyRequest}} ...\" </h4>\r\n        </div>\r\n\r\n        <div v-if = \"loading\" class=\"m-auto   col-1\">\r\n            <div class=\"spinner-grow\" style=\"width: 7rem; height: 7rem;\" role=\"status\">\r\n                 <span class=\"sr-only\">Loading...</span>\r\n            </div>    \r\n        </div>\r\n\r\n    </div> \r\n    `,\r\n  \r\n    componets: {\r\n       good: _components_prod__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n    },\r\n    computed: {\r\n        ...Object(vuex__WEBPACK_IMPORTED_MODULE_2__[\"mapGetters\"])({\r\n            catalog:['catalog/catalog'],\r\n            bodyRequest:['catalog/value'],\r\n            loading:['catalog/loading'],\r\n           \r\n\r\n        })\r\n    },\r\n \r\n    mounted() {\r\n\r\n    }\r\n\r\n\r\n}));\n\n//# sourceURL=webpack:///./js/prodacts.js?");

/***/ }),

/***/ "./js/router/index.js":
/*!****************************!*\
  !*** ./js/router/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"../node_modules/vue/dist/vue.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ \"../node_modules/vue-router/dist/vue-router.esm.js\");\n/* harmony import */ var _js_prodacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/js/prodacts */ \"./js/prodacts.js\");\n/* harmony import */ var _js_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/js/form */ \"./js/form.js\");\n/* harmony import */ var _js_aboutShop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/js/aboutShop */ \"./js/aboutShop.js\");\n/* harmony import */ var _js_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/js/cart */ \"./js/cart.js\");\n\r\n\r\n\r\nvue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst routes = [\r\n\r\n    {\r\n        name: 'main',\r\n        path: \"/\",\r\n        component: _js_aboutShop__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\r\n    },\r\n    {\r\n        name: 'catalog',\r\n        path: \"/catalog\",\r\n        component: _js_prodacts__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\n    },\r\n    {\r\n        name: 'cart',\r\n        path: \"/cart\",\r\n        component: _js_cart__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\r\n    },\r\n    {\r\n        name: 'form',\r\n        path: \"/form\",\r\n        component: _js_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\r\n    },\r\n]\r\n\r\nlet router = new vue_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\r\n\r\n    mode: 'history',\r\n    routes,\r\n\r\n})\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\r\n\n\n//# sourceURL=webpack:///./js/router/index.js?");

/***/ }),

/***/ "./js/store/alerts.js":
/*!****************************!*\
  !*** ./js/store/alerts.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n\r\n    namespaced: true,\r\n\r\n    state: {\r\n        // array of all alerts\r\n        all: []\r\n    },\r\n    getters: {\r\n        all: state => state.all\r\n    },\r\n    mutations: {\r\n        add(state, payload) {\r\n\r\n            // adding object of error in the array\r\n            state.all.push(payload)\r\n\r\n        },\r\n\r\n        // deleteing  object by index\r\n\r\n        dellByIndex(state, id) {\r\n            const index = state.all.findIndex(a => a.id === id)\r\n            state.all.splice(index, 1)\r\n        }\r\n\r\n    },\r\n    actions: {\r\n        add({ commit, state }, payload) {\r\n\r\n            const id = Date.now()\r\n\r\n            // adding error's object \r\n            commit('add', { ...payload, id: id })\r\n\r\n            if (payload.timeout) {\r\n\r\n                //  if the \"timeout\" property is defined, then we are deleting this object from the array, after <timeout> ms\r\n                setTimeout(() => commit('dellByIndex', id), payload.timeout)\r\n            }\r\n        }\r\n    }\r\n\r\n});\n\n//# sourceURL=webpack:///./js/store/alerts.js?");

/***/ }),

/***/ "./js/store/cart.js":
/*!**************************!*\
  !*** ./js/store/cart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"../node_modules/vue/dist/vue.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_api_cartApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/js/api/cartApi.js */ \"./js/api/cartApi.js\");\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    namespaced: true,\r\n    state: {\r\n\r\n        cart: [],\r\n        loading: true\r\n\r\n    },\r\n    getters: {\r\n\r\n        cart: state => state.cart,\r\n        loading: state=> state.loading, \r\n        sum: state => state.cart.reduce((start, { price, quantity }) => start + price * quantity, 0),\r\n        quantity: state => state.cart.reduce((start, { quantity }) => start + quantity, 0)\r\n\r\n    },\r\n    mutations: {\r\n\r\n        getCart: (state, cart) => (state.cart = cart) && (state.loading = false),\r\n\r\n        incCart: (state, prod) => {\r\n\r\n            let index = state.cart.findIndex(good => +good.id === +prod.id)\r\n            if (index !== -1) {\r\n                vue__WEBPACK_IMPORTED_MODULE_0___default.a.set(state.cart[index], 'quantity', ++state.cart[index].quantity)\r\n            } else {\r\n                state.cart.push({ ...prod, quantity: 1 })\r\n                \r\n            }\r\n\r\n        },\r\n        decCart: (state, prod) => {\r\n\r\n            let index = state.cart.findIndex(good => +good.id === +prod.id)\r\n\r\n            if (+prod.quantity === 1) {\r\n                state.cart.splice(index, 1)\r\n            } else {\r\n                vue__WEBPACK_IMPORTED_MODULE_0___default.a.set(state.cart[index], 'quantity', --state.cart[index].quantity)\r\n            }\r\n\r\n        }\r\n\r\n    },\r\n    actions: {\r\n\r\n        async getCart({ commit, dispatch }) {\r\n            try {\r\n\r\n                let data = await _js_api_cartApi_js__WEBPACK_IMPORTED_MODULE_1__[\"all\"]()\r\n                commit('getCart', data.map(prod => ({ ...prod, link: 'http://placehold.it/100x100/' })))\r\n\r\n            }\r\n            catch  {\r\n                  dispatch('alerts/add', { text: \"Error by getting cart. Please, reload  page... \" }, { root: true })\r\n            }\r\n\r\n        },\r\n        async incCart({ commit, rootGetters, dispatch }, id) {\r\n\r\n            try {\r\n\r\n                let data = await _js_api_cartApi_js__WEBPACK_IMPORTED_MODULE_1__[\"inc\"]()\r\n\r\n                if (+data === 1) {\r\n\r\n                let good = rootGetters['catalog/catalog'].find(g => +g.id === +id)\r\n                commit('incCart', good)\r\n                }\r\n\r\n            } catch (e) {\r\n              \r\n\r\n                dispatch('alerts/add', {timeout: 3000, text: \"Error by adding of good from cart... Try again  \" }, { root: true })\r\n\r\n            }\r\n\r\n        },\r\n        async decCart({ commit, state, dispatch }, id) {\r\n\r\n            try {\r\n\r\n                let data = await _js_api_cartApi_js__WEBPACK_IMPORTED_MODULE_1__[\"dec\"]()\r\n\r\n                if (+data === 1) {\r\n                    let good = state.cart.find(g => +g.id === +id)\r\n                    commit('decCart', good)\r\n                }\r\n\r\n            } catch (e) {\r\n\r\n               dispatch('alerts/add', { timeout: 3000, text: \"Error by delleting of good from cart... Try again  \" }, { root: true })\r\n\r\n            }\r\n\r\n        }\r\n    }\r\n});\n\n//# sourceURL=webpack:///./js/store/cart.js?");

/***/ }),

/***/ "./js/store/catalog.js":
/*!*****************************!*\
  !*** ./js/store/catalog.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_api_catalogApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/api/catalogApi.js */ \"./js/api/catalogApi.js\");\n/* harmony import */ var _js_router_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/router/index */ \"./js/router/index.js\");\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    namespaced: true,\r\n    state: {\r\n        _catalog: [],\r\n        catalog: [],\r\n        value: '',\r\n        loading: true\r\n    },\r\n    getters: {\r\n        catalog: state => state.catalog,\r\n        value: state => state.value,\r\n        loading: state=> state.loading, \r\n        inCart: (state, getters, rootState, rootGetters) => id => rootGetters['cart/cart'].find(g => +g.id === +id)\r\n    },\r\n    mutations: {\r\n        getCatalog: (state, catalog) => (state.catalog = state._catalog = catalog) && (state.loading = false),\r\n        filter: (state, value) => {\r\n            if (value !== '') {\r\n                state.catalog = state._catalog.filter(g => g && g.title.toLowerCase().includes(value.toLowerCase()))\r\n                state.value = value\r\n            } else {\r\n                state.catalog = state._catalog\r\n                state.value = ''\r\n            }\r\n        }\r\n    },\r\n    actions: {\r\n        async getCatalog({ commit, dispatch }) {\r\n\r\n            try {\r\n\r\n                let data = await _js_api_catalogApi_js__WEBPACK_IMPORTED_MODULE_0__[\"all\"]()\r\n                commit('getCatalog', data.map(prod => ({ ...prod, link: 'http://placehold.it/150x100/', inCart: false })))\r\n\r\n            }\r\n            catch  {\r\n                dispatch('alerts/add',{text:\"Error by getting goods. Please, reload  page... \"}, {root:true})\r\n            }\r\n\r\n        },\r\n        filter({commit},value) {\r\n            _js_router_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].push('/catalog')\r\n            commit('filter', value)\r\n        }\r\n\r\n    }\r\n});\n\n//# sourceURL=webpack:///./js/store/catalog.js?");

/***/ }),

/***/ "./js/store/index.js":
/*!***************************!*\
  !*** ./js/store/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"../node_modules/vue/dist/vue.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"../node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart */ \"./js/store/cart.js\");\n/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catalog */ \"./js/store/catalog.js\");\n/* harmony import */ var _alerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alerts */ \"./js/store/alerts.js\");\n\r\n\r\n\r\nvue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\r\n\r\n\r\n\r\n\r\n\r\n\r\n const store = new vuex__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Store({\r\n namespaced: true,\r\n modules: {\r\n    catalog: _catalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\r\n    cart: _cart__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n    alerts: _alerts__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\r\n },\r\n\r\n strict: \"development\" !== 'production'\r\n})\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n//# sourceURL=webpack:///./js/store/index.js?");

/***/ })

/******/ });