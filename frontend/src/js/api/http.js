
import axios from "axios"

export const http = axios.create({
    baseURL: isDevelopment ? '/api/' : '/',
    timeout: 10000,
})



