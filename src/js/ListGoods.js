import Good from './Good'
import Cart from './Cart'
import constants from './constants'
import getRequest from './toPromis'
import Seacrh from './Search'

class ListGoods {
  privat = { goodsForWork: [] }
  constructor(container = '.products') {
    this.container = document.querySelector(container)
    this.#goods = []
    this.allGoods = []
    this.resolve
    this.cart = new Cart()
    this.search = null
    this.ready()
    this.#init()
  }

  ready() {
    return new Promise((res) => {
      this.resolve = res
    })
  }

  async #init() {
    await this.#fetchGoods()
    this.search = new Seacrh('.search', this.#goods)
    this.goodsForWork = this.search.catalogFilter
    this.#rander()
    this.#handler()
  }

  get goodsForWork() {
    return this.privat.goodsForWork
  }
  set goodsForWork(val) {
    this.privat.goodsForWork = val
    console.log('ttt')
    this.#rander()
    return true
  }

  async #fetchGoods() {
    let res = await getRequest(constants.catalog)
    this.#goods = await JSON.parse(res)
  }

  #rander() {
    this.container.innerHTML = ''
    for (let good of this.goodsForWork) {
      const newGood = new Good(good)
      this.allGoods.push(newGood)
      this.container.insertAdjacentHTML('beforeend', newGood.rander())
    }
    this.resolve()
  }

  #handler() {
    let body = document.querySelector('body')
    this.container.addEventListener('click', (e) => {
      if (e.target.className === 'addToCart') {
        let id = e.target.dataset.id
        this.cart.addToCart(
          this.allGoods.find((good) => good.id.toString() === id.toString())
        )
      }

      if (e.target.className === 'dellFromCart') {
        let id = e.target.dataset.id
        this.cart.removeFromCart(
          this.allGoods.find((good) => good.id.toString() === id.toString())
        )
      }
    })
    body.addEventListener('search', () => {
      this.goodsForWork = this.search.catalogFilter
    })
  }

  // method for calculating of all sum

  async allSummAllGoods() {
    await this.ready()
    return this.allGoods.length > 0
      ? this.allGoods.reduce((accum, good) => accum + good.price, 0)
      : 0
  }
}

export default ListGoods
