const { simpleFetch, getMovies } = require('../src/SSR/FetchData');

module.exports = [
  {
    path: '/search',
    fetchData: getMovies,
  },
  {
    path: '/search/:query',
    fetchData: simpleFetch,
  },
];
