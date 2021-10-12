import React, { useContext, useEffect, useState } from 'react';
import { SingleMovieProps } from '@utils/interfaces';
import { ToolsIcon } from '@utils/utils';

import './MovieItem.less';
import { CloseIcon } from '../../../utils/utils';
import { NetflixAppContext } from '../../../Context/Context';

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

export const MovieItem: MovieItemProps = ({ item: { src, title, year, genre } }) => {
  //is it ok to use Context here!?
  const { movieDetail, showDetails, showEditMoviePopup } = useContext(NetflixAppContext);
  const [showToolsOption, setShowToolsOption] = useState(false);

  //temporary solution, later these functions will be moved in global context
  const clickHandler = () => {
    setShowToolsOption((prevProp) => !prevProp);
  };

  const closeIconClickHandler = () => {
    setShowToolsOption(false);
  };

  const imageClickHandler = () => {
    movieDetail.handler(title, src, genre, year);
    showDetails.handler(true);
  };

  const editOptionClickHandler = () => {
    movieDetail.handler(title, src, genre, year);
    showEditMoviePopup.handler(true);
  };

  useEffect(() => {
    console.log('movie detal props');
    console.log(movieDetail);
  });

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
          <div
            className={CLASSES.NETFLIX_APP_MOVIE_TOOLS_ITEM}
            onClick={editOptionClickHandler}
          >
            Edit
          </div>
          <div className={CLASSES.NETFLIX_APP_MOVIE_TOOLS_ITEM}>Delete</div>
        </div>
      )}
      <img
        className={CLASSES.NETFLIX_APP_MOVIE_iMAGE}
        src={src}
        alt=""
        onClick={imageClickHandler}
      />
      <div className={CLASSES.NETFLIX_APP_MOVIE_YEAR_NAME}>
        <span>{title}</span>
        <span>{year}</span>
      </div>
      <span className={CLASSES.NETFLIX_APP_MOVIE_GENRE}>{genre}</span>
    </div>
  );
};
