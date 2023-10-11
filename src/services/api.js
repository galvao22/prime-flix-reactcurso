import axios from "axios";
//baseUrl = 'https://api.themoviedb.org/3';
// url filmes em cartaz: /movie/now_playing?api_key=ce56fd5f8b6b48a9ab9a4681741f6ae4&language=pt-BR
//npm install axios

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;