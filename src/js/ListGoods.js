import Good  from "./Good"
import Cart  from "./Cart"
import constants from "./constants"
import getRequest from "./toPromis"


let baseURL = constants.baseURL

class ListGoods {

    constructor(container = '.products') {

        this.container = document.querySelector(container)

        this._goods = []

        this.allGoods = []

        this.url = baseURL + 'catalogData.json'

        this.resolve

        this.cart = new Cart

        this.ready()

        this._init()

    }

    ready() { return new Promise(res => { this.resolve = res }) }

    async _init() {

        await this._fetchGoods()
        this._rander()
        this._handler()


    }

    async _fetchGoods() {

        let res = await getRequest(this.url)
        this._goods = await JSON.parse(res)


    }


    _rander() {

        for (let good of this._goods) {

            const newGood = new Good(good)
            this.allGoods.push(newGood)
            this.container.insertAdjacentHTML('beforeend', newGood.rander())

        }
        this.resolve()

    }

    _handler() {

        this.container.addEventListener('click', (e) => {

            if (e.target.className === 'addToCart') {

                let id = e.target.dataset.id



                this.cart.addToCart(this.allGoods.find(good => good.id.toString() === id.toString()))

            }


        })


    }

    // method for calculating of all sum 

    async allSummAllGoods() {

        await this.ready()

        return this.allGoods.length > 0 ? this.allGoods.reduce((accum, good) => accum + good.price, 0) : 0

    }

}

export default ListGoods