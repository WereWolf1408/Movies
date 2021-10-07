import React, { useState } from 'react';
import { DropdownCallbackProps } from '@utils/interfaces';

import './style.less';
import classNames from 'classnames';

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
    callback?: DropdownCallbackProps;
    dropdownType: 'simple' | 'multiline';
  }): JSX.Element;
}

const Dropdown: DropdownProps = ({ callback, options, dropdownType }) => {
  const [selected, setSelected] = useState<string>(options[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [optionsHolder, setOptionsHolder] = useState([options[0]]);

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
    const modifyArr = (): Array<string> => {
      if (checked) {
        optionsHolder.push(option);
        return [...optionsHolder];
      }
      const filteredArr = optionsHolder.filter((value) => value !== option);
      return filteredArr;
    };
    const changedArr = modifyArr();
    //ask about time to update state!!! there is some delay when you update state. how to handle case when you need new state immediately
    //another question the following: is it ok to call below method inside useEffect() ?
    //i have some concerns is it ok 
    //to divide useState functions, i mean some 
    //of them called inside functions like event 
    //handles and another common functionality move inside useEffect
    //setSelected(changedArr.toString());
    setOptionsHolder(changedArr);
    setSelected(changedArr.toString());
    callback && callback(changedArr);
  };

  const selectedOptionClickHandler = () => {
    setIsOpen((prevVal) => !prevVal);
  };

  const renderDropdownOutputElement = () => {
    if (dropdownType === 'simple') {
      return <span onClick={selectedOptionClickHandler}>{selected}</span>;
    }
    return (
      <input
        className={'netflix-app__input'}
        readOnly={true}
        onClick={selectedOptionClickHandler}
        value={selected}
      />
    );
  };

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
            return dropdownType === 'simple' ? (
              <span
                key={index}
                className={classNames({ ['active']: item === selected })}
                onClick={() => clickHandler(item)}
              >
                {item}
              </span>
            ) : (
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
                  />
                  {item}
                </label>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
