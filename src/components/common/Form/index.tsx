import React, { Dispatch, SetStateAction, useState } from 'react';
import {
  DateInput,
  InputWithLabel,
  DropdownInput,
  TextAreaWithLabel,
} from '../SmartInputs';
import Button from '../Button';
import { formDataReceived } from '@utils/interfaces';

import './style.less';

const CLASSES = {
  NETFLIX_APP_MODAL_WINDOW_FORM: 'netflix-app__modal-window-form',
  NETFLIX_APP_MODAL_WINDOW_FORM_INPUT_SECTION:
    'netflix-app__modal-window-form-input-section',
  NETFLIX_APP_MODAL_WINDOW_FORM_INPUT_BLOCK:
    'netflix-app__modal-window-form-input-block',
  NETFLIX_APP__INPUT_BLOCK: 'netflix-app__input-block',
  NETFLIX_APP_MODAL_WINDOW_FORM_BUTTONS_SECTION:
    'netflix-app__modal-window-form-buttons-section',
};

type FormEvent = React.FormEvent<HTMLInputElement>;

type SetFormFieldProps = (
  event: React.FormEvent<HTMLInputElement>,
  callback: Dispatch<SetStateAction<string>>
) => void;

interface FormProps {
  (props: {
    resetButtonClickHandler: () => void;
    submitClickHandler: (opt: formDataReceived) => void;
  }): JSX.Element;
}

//Consider usage of useForm hook in conjunction with yup() or any other joi.
//JOI - in simple vords - validation scheme

const Form: FormProps = ({ resetButtonClickHandler, submitClickHandler }) => {
  const [title, setTitle] = useState('');
  const [movieURL, setMovieURL] = useState('');
  const [genre, setGenre] = useState(['']);
  const [releaseDate, setReleaseDate] = useState('');
  const [rating, setRating] = useState<number>(0);
  const [runTime, setRunTime] = useState('');

  const setFormField: SetFormFieldProps = (event, callback) => {
    const { value } = event.currentTarget;
    callback(value);
  };

  const titleChangeHandler = (event: FormEvent) => {
    setFormField(event, setTitle);
  };

  const movieURLChangeHandler = (event: FormEvent) => {
    setFormField(event, setMovieURL);
  };

  const genreChangeHandler = (value: Array<string>) => {
    setGenre(value);
  };

  const releaseDateChangeHandler = (event: FormEvent) => {
    setFormField(event, setReleaseDate);
  };

  const ratingChangeHandler = (event: FormEvent) => {
    const { value } = event.currentTarget;
    setRating(parseInt(value));
  };

  const runTimeChangeHandler = (event: FormEvent) => {
    setFormField(event, setRunTime);
  };

  const overviewChangeHandler = (event: React.FormEvent<HTMLTextAreaElement>) => {};

  const subminButtonClickHandler = () => {
    submitClickHandler({
      title,
      movieURL,
      genre,
      releaseDate,
      rating,
      runTime,
    });
  };

  return (
    <form className={CLASSES.NETFLIX_APP_MODAL_WINDOW_FORM}>
      <div className={CLASSES.NETFLIX_APP_MODAL_WINDOW_FORM_INPUT_SECTION}>
        <InputWithLabel
          changeHandler={titleChangeHandler}
          placeholder={'1123'}
          labelText={'Title'}
          value={title}
          classes={CLASSES.NETFLIX_APP__INPUT_BLOCK}
        />
        <InputWithLabel
          changeHandler={movieURLChangeHandler}
          placeholder={'movie url'}
          labelText={'movie url'}
          value={movieURL}
          classes={CLASSES.NETFLIX_APP__INPUT_BLOCK}
        />
        <DropdownInput
          labelText={'genre'}
          options={['comedy', 'horor', 'crime']}
          changeHandler={genreChangeHandler}
          classes={CLASSES.NETFLIX_APP__INPUT_BLOCK}
        />
        <DateInput
          labelText={'release date'}
          changeHandler={releaseDateChangeHandler}
          value={releaseDate}
          classes={CLASSES.NETFLIX_APP__INPUT_BLOCK}
        />
        <InputWithLabel
          changeHandler={ratingChangeHandler}
          placeholder={'1123'}
          labelText={'rating'}
          value={rating.toString()}
          classes={CLASSES.NETFLIX_APP__INPUT_BLOCK}
        />
        <InputWithLabel
          changeHandler={runTimeChangeHandler}
          placeholder={'runtime'}
          labelText={'runtime'}
          value={runTime}
          classes={CLASSES.NETFLIX_APP__INPUT_BLOCK}
        />
        <TextAreaWithLabel
          changeHandler={overviewChangeHandler}
          placeholder={'Movie description'}
          labelText={'runtime'}
          value={runTime}
          classes={CLASSES.NETFLIX_APP__INPUT_BLOCK}
        />
      </div>
      <div className={CLASSES.NETFLIX_APP_MODAL_WINDOW_FORM_BUTTONS_SECTION}>
        <Button clickHandler={resetButtonClickHandler} text={'reset'} />
        <Button clickHandler={subminButtonClickHandler} text={'submit'} />
      </div>
    </form>
  );
};

export default Form;