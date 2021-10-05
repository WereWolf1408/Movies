import React from 'react';

const classnames = require('classnames');

import './style.less';

const CLASSES = {
  NETFLIX_INPUT: 'netflix-app__input',
};

interface InputProps {
  (props: {
    changeHandler: (event: React.FormEvent<HTMLInputElement>) => void;
    placeHolder?: string;
    classes?: string;
    value?: string;
  }): JSX.Element;
}

const Input: InputProps = ({
  placeHolder = 'What do you want to watch?',
  classes,
  changeHandler,
  value,
}) => {
  return (
    <input
      className={classnames(CLASSES.NETFLIX_INPUT, classes)}
      placeholder={placeHolder}
      onChange={changeHandler}
      value={value}
    />
  );
};

export default Input;