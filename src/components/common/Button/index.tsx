import React from 'react';
const classnames = require('classnames');

import './style.less';

const CLASSES = {
  NETFLIX_BUTTON: 'netflix-app__button',
};

interface ButtonProps {
  (props: { text: string; classes?: string; clickHandler?: () => void }): JSX.Element;
}

const Button: ButtonProps = ({ text, classes, clickHandler = null }) => {
  return (
    <div
      onClick={clickHandler}
      className={classnames(CLASSES.NETFLIX_BUTTON, classes)}
    >
      {text}
    </div>
  );
};

export default Button;