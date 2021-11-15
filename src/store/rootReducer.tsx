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
import { MovieItemProps } from '../utils/interfaces';

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
  },
  extraReducers: (builder) => {
    //test case, will be removed during further development
    builder.addCase(makeSimpleAjaxRequest.fulfilled, (state, action) => {
      // state.counter = action.payload;
    });
    builder.addCase(
      getData.fulfilled,
      (state, action: PayloadAction<{ data: Array<MovieItemProps> }>) => {
        state.data = action.payload.data;
        state.isLoading = false;
      }
    );
    builder.addCase(
      sortDataByOption.fulfilled,
      (state, action: PayloadAction<{ data: Array<MovieItemProps> }>) => {
        state.data = action.payload.data;
      }
    );
    builder.addCase(addMovie.fulfilled, (state, action: PayloadAction<any>) => {
      console.log(action.payload);

      if (action.payload.messages) {
        state.errorMessage = action.payload.messages;
        state.showError = true;
      } else {
        state.data = [action.payload];
        state.showAddMovieModal = false;
      }
    });
    builder.addCase(addMovie.rejected, (state, action: PayloadAction<any>) => {
      console.log(`---> reducer inside addMOvie Reject case`);
      console.log(action);
    });
    builder.addCase(updateMovie.fulfilled, (state, action: PayloadAction<any>) => {
      console.log(action.payload);
      state.data = [action.payload];
      state.showEditMovieModal = false;
    });
    builder.addCase(updateMovie.rejected, (state, action: PayloadAction<any>) => {
      console.log(`---> reducer inside updateMovie Reject case`);
      console.log(action);
    });
    builder.addCase(
      removeMovieById.fulfilled,
      (state, action: PayloadAction<any>) => {
        console.log(`inside remove movie reducer case`);
        console.log(action);
      }
    );
    builder.addCase(
      removeMovieById.rejected,
      (state, action: PayloadAction<any>) => {
        console.log(`remove movie by id was rejected!!`);
        console.log(action);
      }
    );
    builder.addCase(
      searchMovie.fulfilled,
      (state, action: PayloadAction<{ data: Array<MovieItemProps> }>) => {
        console.log(action.payload.data);

        state.data = action.payload.data;
      }
    );
    builder.addCase(searchMovie.rejected, () => {
      console.log(`search movie was requcted!!`);
    });
  },
});

export const {
  closeError,
  closeAllModals,
  showAddMovieModal,
  showEditMovieModal,
  showIdleSpinner,
} = counterSlice.actions;
export const rootReducer = counterSlice.reducer;
