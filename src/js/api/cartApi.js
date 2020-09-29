import { http } from "./http"

export const all = async () => {

    let {data:{contents}} = await http.get('getBasket.json')
    return contents

}
export const inc = async () => {

    let {data:{result}} = await http.get('addToBasket.json')
    return result

}
export const dec = async () => {

    let {data:{result}} = await http.get('deleteFromBasket.json')
    return result

}