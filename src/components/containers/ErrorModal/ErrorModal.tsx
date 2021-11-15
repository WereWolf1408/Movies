import React from 'react';
import { ModalWindow } from '../../common/ModalWindow';

import './ErrorModal.less';

interface ErrorModalProps {
  (props: { text: string }): JSX.Element;
}

export const ErrorModal: ErrorModalProps = ({ text }) => {
  return (
    <ModalWindow title={'Error Modal'}>
      <h1 className={'error-modal-message'}>{text}</h1>
    </ModalWindow>
  );
};
