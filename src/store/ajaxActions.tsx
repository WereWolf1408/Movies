import { createAsyncThunk } from '@reduxjs/toolkit';

export const makeSimpleAjaxRequest = createAsyncThunk(
  'user/simpleRequest',
  async (id, thunkAPI) => {
    console.log(`inside make simple ajax request`);
    console.log(thunkAPI);
    return Promise.resolve(5000000);
  }
);

export const getData = createAsyncThunk(
  'data/getAllData',
  async (offset: number) => {
    const response = await fetch(
      `http://localhost:4000/movies?offset=${offset}&limit=${offset}`
    );
    return response.json();
  }
);

export const sortDataByOption = createAsyncThunk(
  'data/getSortData',
  async (sortField: string) => {
    console.log(`-----> inside function that send fetch with sort fieild`);
    console.log(sortField);
    const responce = await fetch(
      `http://localhost:4000/movies?sortBy=${sortField}&sortOrder=desc&offset=20&limit=20`
    );
    return responce.json();
  }
);
