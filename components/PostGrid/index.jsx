import React from 'react';
import cl from 'classnames';

import styles from './index.module.scss';

const PostGrid = ({ className }) => (
  <div
  className={ cl(className, styles.article) }
  >
  PostGrid
  </div>
);

export default PostGrid;