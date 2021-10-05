import React from 'react';
import { SmartInputProps } from './interfaces';
import classNames from 'classnames';

import './styles.less';

interface ExtendSmartProps extends SmartInputProps {
  changeHandler: (event: React.FormEvent<HTMLInputElement>) => void;
}

interface DateInputProps {
  (props: ExtendSmartProps): JSX.Element;
}

export const DateInput: DateInputProps = ({
  changeHandler,
  labelText,
  classes,
  placeholder,
  value,
}) => {
  return (
    <div className={classNames(classes, 'date-input')}>
      <label htmlFor="">{labelText}</label>
      <input
        type="date"
        id="start"
        name="trip-start"
        value={value}
        min="2018-01-01"
        max="2018-12-31"
        onChange={changeHandler}
      />
    </div>
  );
};
