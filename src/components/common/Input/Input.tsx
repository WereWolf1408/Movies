import React from 'react';
import { UseFormRegister, Path, FieldErrors } from 'react-hook-form';
import {
  InputFormProps,
  ValidationFormOptionsProps,
} from '../../../utils/interfaces';

const classnames = require('classnames');

import './Input.less';

const CLASSES = {
  NETFLIX_INPUT: 'netflix-app__input',
};

interface InputProps {
  (props: {
    changeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeHolder?: string;
    classes?: string;
    label?: Path<InputFormProps>;
    register?: UseFormRegister<InputFormProps>;
    options?: ValidationFormOptionsProps;
    errors?: string;
    value?: string;
  }): JSX.Element;
}

export const Input: InputProps = ({
  placeHolder = 'What do you want to watch?',
  classes,
  changeHandler,
  label,
  register,
  errors,
  options,
  value,
}) => {
  return register ? (
    <>
      <input
        className={classnames(CLASSES.NETFLIX_INPUT, classes)}
        placeholder={placeHolder}
        {...register(label, options)}
      />
      {errors && <span className={'netflix-app__input-error-label'}>{errors}</span>}
    </>
  ) : (
    <input
      className={classnames(CLASSES.NETFLIX_INPUT, classes)}
      placeholder={placeHolder}
      onChange={changeHandler}
      value={value}
    />
  );
};
