import { createAsyncThunk } from '@reduxjs/toolkit';
import { MovieItemProps } from '../utils/interfaces';

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
    console.log('-----> getData action');
    
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

export const addMovie = createAsyncThunk(
  'data/addMovie',
  async (movie: MovieItemProps, { rejectWithValue }) => {
    try {
      const responce = await fetch('http://localhost:4000/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie),
      });
      return responce.json();
    } catch (error) {
      return rejectWithValue('something went wrong during add movie!');
    }
  }
);

export const updateMovie = createAsyncThunk(
  'data/updateMovie',
  async (movie: MovieItemProps, { rejectWithValue }) => {
    try {
      const responce = await fetch('http://localhost:4000/movies', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie),
      });
      return responce.json();
    } catch (error) {
      return rejectWithValue('something went wrong during update movie!');
    }
  }
);

export const removeMovieById = createAsyncThunk(
  'data/removeMovie',
  async (movieId: number, { rejectWithValue }) => {
    try {
      console.log(`movie id = ${movieId}`);
      const responce = await fetch(`http://localhost:4000/movies/${movieId}`, {
        method: 'DELETE',
      });
      return responce.text();
    } catch (error) {
      return rejectWithValue('something went wrong during delete movie by id');
    }
  }
);

export const searchMovie = createAsyncThunk(
  'data/searchMovie',
  async (searchQuery: string, { rejectWithValue }) => {
    try {
      console.log(`search query = ${searchQuery}`);
      const responce = await fetch(
        `http://localhost:4000/movies?search=${searchQuery}&searchBy=title`,
        {
          method: 'GET',
        }
      );
      return responce.json();
    } catch (error) {
      return rejectWithValue('something went wrong during delete movie by id');
    }
  }
);
