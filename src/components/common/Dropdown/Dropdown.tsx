import React, { useEffect, useState } from 'react';
import { DropdownCallbackProps, InputFormProps } from '../../../utils/interfaces';
import { UseFormRegister, Path } from 'react-hook-form';
import classNames from 'classnames';
import { ValidationFormOptionsProps } from '../../../utils/interfaces';

import './Dropdown.less';

const CLASSES = {
  NETFLIX_APP_DROPDOWN: 'netflix-app__dropdown',
  NETFLIX_APP_DROPDOWN_OPTIONS: 'netflix-app__dropdown-options',
  NETFLIX_APP_DROPDOWN_FIELD: 'netflix-app__dropdown-field',
  NETFLIX_APP_DROPDOWN_CHECKBOX: 'netflix-app__dropdown-checkbox',
  NETFLIX_APP_DROPDOWN_CHECKBOX_LABEL: 'netflix-app__dropdown-checkbox-label',
};

interface DropdownProps {
  (props: {
    options: Array<string>;
    dropdownType: 'simple' | 'multiline';
    label?: Path<InputFormProps>;
    validationOptions?: ValidationFormOptionsProps;
    errors?: string;
    selectedValue?: string;
    callback?: DropdownCallbackProps;
    register?: UseFormRegister<InputFormProps>;
  }): JSX.Element;
}

export const Dropdown: DropdownProps = ({
  callback,
  options,
  dropdownType,
  register,
  label,
  validationOptions,
  errors,
  selectedValue,
}) => {
  const [selected, setSelected] = useState<string>('select value');
  const [isOpen, setIsOpen] = useState(false);
  const [optionsHolder, setOptionsHolder] = useState([]);

  useEffect(() => {
    if (selectedValue) {
      setSelected(selectedValue);
    } else {
      setSelected('select value');
    }
  }, [selectedValue]);

  const clickHandler = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    callback && callback(option);
  };

  const multilineClickHandler = (
    option: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { checked } = event.currentTarget;
    let newArray = [];
    if (checked) {
      optionsHolder.push(option);
      newArray = [...optionsHolder];
    } else {
      newArray = optionsHolder.filter((value) => value !== option);
    }
    setOptionsHolder(newArray);
    setSelected(newArray.toString());
    callback && callback(newArray);
  };

  const selectedOptionClickHandler = () => {
    setIsOpen((prevVal) => !prevVal);
  };

  const renderDropdownOutputElement = () => {
    if (dropdownType === 'simple') {
      return <span onClick={selectedOptionClickHandler}>{selected}</span>;
    }
    return (
      <>
        <input
          className={'netflix-app__input'}
          readOnly={true}
          {...register(label, validationOptions)}
          onClick={selectedOptionClickHandler}
          value={selected}
          placeholder={'select value'}
        />
        {errors && (
          <span className={'netflix-app__input-error-label'}>
            This is filed is required
          </span>
        )}
      </>
    );
  };

  const simpleDropdownOptionView = (item: string, index: number) => (
    <span
      key={index}
      className={classNames({ ['active']: item === selected })}
      onClick={() => clickHandler(item)}
    >
      {item}
    </span>
  );

  const multilineDropdownOptionView = (item: string, index: number) => (
    <div
      key={index}
      className={classNames({ ['active']: optionsHolder.includes(item) })}
    >
      <label htmlFor="" className={CLASSES.NETFLIX_APP_DROPDOWN_CHECKBOX_LABEL}>
        <input
          className={CLASSES.NETFLIX_APP_DROPDOWN_CHECKBOX}
          type="checkbox"
          value={item}
          checked={optionsHolder.includes(item)}
          onChange={(event) => multilineClickHandler(item, event)}
          role={'checkbox'}
        />
        {item}
      </label>
    </div>
  );

  return (
    <div
      className={classNames(CLASSES.NETFLIX_APP_DROPDOWN, {
        [CLASSES.NETFLIX_APP_DROPDOWN_FIELD]: dropdownType === 'multiline',
      })}
    >
      {renderDropdownOutputElement()}
      {isOpen && (
        <div className={CLASSES.NETFLIX_APP_DROPDOWN_OPTIONS}>
          {options.map((item, index) => {
            return dropdownType === 'simple'
              ? simpleDropdownOptionView(item, index)
              : multilineDropdownOptionView(item, index);
          })}
        </div>
      )}
    </div>
  );
};
