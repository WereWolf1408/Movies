import React from 'react';
import {MovieItem} from '@common/MovieItem';
import { SingleMovieProps } from '@utils/interfaces';

import './MovieList.less';

const CLASSES = {
  NETFLIX_APP_MOVIE_LIST: 'netflix-app__movie-list',
};

interface MovieListProps {
  (props: { items: Array<SingleMovieProps> }): JSX.Element;
}

export const MovieList: MovieListProps = ({ items }) => (
  <ul className={CLASSES.NETFLIX_APP_MOVIE_LIST}>
    {items.map((item, index) => (
      <MovieItem key={index} item={item} />
    ))}
  </ul>
);