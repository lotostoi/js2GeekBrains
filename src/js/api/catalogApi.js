import { http } from "./http"

export const all = async () => {

    let {data} = await http.get( Math.random() < 0.9 ? 'catalogData.json': 'empty')
    return data

}