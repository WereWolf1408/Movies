import React from 'react';
import { Logo } from '@utils/utils';

import './style.less';

const CLASSES = {
  NETFLIX_APP_FOOTER: 'netflix-app__footer',
  NETFLIX_APP_FOOTER_LOGO: 'netflix-app__footer-logo',
};

const Footer = () => {
  return (
    <div className={CLASSES.NETFLIX_APP_FOOTER}>
      <Logo classes={CLASSES.NETFLIX_APP_FOOTER_LOGO} />
    </div>
  );
};

export default Footer;
