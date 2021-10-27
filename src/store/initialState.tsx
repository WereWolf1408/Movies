import { MovieItemProps } from '../utils/interfaces';

interface InitialStateProps {
  data: Array<MovieItemProps>;
  errorMessage: string;
  showError: boolean;
  showAddMovieModal: boolean;
  showEditMovieModal: boolean;
  editMovie: MovieItemProps;
  deleteMovieById: number;
  searchValue: string;
  isLoading: boolean;
}

interface AdditionalInitialState {
  selectedMovie: MovieItemProps;
  showMovieDetails: boolean;
  closeMovieDetails: boolean;
}

export const initialState: InitialStateProps = {
  data: [],
  errorMessage: null,
  showError: null,
  showAddMovieModal: null,
  showEditMovieModal: null,
  editMovie: null,
  deleteMovieById: null,
  searchValue: null,
  isLoading: false,
};

export const additionalInitialState: AdditionalInitialState = {
  selectedMovie: null,
  showMovieDetails: null,
  closeMovieDetails: null,
};
