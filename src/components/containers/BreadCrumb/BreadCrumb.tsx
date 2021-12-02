import classNames from 'classnames';
import React from 'react';
import { Dropdown } from '../../common/Dropdown';
import { sortOptions, genres } from '../../../utils/utils';
import './BreadCrumb.less';
import { useDispatch, useSelector } from 'react-redux';
import { sortDataByOption } from '../../../store/ajaxActions';
import { setQueryParams } from '../../../store/rootReducer';
import { RootState } from '../../../store/store';

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
  const {
    searchParams: { genre: stateGenre, query, sortBy },
  } = useSelector((state: RootState) => ({
    searchParams: state.mainStore.searchParams,
  }));
  const dispatch = useDispatch();

  const clickHandler = (genre: string) => {
    dispatch(
      setQueryParams({
        genre,
        query,
        sortBy,
      })
    );
  };

  const dropdownChangeHandler = (value: string | Array<string>) => {
    dispatch(sortDataByOption(value as string));
  };

  return (
    <section className={CLASSES.NETFLIX_APP_BREADCRUMB}>
      <div className={CLASSES.NETFLIX_APP_BREADCRUMB_GENRE}>
        {genres.map((genre, index) => (
          <BreadCrumbItem
            key={index}
            genre={genre}
            clickHandler={() => clickHandler(genre)}
            activeId={index}
            isActive={genre === (stateGenre || 'all')}
          />
        ))}
      </div>
      <div className={CLASSES.NETFLIX_APP_BREADCRUMB_SORT}>
        <span className={CLASSES.NETFLIX_APP_BREADCRUMB_LABEL}>Sort by</span>
        <Dropdown
          options={sortOptions}
          dropdownType={'simple'}
          callback={dropdownChangeHandler}
          selectedValue={sortBy}
        />
      </div>
    </section>
  );
};
