import React from 'react';
import Button from '../../common/Button';
import ModalWindow from '../../common/ModalWindow';

import './style.less';

const CLASSES = {
  NETFLIX_APP_DELETE_MODAL: 'netflix-app__delete-movie',
  NETFLIX_APP_DELETE_MODAL_TEXT: 'netflix-app__delete-movie-text',
  NETFLIX_APP_DELETE_MODAL_BUTTON: 'netflix-app__delete-movie-button',
};

const DeleteMovieModal = () => {
  return (
    <ModalWindow title={'delete movie'}>
      <div className={CLASSES.NETFLIX_APP_DELETE_MODAL}>
        <span className={CLASSES.NETFLIX_APP_DELETE_MODAL_TEXT}>
          Are you sure you want to delete this movie?
        </span>
        <Button
          classes={CLASSES.NETFLIX_APP_DELETE_MODAL_BUTTON}
          clickHandler={() => {}}
          text={'confirm'}
        />
      </div>
    </ModalWindow>
  );
};

export default DeleteMovieModal;
