const quantityGoods = 100

const mongoose = require('mongoose')

const { Schema, model } = require('mongoose')

const catalog = require('./src/dataForCreateCatalog')

const start = async () => {
    
    try {

        const link = 'mongodb+srv://lotos_toi:G0fdQ7GKoTODMmRM@cluster0.n6oze.mongodb.net/jsSecondCourseGeekBarins?retryWrites=true&w=majority'

        await mongoose.connect(link, { useNewUrlParser: true, useUnifiedTopology: true })

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

        let modelGoods = model('ListGoods', good)

        const goods = catalog(quantityGoods)

        for (let good of goods) {

            await new modelGoods({
                title: good.title,
                price: good.price,
                img: good.img,
                description: good.description
            }).save()
            console.log('+')
        }
        console.log('Date base has been craeted...')

    }
    catch (e) {
        console.error(e)
    }
}

start()

