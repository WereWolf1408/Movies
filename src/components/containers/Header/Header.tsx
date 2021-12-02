import React, { useEffect, useState } from 'react';
import { Button } from '../../common/Button';
import { Input } from '../../common/Input';
import BackgroundImage from '../../../../assets/header_background.jpg';
import { showAddMovieModal } from '../../../Redux/reducers/modalWindowsReducer';
import { searchMovie } from '../../../Redux/ajaxActions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../Redux/store';
import { useSearchParams } from 'react-router-dom';

import './Header.less';

const CLASSES = {
  NETFLIX_APP_LOGO: 'netflix-app__logo',
  NETFLIX_APP_HEADER: 'netflix-app__header',
  NETFLIX_APP_SEARCH_BUTTON: 'netflix-app__search-button',
  NETFLIX_APP_SEARCH: 'netflix-app__search',
  NETFLIX_APP_SEARCH_SECTION: 'netflix-app__search-section',
  NETFLIX_APP_ADD_MOVIE: 'netflix-app__add-movie',
  NETFLIX_APP_BACKGROUND: 'netflix-app__header-background',
  NETFLIX_APP_TITLE: 'netflix-app__title',
};

interface HeaderProps {
  (props: { title: string }): JSX.Element;
}

export const Header: HeaderProps = ({ title }) => {
  const state = useSelector((state: RootState) => ({
    searchParams: state.movies.searchParams,
  }));
  let [, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [query, setQuery] = useState<string>('');

  const addMovieButtonClickHandler = () => {
    dispatch(showAddMovieModal(true));
  };

  const searchInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);
  };

  const searchButtonClickHandler = () => {
    setSearchParams({ searchQuery: query });
    dispatch(
      searchMovie({
        genre: state.searchParams.genre,
        query,
        sortBy: state.searchParams.sortBy,
      })
    );
  };

  useEffect(() => {
    setQuery(state.searchParams.query);
  }, [state.searchParams.query]);

  return (
    <section className={CLASSES.NETFLIX_APP_HEADER}>
      <img className={CLASSES.NETFLIX_APP_BACKGROUND} src={BackgroundImage} alt="" />
      <div
        className={CLASSES.NETFLIX_APP_ADD_MOVIE}
        onClick={addMovieButtonClickHandler}
      >
        <Button text={'+ add movie'} />
      </div>
      <span className={CLASSES.NETFLIX_APP_TITLE}>{title}</span>
      <div className={CLASSES.NETFLIX_APP_SEARCH_SECTION}>
        <Input
          changeHandler={searchInputChangeHandler}
          classes={CLASSES.NETFLIX_APP_SEARCH}
          value={query}
        />
        <Button
          text={'Search'}
          classes={CLASSES.NETFLIX_APP_SEARCH_BUTTON}
          clickHandler={searchButtonClickHandler}
        />
      </div>
    </section>
  );
};
