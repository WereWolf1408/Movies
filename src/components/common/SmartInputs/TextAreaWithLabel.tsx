import React from 'react';
import { SmartInputProps } from './interfaces';

interface ExtendSmartProps extends SmartInputProps {
  changeHandler: (event: React.FormEvent<HTMLTextAreaElement>) => void;
}

interface TextAreaWithLabelProps {
  (props: ExtendSmartProps): JSX.Element;
}

export const TextAreaWithLabel: TextAreaWithLabelProps = ({
  changeHandler,
  labelText,
  classes,
  placeholder,
  value,
}) => {
  return (
    <div className={classes}>
      <label htmlFor="">{labelText}</label>
      <textarea name="" id="" cols={30} rows={10} onChange={changeHandler} placeholder={placeholder} />
    </div>
  );
};
