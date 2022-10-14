import React from 'react';
import cl from 'classnames';

import styles from './index.module.scss';

const Content = ({ className }) => (
  <div
  className={ cl(className, styles.article) }
  >
  Content
  </div>
);

export default Content;