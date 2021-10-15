import React, { Dispatch, SetStateAction, useState } from 'react';
import { Path, useForm, UseFormRegister, SubmitHandler } from 'react-hook-form';
import { InputFormProps } from '@utils/interfaces';
import { LabelWrapper, DropdownInput, TextAreaWithLabel } from '../SmartInputs';
import { Button } from '../Button/Button';
import { Input } from '../Input';
import { DateInput } from '../DateInput';

import './Form.less';
import { Dropdown } from '../Dropdown/Dropdown';

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
        <LabelWrapper classes={CLASSES.NETFLIX_APP__INPUT_BLOCK} labelText={'genre'}>
          <Dropdown
            options={['comedy', 'horor', 'crime']}
            dropdownType={'multiline'}
            label={'genre'}
            register={register}
          />
        </LabelWrapper>

        <LabelWrapper
          classes={CLASSES.NETFLIX_APP__INPUT_BLOCK}
          labelText={'release date'}
        >
          <DateInput label={'release date'} register={register} />
        </LabelWrapper>

        <LabelWrapper
          classes={CLASSES.NETFLIX_APP__INPUT_BLOCK}
          labelText={'rating'}
        >
          <Input placeHolder={'Rating'} register={register} label={'rating'} />
        </LabelWrapper>

        <LabelWrapper
          classes={CLASSES.NETFLIX_APP__INPUT_BLOCK}
          labelText={'runtime'}
        >
          <Input placeHolder={'runtime'} register={register} label={'runtime'} />
        </LabelWrapper>
      </div>
      <div className={CLASSES.NETFLIX_APP_MODAL_WINDOW_FORM_BUTTONS_SECTION}>
        <Button text={'reset'} />
        <Button text={'submit'} submit />
      </div>
    </form>
  );
};
