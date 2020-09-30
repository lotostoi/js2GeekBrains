import { http } from "./http"

export const all = async () => {

    let {data} = await http.get( Math.random() < 0.8 ? 'catalogData.json': 'rty')
    return data

}