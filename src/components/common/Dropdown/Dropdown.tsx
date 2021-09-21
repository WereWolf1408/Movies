import React from 'react';

import './Dropdown.less';

interface DropdownProps {
  (): JSX.Element;
}

export const Dropdown: DropdownProps = () => {
  return <span className={'test'}>Dropdown</span>;
};
