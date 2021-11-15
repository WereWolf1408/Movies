import React from 'react';
import {Button} from '../../common/Button/Button';
import {Form} from '../../common/Form';
import {ModalWindow} from '../../common/ModalWindow/ModalWindow';

import './EditMovieModal.less';

const CLASSES = {
  NETFLIX_APP_EDIT_MODAL: 'netflix-app__edit-movie',
};

export const EditMovieModal = () => {
  return (
    <ModalWindow title={'Edit Movie'}>
      <div className={CLASSES.NETFLIX_APP_EDIT_MODAL}>
        <Form editForm />
      </div>
    </ModalWindow>
  );
};