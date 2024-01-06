import axios from 'axios';

const {
  VITE_API_MOVIE_AUTHORIZATION: AUTHORIZATION,
} = import.meta.env;


const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${AUTHORIZATION}`,
  },
});

export default api;
