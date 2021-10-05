import React, { useState } from 'react';
import { SingleMovieProps } from '@utils/interfaces';
import { ToolsIcon } from '@utils/utils';

import './style.less';
import { CloseIcon } from '../../../utils/utils';

const CLASSES = {
  NETFLIX_APP_MOVIE: 'netflix-app__movie',
  NETFLIX_APP_MOVIE_iMAGE: 'netflix-app__movie-image',
  NETFLIX_APP_MOVIE_YEAR_NAME: 'netflix-app__movie-year-name',
  NETFLIX_APP_MOVIE_GENRE: 'netflix-app__movie-genre',
  NETFLIX_APP_MOVIE_TOOLS: 'netflix-app__movie-tools',
  NETFLIX_APP_MOVIE_TOOLS_WINDOW: 'netflix-app__movie-tools-window',
  NETFLIX_APP_MOVIE_TOOLS_CLOSE: 'netflix-app__movie-tools-close',
  NETFLIX_APP_MOVIE_TOOLS_ITEM: 'netflix-app__movie-tools-item',
};

interface MovieItemProps {
  (props: { item: SingleMovieProps }): JSX.Element;
}

const MovieItem: MovieItemProps = ({ item: { src, title, year, genre } }) => {
  const [showToolsOption, setShowToolsOption] = useState(false);

  //temporary solution, later these functions will be moved in global context
  const clickHandler = () => {
    setShowToolsOption((prevProp) => !prevProp);
  };

  const closeIconClickHandler = () => {
    setShowToolsOption(false);
  };

  return (
    <div className={CLASSES.NETFLIX_APP_MOVIE}>
      <ToolsIcon
        classes={CLASSES.NETFLIX_APP_MOVIE_TOOLS}
        clickHandler={clickHandler}
      />
      {showToolsOption && (
        <div className={CLASSES.NETFLIX_APP_MOVIE_TOOLS_WINDOW}>
          <CloseIcon
            classes={CLASSES.NETFLIX_APP_MOVIE_TOOLS_CLOSE}
            clickHandler={closeIconClickHandler}
          />
          <div className={CLASSES.NETFLIX_APP_MOVIE_TOOLS_ITEM}>Edit</div>
          <div className={CLASSES.NETFLIX_APP_MOVIE_TOOLS_ITEM}>Delete</div>
        </div>
      )}
      <img className={CLASSES.NETFLIX_APP_MOVIE_iMAGE} src={src} alt="" />
      <div className={CLASSES.NETFLIX_APP_MOVIE_YEAR_NAME}>
        <span>{title}</span>
        <span>{year}</span>
      </div>
      <span className={CLASSES.NETFLIX_APP_MOVIE_GENRE}>{genre}</span>
    </div>
  );
};

export default MovieItem;