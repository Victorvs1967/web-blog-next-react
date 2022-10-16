import React from 'react';
import cl from 'classnames';
import Link from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import styles from './index.module.scss';

const Article = ({ 
  className,
  backUrl,
  children 
}) => (
  <article 
    className={ cl(className, styles.article) }
  >
    <Link href={ backUrl }>
      <a className={ styles.articleBack }>
        <AiOutlineArrowLeft />
      </a>
    </Link>
    <div className={ styles.articleContent }>
      { children }
    </div>
  </article>
);

export default Article;