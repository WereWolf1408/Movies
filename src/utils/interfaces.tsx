import { Validate } from 'react-hook-form';

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

export interface InputFormProps {
  title: string;
  poster_path: string;
  genres: Array<string>;
  release_date: string;
  vote_average: string;
  runtime: number;
  overview: string;
}

export type MovieItemProps = {
  id?: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: Array<string>;
  runtime: number;
};

export interface ValidationFormOptionsProps {
  required?: string;
  setValueAs?: (value: string) => string[] | string;
  validate?:
    | Validate<string | number | string[]>
    | Record<string, Validate<string | number | string[]>>;
  valueAsNumber?: boolean;
  value?: any;
  onChange?: (e: any) => void;
  pattern?: {
    value: any;
    message: string;
  };
}
