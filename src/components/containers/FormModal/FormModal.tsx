import React from 'react';
import { ModalWindow } from '@common/ModalWindow';
import { Form } from '@common/Form';

const CLASSES = {
  NETFLIX_APP_FORM_MODAL_WINDOW: 'netflix-app__form-modal-window',
};

interface FormModalProps {
  (): JSX.Element;
}

export const FormModal: FormModalProps = () => {
  return (
    <ModalWindow title={'add movie'}>
      <Form />
    </ModalWindow>
  );
};
