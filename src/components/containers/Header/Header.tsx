import React, { useContext, useState } from 'react';
import { Button } from '../../common/Button';
import { Input } from '../../common/Input';
import { Logo } from '../../../utils/utils';
import BackgroundImage from '@assets/header_background.jpg';
import { showAddMovieModal } from '../../../store/rootReducer';
import { searchMovie } from '../../../store/ajaxActions';

import './Header.less';
import { useDispatch } from 'react-redux';
import { ChangeHandler } from 'react-hook-form';

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
    dispatch(searchMovie(query));
  };

  return (
    <section className={CLASSES.NETFLIX_APP_HEADER}>
      <img className={CLASSES.NETFLIX_APP_BACKGROUND} src={BackgroundImage} alt="" />
      <Logo classes={CLASSES.NETFLIX_APP_LOGO} />
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
