import React from 'react';
import { Dropdown } from '../Dropdown';
import { SmartInputProps } from './interfaces';

interface SmartInputExtProps extends SmartInputProps {
  changeHandler: (value: Array<string>) => void;
}

interface DropdownInputProps {
  (props: SmartInputExtProps): JSX.Element;
}

export const DropdownInput: DropdownInputProps = ({
  changeHandler,
  labelText,
  classes,
  placeholder,
  options,
}) => {
  return (
    <div className={classes}>
      <label htmlFor="">{labelText}</label>
      <Dropdown options={options} callback={changeHandler} dropdownType={'multiline'} />
    </div>
  );
};
