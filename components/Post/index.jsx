import React from 'react';
import cl from 'classnames';

import styles from './index.module.scss';

const Post = ({ className }) => (
  <div
  className={ cl(className, styles.article) }
  >
  Post
  </div>
);

export default Post;