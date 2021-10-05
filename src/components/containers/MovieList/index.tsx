import React from 'react';
import MovieItem from '@common/MovieItem';
import { SingleMovieProps } from '@utils/interfaces';

import './style.less';

const CLASSES = {
  NETFLIX_APP_MOVIE_LIST: 'netflix-app__movie-list',
};

interface MovieListProps {
  (props: { items: Array<SingleMovieProps> }): JSX.Element;
}

const MovieList: MovieListProps = ({ items }) => (
  <ul className={CLASSES.NETFLIX_APP_MOVIE_LIST}>
    {items.map((item, index) => (
      <MovieItem key={index} item={item} />
    ))}
  </ul>
);

export default MovieList;
