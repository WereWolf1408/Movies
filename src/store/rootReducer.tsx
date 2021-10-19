import React from 'react';
import { initialState } from './initialState';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { makeSimpleAjaxRequest, getData, sortDataByOption } from './ajaxActions';
import { MovieItemProps } from '../utils/interfaces';

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      console.log(`inside slice function, reducers object`);
      console.log(state);
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      console.log(`inside increased by amount function`);
      console.log(action);
      state.counter = action.payload;
    },
    setSetectedMovie: (state, action: PayloadAction<{ movie: MovieItemProps }>) => {
      console.log(`inside set selected movie`);
      console.log(action.payload.movie);
      state.selectedMovie = action.payload.movie;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(makeSimpleAjaxRequest.fulfilled, (state, action) => {
      console.log(`inside extraReducers`);
      console.log(state);
      console.log(action);
      state.counter = action.payload;
    });
    builder.addCase(
      getData.fulfilled,
      (state, action: PayloadAction<{ data: Array<MovieItemProps> }>) => {
        console.log('inside extrareducer getData');
        console.log(action.payload);
        state.data = action.payload.data;
      }
    );
    builder.addCase(
      sortDataByOption.fulfilled,
      (state, action: PayloadAction<{ data: Array<MovieItemProps> }>) => {
        state.data = action.payload.data;
      }
    );
  },
});

export const { increment, decrement, incrementByAmount, setSetectedMovie } =
  counterSlice.actions;
export const rootReducer = counterSlice.reducer;
