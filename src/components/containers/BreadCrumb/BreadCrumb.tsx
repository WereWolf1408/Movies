import classNames from 'classnames';
import React, { useState } from 'react';
import {Dropdown} from '../../common/Dropdown';
import { sortOptions } from '@utils/utils';

import './BreadCrumb.less';

const genres = ['all', 'Documentary', 'comedy', 'horror', 'crime'];

const CLASSES = {
  NETFLIX_APP_BREADCRUMB: 'netflix-app__breadcrumb',
  NETFLIX_APP_BREADCRUMB_GENRE: 'netflix-app__breadcrumb-genre',
  NETFLIX_APP_BREADCRUMB_SORT: 'netflix-app__breadcrumb-sort',
  NETFLIX_APP_BREADCRUMB_ITEM: 'netflix-app__breadcrumb-item',
  NETFLIX_APP_BREADCRUMB_LABEL: 'netflix-app__breadcrumb-label',
  ACTIVE: 'active',
};

type BreadCrumbItemProps = (props: {
  genre: string;
  clickHandler: (activeId: number) => void;
  activeId: number;
  isActive: boolean;
}) => JSX.Element;

export const BreadCrumbItem: BreadCrumbItemProps = ({
  genre,
  clickHandler,
  activeId,
  isActive,
}) => (
  <span
    className={classNames(CLASSES.NETFLIX_APP_BREADCRUMB_ITEM, {
      [CLASSES.ACTIVE]: isActive,
    })}
    onClick={() => clickHandler(activeId)}
  >
    {genre}
  </span>
);

export const BreadCrumb = () => {
  const [activeItem, setActiveItem] = useState(0);

  const clickHandler = (activeId: number) => {
    setActiveItem(activeId);
  };

  const renderGenreList = () =>
    genres.map((genre, index) => (
      <BreadCrumbItem
        key={index}
        genre={genre}
        clickHandler={clickHandler}
        activeId={index}
        isActive={activeItem === index}
      />
    ));

  return (
    <section className={CLASSES.NETFLIX_APP_BREADCRUMB}>
      <div className={CLASSES.NETFLIX_APP_BREADCRUMB_GENRE}>{renderGenreList()}</div>
      <div className={CLASSES.NETFLIX_APP_BREADCRUMB_SORT}>
        <span className={CLASSES.NETFLIX_APP_BREADCRUMB_LABEL}>Sort by</span>
        <Dropdown options={sortOptions} dropdownType={'simple'} />
      </div>
    </section>
  );
};