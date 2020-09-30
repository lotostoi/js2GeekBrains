import { http } from "./http"

export const all = async () => {

    let {data:{contents}} = await http.get(Math.random() < 0.8 ?'getBasket.json': 'drt')
    return contents

}
export const inc = async () => {

    let {data:{result}} = await http.get(Math.random() < 0.8 ?'addToBasket.json':'rty')
    return result

}
export const dec = async () => {

    let {data:{result}} = await http.get(Math.random() < 0.8 ?'deleteFromBasket.json': 'rty')
    return result

}