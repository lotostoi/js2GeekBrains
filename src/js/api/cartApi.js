import { http } from "./http"

export const all = async () => {

    let {data:{contents}} = await http.get(Math.random() < 0.9 ?'getBasket.json': 'empty')
    return contents

}
export const inc = async () => {

    let {data:{result}} = await http.get(Math.random() < 0.8 ?'addToBasket.json':'empty')
    return result

}
export const dec = async () => {

    let {data:{result}} = await http.get(Math.random() < 0.8 ?'deleteFromBasket.json': 'empty')
    return result

}