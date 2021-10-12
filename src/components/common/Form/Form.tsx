import React, { Dispatch, SetStateAction, useState } from 'react';
import { Path, useForm, UseFormRegister, SubmitHandler } from 'react-hook-form';
import { InputFormProps } from '@utils/interfaces';
import {
  DateInput,
  LabelWrapper,
  DropdownInput,
  TextAreaWithLabel,
} from '../SmartInputs';
import { Button } from '../Button/Button';
import { Input } from '../Input';

import './Form.less';

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
    titleValue?: string;
    genreValue?: string;
    yearValue?: number;
  }): JSX.Element;
}

export const Form: FormProps = ({
  titleValue = '',
  yearValue = 2000,
  genreValue = '',
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [title, setTitle] = useState(titleValue);
  const [movieURL, setMovieURL] = useState('');
  const [genre, setGenre] = useState([genreValue]);
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

  const onSubmit: SubmitHandler<InputFormProps> = (data) => {
    console.log(data);
  };

  return (
    <form
      className={CLASSES.NETFLIX_APP_MODAL_WINDOW_FORM}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={CLASSES.NETFLIX_APP_MODAL_WINDOW_FORM_INPUT_SECTION}>
        <LabelWrapper classes={CLASSES.NETFLIX_APP__INPUT_BLOCK} labelText={'title'}>
          <Input placeHolder={'Title'} register={register} label={'title'} />
        </LabelWrapper>
        <LabelWrapper
          classes={CLASSES.NETFLIX_APP__INPUT_BLOCK}
          labelText={'movie url'}
        >
          <Input placeHolder={'movie url'} register={register} label={'movie url'} />
        </LabelWrapper>
        {/* <DropdownInput
          labelText={'genre'}
          options={['comedy', 'horor', 'crime']}
          changeHandler={genreChangeHandler}
          classes={CLASSES.NETFLIX_APP__INPUT_BLOCK}
        /> */}
        {/* <DateInput
          labelText={'release date'}
          changeHandler={releaseDateChangeHandler}
          value={releaseDate}
          classes={CLASSES.NETFLIX_APP__INPUT_BLOCK}
        /> */}
        {/* <InputWithLabel
          changeHandler={ratingChangeHandler}
          placeholder={'1123'}
          labelText={'rating'}
          value={rating.toString()}
          classes={CLASSES.NETFLIX_APP__INPUT_BLOCK}
        /> */}
        {/* <InputWithLabel
          changeHandler={runTimeChangeHandler}
          placeholder={'runtime'}
          labelText={'runtime'}
          value={runTime}
          classes={CLASSES.NETFLIX_APP__INPUT_BLOCK}
        /> */}
        {/* <TextAreaWithLabel
          changeHandler={overviewChangeHandler}
          placeholder={'Movie description'}
          labelText={'runtime'}
          value={runTime}
          classes={CLASSES.NETFLIX_APP__INPUT_BLOCK}
        /> */}
      </div>
      <div className={CLASSES.NETFLIX_APP_MODAL_WINDOW_FORM_BUTTONS_SECTION}>
        <Button text={'reset'} />
        <Button text={'submit'} submit />
      </div>
    </form>
  );
};
