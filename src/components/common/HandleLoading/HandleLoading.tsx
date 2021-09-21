import React from 'react';

import './HandleLoading.less';

type CallbackProps = { isLoading?: boolean; props?: unknown };

interface HandleLoadingProps {
  (Component: Function): (props: CallbackProps) => JSX.Element;
}

export const HandleLoading: HandleLoadingProps = (Component) => {
  const Loading = () => (
    <div>
      <h1>Loading....</h1>
    </div>
  );

  return ({ isLoading = false, props }: CallbackProps) => {
    if (isLoading) {
      return <Loading />;
    }
    return <Component {...props} />;
  };
};
