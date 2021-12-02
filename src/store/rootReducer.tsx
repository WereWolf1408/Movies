import React from 'react';
import { initialState } from './initialState';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  makeSimpleAjaxRequest,
  getData,
  sortDataByOption,
  addMovie,
  updateMovie,
  removeMovieById,
  searchMovie,
} from './ajaxActions';
import { MovieItemProps, SearchQueryProps } from '../utils/interfaces';

const counterSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    closeError: (state) => {
      state.showError = false;
    },
    closeAllModals: (state) => {
      state.showError = false;
      state.showAddMovieModal = false;
      state.showEditMovieModal = false;
    },
    showAddMovieModal: (state, action: PayloadAction<boolean>) => {
      //how to prevent rerender if we got object with the same value ?
      state.showAddMovieModal = action.payload;
      state.editMovie = null;
    },
    showEditMovieModal: (
      state,
      action: PayloadAction<{ movie: MovieItemProps }>
    ) => {
      state.editMovie = action.payload.movie;
      state.showEditMovieModal = true;
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

export const {
  closeError,
  closeAllModals,
  showAddMovieModal,
  showEditMovieModal,
  showIdleSpinner,
  setQueryParams,
} = counterSlice.actions;
export const rootReducer = counterSlice.reducer;
