const { Schema, model } = require('mongoose')

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