import { additionalInitialState } from '../initialState';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieItemProps } from '../../utils/interfaces';

const additionalSlicer = createSlice({
  name: 'popup',
  initialState: additionalInitialState,
  reducers: {
    setSetectedMovie: (state, action: PayloadAction<{ movie: MovieItemProps }>) => {
      state.selectedMovie = action.payload.movie;
      state.showMovieDetails = true;
    },
    closeMovieDetails: (state) => {
      state.showMovieDetails = false;
    },
  },
});

export const { setSetectedMovie, closeMovieDetails } = additionalSlicer.actions;
export default additionalSlicer.reducer;
