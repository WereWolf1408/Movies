import { MovieItemProps } from '../utils/interfaces';

interface InitialStateProps {
  counter: number; //for test only; further will be removed
  data: Array<MovieItemProps>;
  selectedMovie: MovieItemProps;
}

export const initialState: InitialStateProps = {
  counter: 0,
  data: [],
  selectedMovie: null,
};
