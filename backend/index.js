const PORT = 3000
const bodyParser = require('body-parser');
const path = require('path')

const express = require('express')

const mongoose = require('mongoose')


const ListGoods = require('./src/models/goods')

const CartGoods = require('./src/models/listCartGoods')

/* const commonRoutes = require('./routes/commonRoutes')

const picturesRoutes = require('./routes/pictures')

const getImgRoutes = require('./routes/getImg')

const delByIdRoutes = require('./routes/delById') */



const app = express()

app.use(express.static(path.join(__dirname, 'files')));

app.use(express.static(path.join(__dirname, 'img')));

//app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.get('/api/goods', async (req,res)=>{    
    const goods = await ListGoods.find()
    res.json(goods)
})
app.get('/api/cartGoods',async (req,res)=>{
    const cartGoods = await CartGoods.find()
    res.json(cartGoods)
})
app.get('/api/add/:id',async (req,res)=>{
    console.log(req.params)
    const cartGoods = await CartGoods.find()
    res.json(cartGoods)
})





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