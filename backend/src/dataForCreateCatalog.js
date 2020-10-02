const names = [
    'Phone',
    'TV',
    'Tablet PC',
    'Headphones',
    'Camera',
    'Player',
    "Monitor",
    "Hardisk",
    "Memmory",
    "Mouse",
    "Router",
    "Video card"
]

const string = "QWERTYUIOPASDFGHJKLZXCVBNM"


const createGood = (name, price, img) => ({
    title: `${name}`,
    price: price,
    img: `${img}`,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit distinctio voluptatibus cupiditate ipsam pariatur sint saepe reiciendis sapiente exercitationem quae, numquam corporis quisquam nostrum nobis laborum. Asperiores non, dolorem eum perspiciatis culpa aspernatur laborum ad similique unde accusantium omnis distinctio perferendis rem molestias? Id dolore perspiciatis corrupti rerum aut similique atque unde earum nesciunt aliquid consequatur, laboriosam exercitationem facilis iusto illo ducimus. Quia iure natus voluptates animi vitae maxime ea harum repellendus nisi aut nostrum quos, facilis corporis sunt tenetur omnis id quo fuga minus praesentium dignissimos eum consequatur! Maxime adipisci culpa, sit rerum, pariatur dolorem aliquam a doloribus eveniet odio et consectetur ea similique labore aperiam molestias suscipit? Necessitatibus nam magnam libero praesentium recusandae nesciunt quia cumque illo unde enim vitae tenetur, labore inventore, quasi sit quos fuga omnis ratione minus porro ullam mollitia! Ex, unde reiciendis quas ab facilis esse voluptas assumenda sit maiores, officiis itaque incidunt aut?"
})


const catalog = (numderGoods) => {

    let title, price, img = 'http://placehold.it/100x100/', goods = []

    for (let i = 0; i < numderGoods; i++) {

        title = names[getRandomNumbe(0, 11)] + " " + getRandomNumbe(1, 9).toString() + getRandomNumbe(1, 9).toString() + string[getRandomNumbe(0, 25)] + string[getRandomNumbe(0, 25)]
        price = getRandomNumbe(0, 100) * 10
        goods.push(createGood(title, price, img))
    }

    return goods

}

function getRandomNumbe(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

module.exports = catalog
