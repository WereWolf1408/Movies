import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Dropdown } from '../../common/Dropdown';
import { sortOptions, genres } from '@utils/utils';
import './BreadCrumb.less';

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

interface BreadCrumbProps {
  (props: { applySortCallback: () => void }): JSX.Element;
}

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

export const BreadCrumb: BreadCrumbProps = ({ applySortCallback }) => {
  const [activeItem, setActiveItem] = useState(0);

  const clickHandler = (activeId: number) => {
    setActiveItem(activeId);
  };

  useEffect(() => {
    console.log(`----> useEffect inside Breadcrumb Component`);
  });

  return (
    <section className={CLASSES.NETFLIX_APP_BREADCRUMB}>
      <div className={CLASSES.NETFLIX_APP_BREADCRUMB_GENRE}>
        {genres.map((genre, index) => (
          <BreadCrumbItem
            key={index}
            genre={genre}
            clickHandler={clickHandler}
            activeId={index}
            isActive={activeItem === index}
          />
        ))}
      </div>
      <div className={CLASSES.NETFLIX_APP_BREADCRUMB_SORT}>
        <span className={CLASSES.NETFLIX_APP_BREADCRUMB_LABEL}>Sort by</span>
        <Dropdown
          options={sortOptions}
          dropdownType={'simple'}
          callback={applySortCallback}
        />
      </div>
    </section>
  );
};
