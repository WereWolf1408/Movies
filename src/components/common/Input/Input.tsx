import React from 'react';

const classnames = require('classnames');

import './Input.less';

const CLASSES = {
  NETFLIX_INPUT: 'netflix-app__input',
};

interface InputProps {
  (props: {
    keyPressHandler: () => void;
    placeHolder?: string;
    classes?: string;
  }): JSX.Element;
}

export const Input: InputProps = ({
  placeHolder = 'What do you want to watch?',
  classes,
  keyPressHandler,
}) => {
  return (
    <input
      className={classnames(CLASSES.NETFLIX_INPUT, classes)}
      placeholder={placeHolder}
      onKeyPress={keyPressHandler}
    />
  );
};
