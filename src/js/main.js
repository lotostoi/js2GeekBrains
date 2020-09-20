
import "../css/style.scss"

import ListGoods  from "./ListGoods"


(async () => {



    const cotalog = new ListGoods()


    const cartWrapper = document.querySelector('.cart')

    const closeCart = document.querySelector('.cart__close')

    const showCart = document.querySelector('.btn-cart')

    const cartProducts = document.querySelector('.cart__products')


    const hidenShowCart = (e) => {

        cartWrapper.classList.toggle('cart-active')

    }

    closeCart.addEventListener('click', hidenShowCart)

    showCart.addEventListener('click', hidenShowCart)




})()

