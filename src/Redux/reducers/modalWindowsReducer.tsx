import { initialState } from '../initialState';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieItemProps } from '../../utils/interfaces';

const modalWindowsSlice = createSlice({
  name: 'modalWindows',
  initialState,
  reducers: {
    closeAllModals: (state) => {
      state.showError = false;
      state.showAddMovieModal = false;
      state.showEditMovieModal = false;
    },
    showAddMovieModal: (state, action: PayloadAction<boolean>) => {
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
  },
});

export const { closeAllModals, showAddMovieModal, showEditMovieModal } =
  modalWindowsSlice.actions;
export default modalWindowsSlice.reducer;
