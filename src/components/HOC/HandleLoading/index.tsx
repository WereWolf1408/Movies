import React from 'react';

import './style.less';

type CallbackProps = { isLoading?: boolean; props?: unknown };

//<T,> - this is a feature of TS laguage; another way to handle it is <T extends {}>
const HandleLoading = <T,>(Component: Function) => {
  const Loading = () => (
    <div>
      <h1>Loading....</h1>
    </div>
  );

  return ({
    isLoading = false,
    props,
  }: {
    isLoading?: boolean;
    props?: T;
  }): JSX.Element => {
    if (isLoading) {
      return <Loading />;
    }
    return <Component {...props} />;
  };
};

export default HandleLoading;
