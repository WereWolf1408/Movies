import React, { useContext } from 'react';
import {Button} from '@common/Button';
import { Input } from '@common/Input';
import { Logo } from '@utils/utils';
import BackgroundImage from '@assets/header_background.jpg';

import './Header.less';
import { NetflixAppContext } from '../../../Context/Context';

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
  const { showAddMovieModal } = useContext(NetflixAppContext);

  return (
    <section className={CLASSES.NETFLIX_APP_HEADER}>
      <img className={CLASSES.NETFLIX_APP_BACKGROUND} src={BackgroundImage} alt="" />
      <Logo classes={CLASSES.NETFLIX_APP_LOGO} />
      <div
        className={CLASSES.NETFLIX_APP_ADD_MOVIE}
        onClick={showAddMovieModal.handler}
      >
        <Button text={'+ add movie'} />
      </div>
      <span className={CLASSES.NETFLIX_APP_TITLE}>{title}</span>
      <div className={CLASSES.NETFLIX_APP_SEARCH_SECTION}>
        <Input
          changeHandler={() => {
            console.log('mock press handler');
          }}
          classes={CLASSES.NETFLIX_APP_SEARCH}
        />
        <Button text={'Search'} classes={CLASSES.NETFLIX_APP_SEARCH_BUTTON} />
      </div>
    </section>
  );
};