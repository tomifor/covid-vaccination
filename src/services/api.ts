import Axios from 'axios';

const api = Axios.create({
  baseURL: 'https://covidstats.com.ar/ws',
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export default api;
