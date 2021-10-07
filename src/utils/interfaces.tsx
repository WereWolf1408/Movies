export interface SingleMovieProps {
  src: string;
  title: string;
  year: number;
  genre: string;
}

export interface DropdownCallbackProps {
  (value: Array<string> | string): void;
}

export type HeaderComponentProps = {
  title: string;
  addMovieClickHandler: () => void;
};

export interface formDataReceived {
  title: string;
  movieURL: string;
  genre: Array<string>;
  releaseDate: string;
  rating: number;
  runTime: string;
}

export interface ShowAddMovieModalProps {
  value: boolean;
  handler: () => void;
}

export interface MovieDetailProps {
  props: {
    imgUrl: string;
    title: string;
    genre: string;
    year: number;
  };
  handler: (title: string, imgUrl: string, genre: string, year: number) => void;
}

export interface ShowDetailsProps {
  value: boolean;
  handler: (value?: boolean) => void;
}

export interface ShowEditMoviePopupProps {
  value: boolean;
  handler: (value?: boolean) => void;
}
export interface NetflixAppContextProps {
  showAddMovieModal: ShowAddMovieModalProps;
  movieDetail: MovieDetailProps;
  showDetails: ShowDetailsProps;
  showEditMoviePopup: ShowEditMoviePopupProps;
  closeAllModals: () => void;
}
