const quantityGoods = 100

const mongoose = require('mongoose')

const ListGoods = require('./src/models/goods')

const catalog = require('./src/dataForCreateCatalog')

const start = async () => {
    
    try {

        const link = 'mongodb+srv://lotos_toi:G0fdQ7GKoTODMmRM@cluster0.n6oze.mongodb.net/jsSecondCourseGeekBarins?retryWrites=true&w=majority'

        await mongoose.connect(link, { useNewUrlParser: true, useUnifiedTopology: true })

        

        const goods = catalog(quantityGoods)

        for (let good of goods) {

            await new ListGoods({
                title: good.title,
                price: good.price,
                img: good.img,
                description: good.description
            }).save()
            console.log('+')
        }
        console.log('Date base has been craeted...')
        mongoose.connection.close()
    }
    catch (e) {
        console.error(e)
    }
}

start()

