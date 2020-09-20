import GoodInCart from "./GoodInCart"

import constants from "./constants"

class Cart {

    constructor(container = '.cart__products') {

        this.container = document.querySelector(container)

        this._goodsInCart = []

        this.prodCart = []

        this.cartCont = document.querySelector('.cart')

        this.allSum = document.querySelector('.allsum')

        this.closeCart = document.querySelector('.cart__close')

        this.showCart = document.querySelector('.btn-cart')

        this.Quantity = document.querySelector('.allquantity')

        this.Amount = document.querySelector('.amount')

        this._init()

    }

    async _init() {

        await this._fetchGoodsInCart()

        this._addcalc()

        this._handler()

    }

    _addcalc() {

        this.allSum.innerHTML = this.calcAllCart().allSum

        this.Quantity.innerHTML = this.calcAllCart().allQuantity

        this.Amount.innerHTML = this.calcAllCart().allQuantity

        this.rander()
    }

    async _fetchGoodsInCart() {

        let res = await fetch(constants.cart)

        res = await res.json()

        this._goodsInCart = res.contents

    }

    rander() {

        this.container.innerHTML = ''

        for (let good of this._goodsInCart) {

            const newGood = new GoodInCart(good)

            this.container.insertAdjacentHTML('beforeend', newGood.rander())

        }

    }


    async addToCart(good) {

        let res = await fetch(constants.addCart)

        res = await res.json()

        if (!this._isInCartId(good.id) && res.result === 1) {

            good.quantity = 1

            this._goodsInCart.push(good)

            this._addcalc()

        }

    }

    async removeFromCart(good) {

        let res = await fetch(constants.delCart)

        res = await res.json()

        if (this._isInCartId(good.id) && res.result === 1) {

            let index = this._indexInCartId(good.id)

            this._goodsInCart.splice(index, 1)

            this._addcalc()
        }


    }

    async incCart(id) {

        let res = await fetch(constants.addCart)

        res = await res.json()


        if (this._isInCartId(id) && res.result === 1) {


            let index = this._indexInCartId(id)

            this._goodsInCart[index].quantity++

            this._addcalc()
        }

    }

    async decCart(id) {

        let res = await fetch(constants.delCart)

        res = await res.json()

        if (this._isInCartId(id) && res.result === 1) {

            let index = this._indexInCartId(id)

            if (this._goodsInCart[index].quantity == 1) {

                this._goodsInCart.splice(index, 1)
            }
            else {
                this._goodsInCart[index].quantity--
            }
            this._addcalc()
        }

    }

    async claerCart() {

        let res = await fetch(constants.delCart)

        res = await res.json()

        if (res.result === 1) {

            this._goodsInCart = []
            this._addcalc()
        }
    }

    calcAllCart() {

        return {
            allQuantity: this._goodsInCart.reduce((start, good) => start + good.quantity, 0),

            allSum: this._goodsInCart.reduce((start, good) => start + good.quantity * good.price, 0),
        }
    }

    _isInCartId(id) {

        return this._goodsInCart.find(good => good.id == id)

    }

    _indexInCartId(id) {

        return this._goodsInCart.findIndex(good => good.id == id)

    }

    _handler() {

        this.cartCont.addEventListener('click', (e) => {

            if (e.target.dataset.inc) {

                let id = e.target.dataset.inc

                this.incCart(id)
            }

            if (e.target.dataset.dec) {

                let id = e.target.dataset.dec

                this.decCart(id)
            }

            if (e.target.id === "claerCart") {

                this.claerCart()
            }

        })

        let hidenShowCart = (function () {

            this.cartCont.classList.toggle('cart-active')

        }).bind(this)

        this.closeCart.addEventListener('click', hidenShowCart)

        this.showCart.addEventListener('click', hidenShowCart)

    }

}

export default Cart