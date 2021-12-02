import React from 'react';
import { MovieItemProps } from '../../../utils/interfaces';
import { ToolsIcon } from '../../../utils/utils';

import './MovieItem.less';
import { CloseIcon } from '../../../utils/utils';
import { AppDispatch } from '../../../Redux/store';
import { setSetectedMovie } from '../../../Redux/reducers/additionalReducer';
import { showEditMovieModal } from '../../../Redux/reducers/modalWindowsReducer';
import { removeMovieById, getData } from '../../../Redux/ajaxActions';

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
  (props: {
    item: MovieItemProps;
    showMovieOptions: boolean;
    openMovieOptionsHandler: (movieId: number) => void;
    closeMovieOptionsHandler: () => void;
  }): JSX.Element;
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
  showMovieOptions,
  openMovieOptionsHandler,
  closeMovieOptionsHandler,
}) => {
  const dispatch = AppDispatch();

  const imageClickHandler = () => {
    dispatch(
      setSetectedMovie({
        movie: {
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
  };

  const editOptionClickHandler = () => {
    dispatch(
      showEditMovieModal({
        movie: {
          budget,
          genres,
          overview,
          poster_path,
          id,
          revenue,
          tagline,
          vote_count,
          release_date,
          runtime,
          title,
          vote_average,
        },
      })
    );
  };

  const deleteMovieHandler = () => {
    dispatch(removeMovieById(id))
      .unwrap()
      .then(() => {
        dispatch(getData(20));
      });
  };

  return (
    <div className={CLASSES.NETFLIX_APP_MOVIE}>
      <ToolsIcon
        classes={CLASSES.NETFLIX_APP_MOVIE_TOOLS}
        clickHandler={() => openMovieOptionsHandler(id)}
      />
      {showMovieOptions && (
        <div className={CLASSES.NETFLIX_APP_MOVIE_TOOLS_WINDOW}>
          <CloseIcon
            classes={CLASSES.NETFLIX_APP_MOVIE_TOOLS_CLOSE}
            clickHandler={closeMovieOptionsHandler}
          />
          <div
            className={CLASSES.NETFLIX_APP_MOVIE_TOOLS_ITEM}
            onClick={editOptionClickHandler}
          >
            Edit
          </div>
          <div
            className={CLASSES.NETFLIX_APP_MOVIE_TOOLS_ITEM}
            onClick={deleteMovieHandler}
          >
            Delete
          </div>
        </div>
      )}
      <div className={CLASSES.NETFLIX_APP_MOVIE_iMAGE_WRAPPER}>
        <img
          className={CLASSES.NETFLIX_APP_MOVIE_iMAGE}
          src={poster_path}
          alt="image"
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
