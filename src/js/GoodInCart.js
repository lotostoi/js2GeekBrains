import Good from "./Good"


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


export default GoodInCart