import React from 'react';
import { UseFormRegister, Path } from 'react-hook-form';
import { InputFormProps } from '@utils/interfaces';

import './DateInput.less';

const CLASSES = {
  NETFLIX_APP_DATE_INPUT: 'netflix-app-date-input',
};

interface DateInputPorps {
  (props: {
    label?: Path<InputFormProps>;
    register?: UseFormRegister<InputFormProps>;
  }): JSX.Element;
}

export const DateInput: DateInputPorps = ({ label, register }) => {
  return (
    <input
      className={CLASSES.NETFLIX_APP_DATE_INPUT}
      type="date"
      id="start"
      name="trip-start"
      min="2018-01-01"
      max="2018-12-31"
      {...register(label)}
    />
  );
};
