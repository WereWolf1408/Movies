import React from 'react';
import ModalWindow from '@common/ModalWindow';
import Form from '@common/Form';
import { formDataReceived } from '@utils/interfaces';

const CLASSES = {
  NETFLIX_APP_FORM_MODAL_WINDOW: 'netflix-app__form-modal-window',
};

interface FormModalProps {
  (props: {
    resetClickHandler: () => void;
    sendButtonClick: (opt: formDataReceived) => void;
  }): JSX.Element;
}

const FormModal: FormModalProps = ({
  resetClickHandler,
  sendButtonClick,
}) => {
  return (
    <ModalWindow title={'add movie'}>
      <Form
        resetButtonClickHandler={resetClickHandler}
        submitClickHandler={sendButtonClick}
      />
    </ModalWindow>
  );
};

export default FormModal;