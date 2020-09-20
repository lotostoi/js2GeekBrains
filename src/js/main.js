



class Good {

    constructor(good, img = 'http://placehold.it/150x200/') {

        let { id, title, price } = good

        this.id = id
        this.title = title
        this.price = price
        this.img = img
    }

    rander() {
        return `<div class="product-item" data-id="${this.id}">
                  <img src="${this.img}" alt="Some img">
                    <div class="desc">
                        <h3>${this.title}</h3>
                        <p>${this.price} \u20bd</p>
                        <button class="buy-btn">Купить</button>
                    </div>
                </div>`;
    }
}


class ListGoods {

    #goods

    constructor(container = '.products') {

        this.container = document.querySelector(container)
        this.#goods = []
        this.allGoods = []
        this.#init()

    }

    #init() {
        this.#fetchGoods()
        this.#rander()
    }

    #fetchGoods() {
        this.#goods = [
            { id: 1, title: 'Notebook', price: 20000 },
            { id: 2, title: 'Mouse', price: 1500 },
            { id: 3, title: 'Keyboard', price: 5000 },
            { id: 4, title: 'Gamepad', price: 4500 },
        ];
    }


    #rander() {

        for (let good of this.#goods) {

            const newGood = new Good(good)
            this.allGoods.push(newGood)
            this.container.insertAdjacentHTML('beforeend', newGood.rander())

        }

    }

    // method for calculating of all sum 

    allSummAllGoods() {

        return this.allGoods.length > 0 ? this.allGoods.reduce((accum, good) => accum + good.price, 0) : 0

    }

}


// ******************************** Classes for cart ******************************************

class GoodInCart extends Good {

    constructor(goodInCart, img = 'http://placehold.it/150x200/') {

        super(goodInCart, img)

        this.amount = goodsInCart.quantity
    }

    rander() {

        return ` template of good in the cart   `;

    }
}



class Cart extends ListGoods {

    constructor(container = '.cartBoody') {

        super(container)

        this.goodsInCart = []

        this.container = document.querySelector(container)

        this.allSum = null

        this.allAmount = null

        this.#init()

    }

    #init() {

        this.calcAllSumm()

        this.calcAllAmount()

        this.rander()

    }

    #fetchGoodsInCart() {

    }

    rander() {

        for (let good of this.goods) {

            const newGood = new GoodInCart(good)
            this.allGoods.push(newGood)
            this.container.insertAdjacentHTML('beforeend', newGood.rander())

        }

    }

    // adding good(with id = id) in the cart
    addToCart(id) { }

    // removing good((with id = id)) from the cart
    removeFromCart(id) { }

    // increment amount good(with id = id)  in cart
    incToCart(id) { }

    // decrement amount good(with id = id)  in cart
    decToCart(id) { }

    //claer  all cart 
    claerCart() { }

    calcAllAmount() { }

    calcAllSumm() { }

}




const cotalog = new ListGoods()

console.log(cotalog.allSummAllGoods())
