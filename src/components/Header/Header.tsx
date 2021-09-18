import React from 'react';

interface HeaderProps {
  (props: { title: string }): JSX.Element;
}

export const Header: HeaderProps = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};
