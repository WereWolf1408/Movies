import React from 'react';
const classnames = require('classnames');

import './Button.less';

const CLASSES = {
  NETFLIX_BUTTON: 'netflix-app__button',
};

interface ButtonProps {
  (props: {
    text: string;
    classes?: string;
    clickHandler?: () => void;
    submit?: boolean;
  }): JSX.Element;
}

export const Button: ButtonProps = ({ text, classes, clickHandler = null, submit }) => {
  return submit ? (
    <input
      type="submit"
      className={classnames(CLASSES.NETFLIX_BUTTON, 'submit', classes)}
    />
  ) : (
    <div
      onClick={clickHandler}
      className={classnames(CLASSES.NETFLIX_BUTTON, classes)}
    >
      {text}
    </div>
  );
};