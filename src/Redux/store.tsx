import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import movies from './reducers/moviesReducer';
import modalWindows from './reducers/modalWindowsReducer';
import additionalStore from './reducers/additionalReducer';

export const store = configureStore({
  reducer: {
    movies,
    additionalStore,
    modalWindows,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const AppDispatch = () => useDispatch<typeof store.dispatch>();
