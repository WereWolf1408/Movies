import React from 'react';
import { UseFormRegister, Path } from 'react-hook-form';
import { InputFormProps } from '@utils/interfaces';

const classnames = require('classnames');

import './Input.less';

const CLASSES = {
  NETFLIX_INPUT: 'netflix-app__input',
};

interface InputProps {
  (props: {
    changeHandler?: (event: React.FormEvent<HTMLInputElement>) => void;
    placeHolder?: string;
    classes?: string;
    value?: string;
    label?: Path<InputFormProps>;
    register?: UseFormRegister<InputFormProps>;
  }): JSX.Element;
}

export const Input: InputProps = ({
  placeHolder = 'What do you want to watch?',
  classes,
  changeHandler,
  value,
  label,
  register,
}) => {
  return register ? (
    <input
      className={classnames(CLASSES.NETFLIX_INPUT, classes)}
      placeholder={placeHolder}
      {...register(label)}
    />
  ) : (
    <input
      className={classnames(CLASSES.NETFLIX_INPUT, classes)}
      placeholder={placeHolder}
      onChange={changeHandler}
      value={value}
    />
  );
};
