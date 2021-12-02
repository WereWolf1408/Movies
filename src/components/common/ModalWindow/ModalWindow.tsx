import React from 'react';
import { CloseIcon } from '../../../utils/utils';
import { closeAllModals } from '../../../Redux/reducers/modalWindowsReducer';

import './ModalWindow.less';
import { useDispatch } from 'react-redux';

const CLASSES = {
  NETFLIX_APP_MODAL_WINDOW: 'netflix-app__modal-window',
  NETFLIX_APP_MODAL_WINDOW_TITLE: 'netflix-app__modal-window-title',
  NETFLIX_APP_MODAL_WINDOW_CHILD_CONTAINER:
    'netflix-app__modal-window-child-container',
  NETFLIX_APP_MODAL_WINDOW_CLOSE: 'netflix-app__modal-window-close',
};

interface ModalWindowProps {
  (props: { children: React.ReactNode; title: string }): JSX.Element;
}

export const ModalWindow: ModalWindowProps = ({ children, title }) => {
  const dispatch = useDispatch();

  const closeIconClickHandler = () => {
    dispatch(closeAllModals());
  };

  return (
    <div className={CLASSES.NETFLIX_APP_MODAL_WINDOW}>
      <div className={CLASSES.NETFLIX_APP_MODAL_WINDOW_CHILD_CONTAINER}>
        <h1 className={CLASSES.NETFLIX_APP_MODAL_WINDOW_TITLE}>{title}</h1>
        <CloseIcon
          classes={CLASSES.NETFLIX_APP_MODAL_WINDOW_CLOSE}
          clickHandler={closeIconClickHandler}
        />
        {children}
      </div>
    </div>
  );
};
