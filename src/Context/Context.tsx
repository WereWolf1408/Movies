import React, { useState } from 'react';
import { defaultContextValue } from '../utils/utils';
import {
  ShowAddMovieModalProps,
  NetflixAppContextProps,
  MovieDetailProps,
  ShowDetailsProps,
  ShowEditMoviePopupProps,
} from '../utils/interfaces';

export const NetflixAppContext =
  React.createContext<NetflixAppContextProps>(defaultContextValue);

export const NetflixAppContextFunction = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const showAddMovieModalHandler = () => {
    setShowAddMovieModal((prevState) => ({ ...prevState, value: !prevState.value }));
  };

  const movieDetailHandler = (
    title: string,
    imgUrl: string,
    genre: string,
    year: number
  ) => {
    setMovieDetail((prevProps) => ({
      ...prevProps,
      props: { title, imgUrl, genre, year },
    }));
  };

  const cloaseAllModalsHandler = () => {
    setShowAddMovieModal((prevState) => ({ ...prevState, value: false }));
    setShowEditMoviePopup((prevProps) => ({ ...prevProps, value: false }));
  };

  const [showAddMovieModal, setShowAddMovieModal] = useState<ShowAddMovieModalProps>(
    {
      value: false,
      handler: showAddMovieModalHandler,
    }
  );

  const [movieDetail, setMovieDetail] = useState<MovieDetailProps>({
    props: {
      title: '',
      imgUrl: '',
      genre: '',
      year: 2000,
    },
    handler: movieDetailHandler,
  });

  const [showDetails, setShowDetails] = useState<ShowDetailsProps>({
    value: false,
    handler: (value = false) =>
      setShowDetails((prevProps) => ({ ...prevProps, value })),
  });

  const [showEditMoviePopup, setShowEditMoviePopup] =
    useState<ShowEditMoviePopupProps>({
      value: false,
      handler: (value = false) =>
        setShowEditMoviePopup((prevProps) => ({ ...prevProps, value })),
    });
    
  const value = {
    showAddMovieModal,
    movieDetail,
    showDetails,
    showEditMoviePopup,
    closeAllModals: cloaseAllModalsHandler,
  };

  return (
    <NetflixAppContext.Provider value={value}>{children}</NetflixAppContext.Provider>
  );
};
