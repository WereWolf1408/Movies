import React, { useEffect, useState } from 'react';
import { MovieItem } from '../../common/MovieItem';
import { MovieItemProps } from '../../../utils/interfaces';

import './MovieList.less';

const CLASSES = {
  NETFLIX_APP_MOVIE_LIST: 'netflix-app__movie-list',
};

interface MovieListProps {
  (props: { items: Array<MovieItemProps> }): JSX.Element;
}

export const MovieList: MovieListProps = ({ items }) => {
  const [showMovieOptionsId, setShowMovieOptionsId] = useState<number>(null);
  const closeMovieOptionsHandler = () => {
    setShowMovieOptionsId(null);
  };

  const openMovieOptionsHandler = (movieId: number) => {
    setShowMovieOptionsId(movieId);
  };

  useEffect(() => {
    const windowClickHandler = (event: MouseEvent) => {
      const svgElemet = event.target as SVGAElement;
      const { tagName } = svgElemet;
      if (tagName !== 'circle') {
        setShowMovieOptionsId(null);
      }
    };
    window.addEventListener('click', windowClickHandler);
    return () => window.removeEventListener('click', windowClickHandler);
  }, []);

  return (
    <ul className={CLASSES.NETFLIX_APP_MOVIE_LIST}>
      {items.map((item, index) => (
        <MovieItem
          key={index}
          item={item}
          showMovieOptions={showMovieOptionsId === item.id}
          closeMovieOptionsHandler={closeMovieOptionsHandler}
          openMovieOptionsHandler={openMovieOptionsHandler}
        />
      ))}
    </ul>
  );
};
