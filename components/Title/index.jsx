import React from 'react';
import cl from 'classnames';

import styles from './index.module.scss';

const Title = ({ className, type, children }) => {
  return type === 'small' ?
  (<h3 className={ cl(className, styles.title, styles.titleSmall) }>{ children }</h3>) :
  (<h2 className={ cl(className, styles.title, styles.titleMedium) }>{ children }</h2>);
};

export default Title;