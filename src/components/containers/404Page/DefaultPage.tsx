import React from 'react';
import Image from '../../../../assets/404.jpg';

import './DefaultPage.less';

export const DefaultPage = () => {
  return (
    <section className={'neflix-app__default-page'}>
      <img src={Image} alt="" />
    </section>
  );
};
