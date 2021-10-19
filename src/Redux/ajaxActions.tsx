import { createAsyncThunk } from '@reduxjs/toolkit';
import { MovieItemProps, SearchQueryProps } from '../utils/interfaces';
import { buildSearchURL } from '../utils/utils';
<<<<<<< HEAD:src/Redux/ajaxActions.tsx
=======

export const makeSimpleAjaxRequest = createAsyncThunk(
  'user/simpleRequest',
  async (id, thunkAPI) => {
    return Promise.resolve(5000000);
  }
);
>>>>>>> d07ec72 (Task 8: Add React Router to the application):src/store/ajaxActions.tsx

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
  async (searchQuery: SearchQueryProps, { rejectWithValue }) => {
    try {
<<<<<<< HEAD:src/Redux/ajaxActions.tsx
=======
      //old request
      // `http://localhost:4000/movies?search=${searchQuery.query}&searchBy=title`,
      // buildSearchURL(searchQuery);
>>>>>>> d07ec72 (Task 8: Add React Router to the application):src/store/ajaxActions.tsx
      const responce = await fetch(
        `http://localhost:4000/movies?${buildSearchURL(searchQuery)}`,
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
