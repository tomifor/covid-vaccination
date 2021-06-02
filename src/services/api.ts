import Axios from 'axios'


const api = Axios.create({
  baseURL: 'https://covidstats.com.ar/ws',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default api

