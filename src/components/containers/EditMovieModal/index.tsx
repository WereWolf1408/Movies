import React, { useContext } from 'react';
import { NetflixAppContext } from '../../../Context';
import Button from '../../common/Button';
import Form from '../../common/Form';
import ModalWindow from '../../common/ModalWindow';

import './style.less';

const CLASSES = {
  NETFLIX_APP_EDIT_MODAL: 'netflix-app__edit-movie',
};

const DeleteMovieModal = () => {
  const { movieDetail } = useContext(NetflixAppContext);
  return (
    <ModalWindow title={'Edit Movie'}>
      <div className={CLASSES.NETFLIX_APP_EDIT_MODAL}>
        <Form titleValue={movieDetail.props.title} genreValue={movieDetail.props.genre} />
      </div>
    </ModalWindow>
  );
};

export default DeleteMovieModal;
