import axios from 'axios';

export const simpleFetch = () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/posts/3')
    .then((response) => {
      return {
        title: response.data.title,
        body: response.data.body,
      };
    });
};

export const getMovies = () => {
  return axios
    .get('http://localhost:4000/movies?offset=20&limit=20')
    .then((response) => {
      return {
        movies: response.data.data,
      };
    });
};
