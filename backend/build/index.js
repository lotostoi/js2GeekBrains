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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {



const { Schema, model } = __webpack_require__(0)

const good = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

})

module.exports = model('ListGoods', good)

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const PORT = 3050
// for build
const isProd = true

const urlForProxy = isProd ? '/' : '/api/'

const path = __webpack_require__(4)
const bodyParser = __webpack_require__(5);
const express = __webpack_require__(1)
const mongoose = __webpack_require__(0)
mongoose.set('useFindAndModify', false)

// import routers
const listGoodsRout = __webpack_require__(6)
const listCartRout = __webpack_require__(7)

const app = express()

const history = __webpack_require__(11);

// need only in production
if (isProd) {
    app.use(history())
    app.use(express.static(path.join(__dirname, 'static')));
}

app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.use(urlForProxy, listGoodsRout)
app.use(urlForProxy, listCartRout)

// need only in production
if (isProd) {
    app.get('*', (req, res) => {
        res.end(req.path)
    })
}

async function start() {
    try {

        const link = 'mongodb+srv://lotos_toi:G0fdQ7GKoTODMmRM@cluster0.n6oze.mongodb.net/jsSecondCourseGeekBarins?retryWrites=true&w=majority'

        await mongoose.connect(link, { useNewUrlParser: true, useUnifiedTopology: true })

        app.listen(PORT, () => console.log('Server has been started...'))

    }
    catch (e) {
        console.error(e)
    }

}


start()

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(1);
const router = express.Router();
const ListGoods = __webpack_require__(2)

router.get('/goods', async (req, res) => {
    const goods = await ListGoods.find()
    res.json(goods)
})

module.exports = router

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(1);
const moment = __webpack_require__(8)
const router = express.Router();
const CartGoods = __webpack_require__(9)
const ListGoods = __webpack_require__(2)
const CartStatistics = __webpack_require__(10)

router.get('/cartGoods', async (req, res) => {
    const cartGoods = await CartGoods.find()
    res.json(cartGoods)
})

router.post('/add', async (req, res) => {

    let id = req.body.id

    try {

        let good = await ListGoods.findById(id)
        await CartGoods({
            _id: good._id,
            title: good.title,
            price: good.price,
            quantity: 1,
            img: good.img,
            description: good.description
        }).save()

        await CartStatistics({
            event: 'Adding to cart',
            product: good,
            data: moment()
        }).save()

        res.json({ result: 1 })

    } catch (e) {
        res.status(404).end()
    }

})
router.put('/inc', async (req, res) => {

    let id = req.body.id
    try {
        let good = await CartGoods.findById(id)
        if (good) {
            await CartGoods.findByIdAndUpdate(id, { $set: { quantity: ++good.quantity } }, { new: true })
            await CartStatistics({
                event: 'Increase of quantity of good',
                product: good,
                data: moment()
            }).save()

            res.json({ result: 1 })
        }
    } catch (e) {
        res.status(404).end()
    }

})
router.put('/dec', async (req, res) => {

    let id = req.body.id
    try {
        let good = await CartGoods.findById(id)
        await CartGoods.findByIdAndUpdate(id, { $set: { quantity: --good.quantity } }, { new: true })
        await CartStatistics({
            event: 'Decrease of quantity of good',
            product: good,
            data: moment()
        }).save()
        res.json({ result: 1 })

    } catch (e) {
        res.status(404).end()
    }

})
router.delete('/remove/:id', async (req, res) => {

    let id = req.params.id
    try {
        let good = await CartGoods.findById(id)
        await CartGoods.findByIdAndDelete(id)
        await CartStatistics({
            event: 'Deleting form cart',
            product: good,
            data: moment()
        }).save()
        res.json({ result: 1 })

    } catch (e) {
        console.log(e)
        res.status(404).end()
    }

})
router.delete('/delAll', async (req, res) => {
    try {
        await CartGoods.deleteMany()
        await CartStatistics({
            event: 'Clearing the entire cart',
            product: null,
            data: moment()
        }).save()
        res.json({ result: 1 })

    } catch (e) {
        res.status(404).end()
    }
})
router.get('/statistics', async (req, res) => {
    try {

        let statistics = await CartStatistics.find()
        res.json(statistics.sort(sortByDate))

    } catch (e) {
        console.log(e)
        res.status(404).end()
    }
})

module.exports = router

const sortByDate = (a, b) => {
    if (new Date(a.data) < new Date(b.data)) return 1
    if (new Date(a.data) > new Date(b.data)) return -1
    if (new Date(a.data) === new Date(b.data)) return 0
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {



const { Schema, model } = __webpack_require__(0)

const good = new Schema({
    _id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },

})

module.exports = model('CartGoods', good)

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

const { Schema, model } = __webpack_require__(0)

const good = new Schema({
    event: {
        type: String,
        required: true
    },
    product: {
        type: Object,
        required: false
    },
    data: {
        type: String,
        required: true
    },
})

module.exports = model('Statistics', good)

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("connect-history-api-fallback");

/***/ })
/******/ ]);