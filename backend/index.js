const PORT = 3050
// for build
const isProd = process.isProduction

const urlForProxy = isProd ? '/' : '/api/'

const path = require('path')
const bodyParser = require('body-parser');
const express = require('express')
const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

// import routers
const listGoodsRout = require('./src/routers/listGoods')
const listCartRout = require('./src/routers/listCart')

const app = express()

const history = require('connect-history-api-fallback');

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