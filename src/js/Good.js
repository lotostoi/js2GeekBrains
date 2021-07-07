
//

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
                        <button class="addToCart" data-id="${this.id}">Add to cart</button>
                        <button class="dellFromCart" data-id="${this.id}">Remove</button>
                    </div>
                </div>`;
    }
}

export default Good