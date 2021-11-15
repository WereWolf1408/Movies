import React, { useContext, useEffect } from 'react';
import { NetflixAppContext } from '../../../Context/Context';
import { Logo, SearchButton } from '@utils/utils';

import './MovieDetails.less';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { closeMovieDetails } from '../../../store/additionalReducer';

const CLASSES = {
  NETFLIX_APP_MOVIE_DETAILS: 'netflix-app__movie-details',
  NETFLIX_APP_MOVIE_DETAILS_BOTTOM_SECTION:
    'netflix-app__movie-details-bottom-section',
  NETFLIX_APP_MOVIE_DETAILS_IMAGE: 'netflix-app__movie-details-image',
  NETFLIX_APP_MOVIE_DETAILS_DETAILS_SECTION:
    'netflix-app__movie-details-details-section',
  NETFLIX_APP_MOVIE_DETAILS_TITLE: 'netflix-app__movie-details-title',
  NETFLIX_APP_MOVIE_DETAILS_GENRE: 'netflix-app__movie-details-genre',
  NETFLIX_APP_MOVIE_DETAILS_YEAR: 'netflix-app__movie-details-year',
  NETFLIX_APP_MOVIE_DETAILS_MARK: 'netflix-app__movie-details-mark',
  NETFLIX_APP_MOVIE_DETAILS_DURATION: 'netflix-app__movie-details-duration',
  NETFLIX_APP_MOVIE_DETAILS_TITLE_SECTION:
    'netflix-app__movie-details-title-section',
  NETFLIX_APP_MOVIE_DETAILS_YEAR_SECTION: 'netflix-app__movie-details-year-section',
  NETFLIX_APP_MOVIE_DETAILS_DESCRIPTION: 'netflix-app__movie-details-description',
  NETFLIX_APP_MOVIE_DETAILS_LOGO_SECTION: 'netflix-app__movie-details-logo-section',
};

export const MovieDetails = () => {
  const selectedMovie = useSelector((state: RootState) => {
    return state.additionalStore.selectedMovie;
  });
  const dispatch = useDispatch();

  const closeMoviewDetailsHandler = () => {
    dispatch(closeMovieDetails());
  };

  return (
    <section className={CLASSES.NETFLIX_APP_MOVIE_DETAILS}>
      <div className={CLASSES.NETFLIX_APP_MOVIE_DETAILS_LOGO_SECTION}>
        <Logo /> <SearchButton clickHandler={closeMoviewDetailsHandler} />
      </div>
      <div className={CLASSES.NETFLIX_APP_MOVIE_DETAILS_BOTTOM_SECTION}>
        <div className={CLASSES.NETFLIX_APP_MOVIE_DETAILS_IMAGE}>
          <img src={selectedMovie.poster_path} alt="" />
        </div>
        <div className={CLASSES.NETFLIX_APP_MOVIE_DETAILS_DETAILS_SECTION}>
          <div className={CLASSES.NETFLIX_APP_MOVIE_DETAILS_TITLE_SECTION}>
            <h1 className={CLASSES.NETFLIX_APP_MOVIE_DETAILS_TITLE}>
              {selectedMovie.title}
            </h1>
            <span className={CLASSES.NETFLIX_APP_MOVIE_DETAILS_MARK}>
              {selectedMovie.vote_average}
            </span>
          </div>
          <span className={CLASSES.NETFLIX_APP_MOVIE_DETAILS_GENRE}>
            {selectedMovie.genres.toString()}
          </span>
          <div className={CLASSES.NETFLIX_APP_MOVIE_DETAILS_YEAR_SECTION}>
            <span className={CLASSES.NETFLIX_APP_MOVIE_DETAILS_YEAR}>
              {selectedMovie.release_date}
            </span>
            <span className={CLASSES.NETFLIX_APP_MOVIE_DETAILS_DURATION}>
              {`${selectedMovie.runtime}min`}
            </span>
          </div>
          <span className={CLASSES.NETFLIX_APP_MOVIE_DETAILS_DESCRIPTION}>
            {selectedMovie.overview}
          </span>
        </div>
      </div>
    </section>
  );
};
