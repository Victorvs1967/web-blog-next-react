import React from 'react';
import cl from 'classnames';

import styles from './index.module.scss';

const Button = ({ className }) => (
  <div    
  className={ cl(className, styles.article) }
  >
  Button
  </div>
);

export default Button;