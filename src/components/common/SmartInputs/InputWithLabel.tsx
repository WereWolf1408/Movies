import React from 'react';
import { Input } from '../Input';
import { SmartInputProps } from './interfaces';

interface ExtendSmartProps extends SmartInputProps {
  changeHandler: (event: React.FormEvent<HTMLInputElement>) => void;
}

interface InputWithLabelProps {
  (props: ExtendSmartProps): JSX.Element;
}

export const InputWithLabel: InputWithLabelProps = ({
  changeHandler,
  labelText,
  classes,
  placeholder,
  value,
}) => {
  return (
    <div className={classes}>
      <label htmlFor="">{labelText}</label>
      <Input
        changeHandler={changeHandler}
        placeHolder={placeholder}
        value={value}
      />
    </div>
  );
};
