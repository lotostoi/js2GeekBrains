import { http } from "./http"

export const all = async () => {

    let { data } = await http.get('cartGoods')
    return data

}
export const inc = async (id) => {

    let { data: { result } } = await http.get(`add`, { params: { id: id } })
    return result

}
export const dec = async (id) => {

    let { data: { result } } = await http.get(`del`, { params: { id: id } })
    return result

}