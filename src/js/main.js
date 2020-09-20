


const baseURL = 'https://raw.githubusercontent.com/lotostoi/js2GeekBrains/lesson3/responses/'



// Переделать в ДЗ не fetch!!!!! а new Promise()
let getRequest = (url) => new Promise((res, rej) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status !== 200) {
                rej('Error');
            } else {
                res(xhr.responseText);
            }
        }
    };
    xhr.send();
}
)



class Good {

    constructor(good, img = 'http://placehold.it/150x200/') {

        let { id_product, product_name, price } = good

        this.id = id_product
        this.title = product_name
        this.price = price
        this.img = img
    }

    rander() {
        return `<div class="product-item" data-id="${this.id}">
                  <img src="${this.img}" alt="Some img">
                    <div class="desc">
                        <h3>${this.title}</h3>
                        <p>${this.price} \u20bd</p>
                        <button class="buy-btn">Add to cart</button>
                        <button class="buy-btn">Del from cart</button>
                    </div>
                </div>`;
    }
}



const ready = new Promise(res => res(true))

class ListGoods {

    #goods

    constructor(container = '.products') {

        this.container = document.querySelector(container)

        this.#goods = []

        this.allGoods = []

        this.url = baseURL + 'catalogData.json'

        this.resolve

        this.ready()

        this.#init()



    }

    ready() { return new Promise(res => { this.resolve = res }) }

    async #init() {

        await this.#fetchGoods()
        this.#rander()


    }

    async #fetchGoods() {

        let res = await getRequest(this.url)
        this.#goods = await JSON.parse(res)


    }


    #rander() {

        for (let good of this.#goods) {

            const newGood = new Good(good)
            this.allGoods.push(newGood)
            this.container.insertAdjacentHTML('beforeend', newGood.rander())

        }
        this.resolve()

    }

    // method for calculating of all sum 

    async allSummAllGoods() {

        await this.ready()

        return this.allGoods.length > 0 ? this.allGoods.reduce((accum, good) => accum + good.price, 0) : 0

    }

}


// ******************************** Classes for cart ******************************************

class GoodInCart extends Good {

    constructor(goodInCart, img = 'http://placehold.it/100x100/') {

        super(goodInCart, img)

        this.amount = goodInCart.quantity
    }

    rander() {

        return `                
                <div class="cart__prodact" data-id="${this.id}">

                    <div class = "cart__imgCont">

                        <img class="cart__img" src="${this.img}" alt="${this.title}">

                    </div>

                    <h3 class = "cart__title" data-name="${this.id}">${this.title} </h3>

                    <span class="cart__price" data-price="${this.id}">${this.price}\u20bd</span>

                    <span class="cart__all-price" data-all-price="${this.id}">${this.amount * this.price} \u20bd</span>

                    <div class="cart__quantity">

                        <button data-inc="${this.id}"> + </button>

                        <span data-quantity="${this.id}">${this.amount}</span>

                        <button data-dec="${this.id}"> - </button>

                    </div>

                </div>`;

    }
}



class Cart /* extends ListGoods */ {
    
    #goodsInCart

    constructor(container = '.cart__products') {

       // super(container)

        this.container = document.querySelector(container)

        this.#goodsInCart = []

        this.allSum = null

        this.allAmount = null

        this.url = "getBasket.json"

        this.#init()

    }

    async #init() {

        await this.#fetchGoodsInCart()

        this.calcAllSumm()

        this.calcAllAmount()

        this.rander()

    }

    async #fetchGoodsInCart() {

     
        let res = await fetch(baseURL+this.url)

        res = await res.json()

        console.log(res)

        this.#goodsInCart = res.contents

    }

    rander() {

        for (let good of this.#goodsInCart) {

            const newGood = new GoodInCart(good)

          //  this.allGoods.push(newGood)

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


(async () => {



    const cart =  new Cart()
    console.log(cart)

    const cotalog = new ListGoods()

    let allSum = await cotalog.allSummAllGoods()

    const cartWrapper = document.querySelector('.cart')

    const closeCart = document.querySelector('.cart__close')

    const showCart = document.querySelector('.btn-cart')

    const cartProducts = document.querySelector('.cart__products')

 
    const hidenShowCart = (e) => {

        cartWrapper.classList.toggle('cart-active')

    }

    closeCart.addEventListener('click', hidenShowCart )

    showCart.addEventListener('click', hidenShowCart )




})()

