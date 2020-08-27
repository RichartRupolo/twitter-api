import axios from 'axios'

const api = axios.create({
    baseURL: 'urlapitwitter'
})


export default api