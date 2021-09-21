import React from 'react';
import { SingleMovieProps } from '@utils/interfaces';

import './MovieItem.less';

const CLASSES = {
  NETFLIX_APP_MOVIE: 'netflix-app__movie',
  NETFLIX_APP_MOVIE_iMAGE: 'netflix-app__movie-image',
  NETFLIX_APP_MOVIE_YEAR_NAME: 'netflix-app__movie-year-name',
  NETFLIX_APP_MOVIE_GENRE: 'netflix-app__movie-genre',
};

interface MovieItemProps {
  (props: { item: SingleMovieProps }): JSX.Element;
}

export const MovieItem: MovieItemProps = ({ item: { src, title, year, genre } }) => {
  return (
    <div className={CLASSES.NETFLIX_APP_MOVIE}>
      <img
        className={CLASSES.NETFLIX_APP_MOVIE_iMAGE}
        src={src}
        alt=""
      />
      <div className={CLASSES.NETFLIX_APP_MOVIE_YEAR_NAME}>
        <span>{title}</span>
        <span>{year}</span>
      </div>
      <span className={CLASSES.NETFLIX_APP_MOVIE_GENRE}>{genre}</span>
    </div>
  );
};
