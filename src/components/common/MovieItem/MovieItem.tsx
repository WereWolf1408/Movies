import React, { useContext, useEffect, useState } from 'react';
import { MovieItemProps } from '../../../utils/interfaces';
import { ToolsIcon } from '@utils/utils';

import './MovieItem.less';
import { CloseIcon } from '../../../utils/utils';
import { NetflixAppContext } from '../../../Context/Context';
import { useDispatch } from 'react-redux';
import { setSetectedMovie } from '../../../store/rootReducer';

const CLASSES = {
  NETFLIX_APP_MOVIE: 'netflix-app__movie',
  NETFLIX_APP_MOVIE_iMAGE: 'netflix-app__movie-image',
  NETFLIX_APP_MOVIE_iMAGE_WRAPPER: 'netflix-app__movie-image-wrapper',
  NETFLIX_APP_MOVIE_YEAR_NAME: 'netflix-app__movie-year-name',
  NETFLIX_APP_MOVIE_GENRE: 'netflix-app__movie-genre',
  NETFLIX_APP_MOVIE_TOOLS: 'netflix-app__movie-tools',
  NETFLIX_APP_MOVIE_TOOLS_WINDOW: 'netflix-app__movie-tools-window',
  NETFLIX_APP_MOVIE_TOOLS_CLOSE: 'netflix-app__movie-tools-close',
  NETFLIX_APP_MOVIE_TOOLS_ITEM: 'netflix-app__movie-tools-item',
};

interface MovieProps {
  (props: { item: MovieItemProps }): JSX.Element;
}

export const MovieItem: MovieProps = ({
  item: {
    id,
    budget,
    genres,
    overview,
    poster_path,
    release_date,
    revenue,
    runtime,
    tagline,
    title,
    vote_average,
    vote_count,
  },
}) => {
  const dispatch = useDispatch();
  const { showDetails, showEditMoviePopup } =
    useContext(NetflixAppContext);
  const [showToolsOption, setShowToolsOption] = useState(false);

  const clickHandler = () => {
    setShowToolsOption((prevProp) => !prevProp);
  };

  const closeIconClickHandler = () => {
    setShowToolsOption(false);
  };

  const imageClickHandler = () => {
    dispatch(
      setSetectedMovie({
        movie: {
          id,
          budget,
          genres,
          overview,
          poster_path,
          release_date,
          revenue,
          runtime,
          tagline,
          title,
          vote_average,
          vote_count,
        },
      })
    );
    showDetails.handler(true);
  };

  //move logic from Context to Redux
  const editOptionClickHandler = () => {
    // movieDetail.handler(title, poster_path, 'genre', 2000);
    // showEditMoviePopup.handler(true);
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
          <div
            className={CLASSES.NETFLIX_APP_MOVIE_TOOLS_ITEM}
            onClick={editOptionClickHandler}
          >
            Edit
          </div>
          <div className={CLASSES.NETFLIX_APP_MOVIE_TOOLS_ITEM}>Delete</div>
        </div>
      )}
      <div className={CLASSES.NETFLIX_APP_MOVIE_iMAGE_WRAPPER}>
        <img
          className={CLASSES.NETFLIX_APP_MOVIE_iMAGE}
          src={poster_path}
          alt=""
          onClick={imageClickHandler}
        />
      </div>
      <div className={CLASSES.NETFLIX_APP_MOVIE_YEAR_NAME}>
        <span>{title}</span>
        <span>{release_date}</span>
      </div>
      <span className={CLASSES.NETFLIX_APP_MOVIE_GENRE}>{genres.toString()}</span>
    </div>
  );
};
