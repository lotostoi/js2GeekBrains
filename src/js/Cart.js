import GoodInCart  from "./GoodInCart"
import constants from "./constants"

let baseURL = constants.baseURL

class Cart {

    constructor(container = '.cart__products') {


        this.container = document.querySelector(container)

        this._goodsInCart = []

        this.prodCart = []

        this.allSum = null

        this.allAmount = null

        this.url = "getBasket.json"

        this._init()

    }

    async _init() {

        await this._fetchGoodsInCart()

        this.calcAllSumm()

        this.calcAllAmount()

        this.rander()

    }

    async _fetchGoodsInCart() {


        let res = await fetch(baseURL + this.url)

        res = await res.json()

        console.log(res)

        this._goodsInCart = res.contents

    }

    rander() {

        this.container.innerHTML = ''

        for (let good of this._goodsInCart) {

            const newGood = new GoodInCart(good)

            this.container.insertAdjacentHTML('beforeend', newGood.rander())

        }

    }

 
    addToCart(good) {

        console.log(good)

        if (!this._isInCartId(good.id)) {

            good.quantity = 1

            this.prodCart.push(good)

           

        } else {
            let index = this._indexInCartId(good.id)
            this.prodCart[index].quantity++
        }

        this.rander()

    }

    // removing good((with id = id)) from the cart

    removeFromCart(id) { }

    //claer  all cart 

    claerCart() { }

    calcAllAmount() { }

    calcAllSumm() { }

    _isInCartId(id) {

        return this._goodsInCart.find(good => good.id == id)

    }

    _indexInCartId(id) {

        return this._goodsInCart.findIndex(good => good.id == id)

    }

}


export default Cart