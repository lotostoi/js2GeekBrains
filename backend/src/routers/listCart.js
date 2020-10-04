const express = require('express');
const moment = require('moment')
const router = express.Router();
const CartGoods = require('../models/cartGoods')
const ListGoods = require('../models/goods')
const CartStatistics = require('../models/cartStatistics')

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
