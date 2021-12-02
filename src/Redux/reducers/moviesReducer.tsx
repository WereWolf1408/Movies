import { initialState } from '../initialState';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  getData,
  sortDataByOption,
  addMovie,
  updateMovie,
  removeMovieById,
  searchMovie,
} from '../ajaxActions';
import { MovieItemProps, SearchQueryProps } from '../../utils/interfaces';

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    closeError: (state) => {
      state.showError = false;
    },
    showIdleSpinner: (state) => {
      state.isLoading = true;
    },
    setQueryParams: (state, action: PayloadAction<SearchQueryProps>) => {
      state.searchParams = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getData.fulfilled,
      (state, action: PayloadAction<{ data: Array<MovieItemProps> }>) => {
        state.data = action.payload.data;
        state.isLoading = false;
      }
    );
    builder.addCase(getData.pending, (state) => {});
    builder.addCase(
      sortDataByOption.fulfilled,
      (state, action: PayloadAction<{ data: Array<MovieItemProps> }>) => {
        state.data = action.payload.data;
      }
    );
    builder.addCase(addMovie.fulfilled, (state, action: PayloadAction<any>) => {
      if (action.payload.messages) {
        state.errorMessage = action.payload.messages;
        state.showError = true;
      } else {
        state.data = [action.payload];
        state.showAddMovieModal = false;
      }
    });
    builder.addCase(addMovie.rejected, (state, action: PayloadAction<any>) => {});
    builder.addCase(updateMovie.fulfilled, (state, action: PayloadAction<any>) => {
      state.data = [action.payload];
      state.showEditMovieModal = false;
    });
    builder.addCase(updateMovie.rejected, (state, action: PayloadAction<any>) => {});
    builder.addCase(
      removeMovieById.fulfilled,
      (state, action: PayloadAction<any>) => {}
    );
    builder.addCase(
      removeMovieById.rejected,
      (state, action: PayloadAction<any>) => {}
    );
    builder.addCase(
      searchMovie.fulfilled,
      (state, action: PayloadAction<{ data: Array<MovieItemProps> }>) => {
        state.data = action.payload.data;
      }
    );
    builder.addCase(searchMovie.rejected, () => {});
  },
});

export const { closeError, showIdleSpinner, setQueryParams } = moviesSlice.actions;
export default moviesSlice.reducer;
