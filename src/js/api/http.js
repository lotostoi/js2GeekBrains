
import axios from "axios"

export const http = axios.create({
    baseURL: 'https://raw.githubusercontent.com/lotostoi/js2GeekBrains/lesson3/responses/',
    timeout: 10000,
})



