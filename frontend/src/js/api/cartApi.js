import { http } from "./http"

export const all = async () => {
    let { data } = await http.get('cartGoods')
    return data
}

export const statistics = async () => {
    let { data } = await http.get('statistics')
    return data
}

export const add = async (id) => {
    let { data: { result } } = await http.post(`add`, { id: id })
    return result
}

export const inc = async (id) => {
    let { data: { result } } = await http.put(`inc`, { id: id })
    return result
}

export const remove = async (id) => {
    let { data: { result } } = await http.delete(`remove/${id}`)
    return result
}

export const dec = async (id) => {
    let { data: { result } } = await http.put(`dec`, { id: id })
    return result
}

export const removeAll = async () => {
    let { data: { result } } = await http.delete(`delAll`)
    return result
}