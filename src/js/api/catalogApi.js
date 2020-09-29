import { http } from "./http"

export const all = async () => {

    let {data} = await http.get('catalogData.json')
    return data

}