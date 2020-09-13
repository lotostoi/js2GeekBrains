const products = [
    {id: 1,/*  title: 'Notebook', */ price: 20000, imglink:'http://placehold.it/150x200/'},
    {id: 2, title: 'Mouse', price: 1500, imglink:'http://placehold.it/150x200/'},
    {id: 3, title: 'Keyboard', /* price: 5000, */ imglink:'http://placehold.it/150x200/'},
    {id: 4, title: 'Gamepad', price: 4500, imglink:'http://placehold.it/150x200/'},
];

const renderProduct = ({ title = 'someproduct', price = 3000, imglink = "http://placehold.it/200x200/"}) => {
    return `<div class="product-item">
                 <img src = "${imglink}"/>   
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить в корзину</button>
              </div>`;
};

const renderProducts = (list) => {
    const productList = list.map((product) => {
        return renderProduct(product);
    }).join('');
    document.querySelector('.products').innerHTML = productList;
};

renderProducts(products);
