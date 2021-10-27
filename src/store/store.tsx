import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { rootReducer } from './rootReducer';
import { additionalReducer } from './additionalReducer';

export const store = configureStore({
  reducer: {
    mainStore: rootReducer,
    additionalStore: additionalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const AppDispatch = () => useDispatch<typeof store.dispatch>();
