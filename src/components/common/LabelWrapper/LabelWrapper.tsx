import React from 'react';

interface LabelWrapperProps {
  (props: {
    classes: string;
    labelText: string;
    children: React.ReactNode;
  }): JSX.Element;
}

export const LabelWrapper: LabelWrapperProps = ({
  labelText,
  children,
  classes,
}) => {
  return (
    <div className={classes}>
      <label htmlFor="">{labelText}</label>
      {children}
    </div>
  );
};