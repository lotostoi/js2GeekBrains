

const { Schema, model } = require('mongoose')

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