import React from 'react';
import { ModalWindow } from '../../common/ModalWindow';
import { Form } from '../../common/Form';
import { formDataReceived } from '../../../utils/interfaces';

const CLASSES = {
  NETFLIX_APP_FORM_MODAL_WINDOW: 'netflix-app__form-modal-window',
};

interface AddMovieModalProps {
  (props: {}): JSX.Element;
}

export const AddMovieModal: AddMovieModalProps = ({}) => {
  return (
    <ModalWindow title={'add movie'}>
      <Form />
    </ModalWindow>
  );
};
