import React from 'react';
import cl from 'classnames';

import styles from './index.module.scss';

const Article = ({ className, children }) => (
  <article 
    className={ cl(className, styles.article) }
  >
  { children }
  </article>
);

export default Article;