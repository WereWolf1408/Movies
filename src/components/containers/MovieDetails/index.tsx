import React, { useContext, useEffect } from 'react';
import { NetflixAppContext } from '../../../Context';
import { Logo, SearchButton } from '@utils/utils';

import './style.less';

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
  const { movieDetail, showDetails } = useContext(NetflixAppContext);

  return (
    <section className={CLASSES.NETFLIX_APP_MOVIE_DETAILS}>
      <div className={CLASSES.NETFLIX_APP_MOVIE_DETAILS_LOGO_SECTION}>
        <Logo /> <SearchButton clickHandler={() => showDetails.handler()} />
      </div>
      <div className={CLASSES.NETFLIX_APP_MOVIE_DETAILS_BOTTOM_SECTION}>
        <div className={CLASSES.NETFLIX_APP_MOVIE_DETAILS_IMAGE}>
          <img src={movieDetail.props.imgUrl} alt="" />
        </div>
        <div className={CLASSES.NETFLIX_APP_MOVIE_DETAILS_DETAILS_SECTION}>
          <div className={CLASSES.NETFLIX_APP_MOVIE_DETAILS_TITLE_SECTION}>
            <h1 className={CLASSES.NETFLIX_APP_MOVIE_DETAILS_TITLE}>
              {movieDetail.props.title}
            </h1>
            <span className={CLASSES.NETFLIX_APP_MOVIE_DETAILS_MARK}>8.9</span>
          </div>
          <span className={CLASSES.NETFLIX_APP_MOVIE_DETAILS_GENRE}>
            {movieDetail.props.genre}
          </span>
          <div className={CLASSES.NETFLIX_APP_MOVIE_DETAILS_YEAR_SECTION}>
            <span className={CLASSES.NETFLIX_APP_MOVIE_DETAILS_YEAR}>
              {movieDetail.props.year}
            </span>
            <span className={CLASSES.NETFLIX_APP_MOVIE_DETAILS_DURATION}>
              2h 23m
            </span>
          </div>
          <span className={CLASSES.NETFLIX_APP_MOVIE_DETAILS_DESCRIPTION}>
            Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are
            two hit men who are out to retrieve a suitcase stolen from their
            employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also
            asked Vincent to take his wife Mia (Uma Thurman) out a few days later
            when Wallace himself will be out of town. Butch Coolidge (Bruce Willis)
            is an aging boxer who is paid by Wallace to lose his fight. The lives of
            these seemingly unrelated people are woven together comprising of a
            series of funny, bizarre and uncalled-for incidents.—Soumitra
          </span>
        </div>
      </div>
    </section>
  );
};
