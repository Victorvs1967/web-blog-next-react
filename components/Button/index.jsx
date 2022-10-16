import React from 'react';
import cl from 'classnames';

import styles from './index.module.scss';

const Button = ({ className, children, onClick, disabled }) => (
  <div
    className={ cl(className, styles.button) }
    disabled={ disabled }
    onClick={ onClick }
  >
  { children }
  </div>
);

export default Button;