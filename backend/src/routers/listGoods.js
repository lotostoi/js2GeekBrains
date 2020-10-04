const express = require('express');
const router = express.Router();
const ListGoods = require('../models/goods')

router.get('/goods', async (req, res) => {
    const goods = await ListGoods.find()
    res.json(goods)
})

module.exports = router