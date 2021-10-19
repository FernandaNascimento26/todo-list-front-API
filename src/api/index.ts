import axios from 'axios';

//CRIANDO UMA INSTANCIA DO AXIOS
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export default api ;


